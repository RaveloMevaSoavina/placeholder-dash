// React
import { useEffect, useState } from 'react';

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'

// Stylesheet
import styled from 'styled-components'

// Internal components
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import List from '../../components/List/List';

function Users({data}) {
    const router = useRouter()

    {/** Stocke les resources de tous les users */}
    const [users, setusers] = useState(data.users);

    {/** Function pour la supression d'un user */}
    const handleremove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        }).then(()=>setusers(users?.filter(post=> post.id != id)));

        ;
    }

    {/** Redirection lors du clique sur un post pour /post/id */}
    const redirectToSingle = (id) => { 
        router.push(`users/${id}`);
    }

    return (
        <Container>
            {/** SEO Goes here */}
            <Head>
                <title>Users | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            {/** Grand Titre */}
            <Titlebar title="Users" subtitle={`All users (${users.length} personnes)`}/>
            {/** Liste de tous les utilisateurs*/}
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
                    remove={handleremove}
                    redirect={redirectToSingle}/>
                )}
            </ListUserContainer>
        </Container>
    )
}

export default Users

const Container = styled.div`
    display : flex;
    flex-direction : column;
    min-height : 100vh;
    min-width : 92vw;
`

const ListUserContainer = styled.table`
    display : flex;
    flex-direction : column;
    cursor : pointer;
    padding-left : 20px;
    width : 100%;
    margin : 0 auto;
`
