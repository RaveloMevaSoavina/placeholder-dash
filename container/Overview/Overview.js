// React
import { useEffect, useState } from 'react';
// Stylesheet
import styled from 'styled-components'
// Next
import Head from 'next/head'
import { useRouter } from 'next/router'
// Component
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Card from '../../components/Card/OverviewCard/Card';
import List from '../../components/List/List';
// Tiers Libraries
import { faClipboard } from "@fortawesome/free-solid-svg-icons"; 
import { faComments } from "@fortawesome/free-solid-svg-icons"; 
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons"; 
import { faImages } from "@fortawesome/free-solid-svg-icons"; 
import { faList } from "@fortawesome/free-solid-svg-icons"; 
import { faUser } from "@fortawesome/free-solid-svg-icons"; 


const Overview = ({data})  => {
    const router = useRouter()
    // State pour stocker tout les users
    const [users, setusers] = useState(data.users);

    // Fonction pour la suppression d'un user
    const handleremove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{method: 'DELETE',})
        .then(()=>setusers(users?.filter(post=> post.id != id)));
    }

    {/** Redirection lors du clique sur un post pour /post/id */}
    const redirectToSingle = (id) => { 
        router.push(`users/${id}`);
    }

    {/** Redirection lors du clique sur un post pour /post/id */}
    const redirectToResources = (label) => { 
        router.push(`${label}`);
    }

    return (
        <div>
            {/* EASY SEO PLACE */}
            <Head>
                <title> Overview | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            {/* TITRE DE PREMIER NIVEAU OVERVIEW */}
            <Titlebar title="Overview" subtitle="Global view of all common resources"/>
            {/* Les 06 cartes des resources */}
            <CardContainer>
                <Card icon={faClipboard} label="Posts" itemnumber={data?.posts?.length} redirect={redirectToResources}/>
                <Card icon={ faComments } label="Comments" itemnumber={data?.comments?.length}/>
                <Card icon={ faPhotoVideo } label="Albums" itemnumber={data?.albums?.length}/>
                <Card icon={ faImages } label="Photos" itemnumber={data?.photos?.length}/>
                <Card icon={ faList } label="Todos" itemnumber={data?.todos?.length} redirect={redirectToResources}/>
                <Card icon={ faUser } label="Users" itemnumber={data?.users?.length} redirect={redirectToResources}/>
            </CardContainer>
            {/* TITRE DE PREMIER NIVEAU OVERVIEW */}
            <Titlebar title="Users" subtitle="All users"/>
            {/* Liste de toute les utilisateurs dans resources jsonplaceholder */}
            <ListUserContainer>
                {users?.map(usr=>
                    <List 
                    key={usr.id} 
                    id={usr.id} 
                    name = {usr.name}
                    username={usr.username} 
                    email={usr.email} 
                    phone={usr.phone} 
                    posted={data?.posts}
                    todos={data?.todos}
                    remove={handleremove}
                    redirect={redirectToSingle}
                    readOnly={true}
                    />
                )}
            </ListUserContainer>
        </div>
    )
}

export default Overview;

const CardContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    flex-wrap : wrap;
    cursor : pointer;
`

const ListUserContainer = styled.table` 
    width : 100%;
    display : flex;
    flex-direction : column;
    cursor : pointer;
    padding-left : 20px;
    margin : 0 auto;
`

