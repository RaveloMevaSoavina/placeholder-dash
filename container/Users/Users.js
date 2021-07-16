import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import List from '../../components/List/List';

function Users({data}) {
    const [users, setusers] = useState(data.users);

    const handleremove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        }).then(()=>setusers(users?.filter(post=> post.id != id)));

        ;
    }
    return (
        <Container>
            <Head>
                <title>Users | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            <Titlebar title="Users" subtitle={`All users (${users.length} personnes)`}/>
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
        </Container>
    )
}

export default Users

const Container = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;
`

const ListUserContainer = styled.table`
    display : flex;
    flex-direction : column;
    cursor : pointer;
    padding-left : 20px;
    width : 100%;
    margin : 0 auto;
`
