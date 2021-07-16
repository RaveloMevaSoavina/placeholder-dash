import { useEffect, useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components'

import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Card from '../../components/Card/OverviewCard/Card';
import List from '../../components/List/List';

import { faClipboard } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faComments } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faImages } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faList } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need


function Overview({data}) {
    const [users, setusers] = useState(data.users);

    const handleremove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        }).then(()=>setusers(users?.filter(post=> post.id != id)));

        ;
    }

    return (
        <div>
            <Head>
            <title>Overview | Placeholder</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
        </Head>
        <br/>
            <Titlebar title="Overview" subtitle="Global view of all common resources"/>
            <CardContainer>
                <Card icon={faClipboard} label="Posts" itemnumber={data?.posts?.length}/>
                <Card icon={ faComments } label="Comments" itemnumber={data?.comments?.length}/>
                <Card icon={ faPhotoVideo } label="Albums" itemnumber={data?.albums?.length}/>
                <Card icon={ faImages } label="Photos" itemnumber={data?.photos?.length}/>
                <Card icon={ faList } label="Todos" itemnumber={data?.todos?.length}/>
                <Card icon={ faUser } label="Users" itemnumber={data?.users?.length}/>
            </CardContainer>
            <Titlebar title="Users" subtitle="All users"/>
            <ListUserContainer>
                {
                users?.map(usr=>
                    <List 
                    key={usr.id} 
                    id={usr.id} 
                    name = {usr.name}
                    username={usr.username} 
                    email={usr.email} 
                    phone={usr.phone} 
                    posted={data?.posts}
                    todos={data?.todos}
                    remove={handleremove}/>
                )}
            </ListUserContainer>
        </div>
    )
}

export default Overview

const CardContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    flex-wrap : wrap;
    cursor : pointer;
`

const ListUserContainer = styled.table`
    display : flex;
    flex-direction : column;
    cursor : pointer;
    padding-left : 20px;
    width : 100%;
    margin : 0 auto;
`

