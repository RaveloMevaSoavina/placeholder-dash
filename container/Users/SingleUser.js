import React , {useState} from 'react'

import styled from 'styled-components'

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'

import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Blog from '../../components/Blog/Blog';
import Pagination from '../../components/UI/Pagination/Pagination'

function SingleUser({data}) {
    const router = useRouter()

    const [user , setUser] = useState(data.users)
    const [post , setpost] = useState(data.posts?.filter(post=> post.userId === user.id))
    const [todo , setTodo] = useState(data.todos?.filter(todo=> todo.userId === user.id))

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [openNew , setOpenNew] = useState(false)

    const [currentPageTodos, setCurrentPageTodos] = useState(1);
    
    
    {/** Calcul sur la pagination */}
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

    {/** Calcul sur la pagination for todos*/}
    const indexOfLastTodo = currentPageTodos * postsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
    const currentTodo = todo.slice(indexOfFirstTodo, indexOfLastTodo);

    {/** Function  appelle le bon page en pagination*/}
    const paginatePosts = pageNumber => setCurrentPage(pageNumber);
    const paginateTodo = pageNumber => setCurrentPageTodos(pageNumber);


    {/** Redirection lors du clique sur un post pour /post/id */}
    const redirectToSingle = (id) => { 
        router.push(`/posts/${id}`);
    }

    {/** Function pour la supressioin d'un post */}
    const handleremove = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})
        .then(()=>setBasePosts(basedPosts?.filter(post=> post.id != id)))

    }

    {/** Fonction pour la manipulation de l'edition d'un post */}
    const handleEdit = (id) => {
        setOpenNew(true);
        setEdition(true);
        setEdit(basedPosts.filter(todo=> todo.id == id));
    }

    

    return (
        <Container>
            <Head>
                <title> {user.name} | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            <Titlebar title="About" subtitle="Concerning a user"/>
            <Content>
                <Profile>
                    <img alt="avatar" src="/assets/images/avatar.jpg"/>
                    <Name>{user.name} (<span>{user.username}</span>)</Name>
                    <Email>email : {user.email} - phone :{user.phone.split(" ")[0]}</Email>
                    
                    <h5>LOCATION :</h5>
                    <Email>{user.address.suite}{user.address.street}{user.address.city}</Email>
                    <Email>{"www."+user.website} | {user.company.name}</Email>
                </Profile>
                <RightSide>
                    <Titlebar title="Post public" subtitle={`All of ${user.name} posts`}/>
                        {currentPosts?.map(pos => 
                        <Blog 
                        id={pos?.id} 
                        title={pos?.title?.charAt(0)?.toUpperCase() + pos?.title?.slice(1)}
                        complete={pos?.complete}
                        body={pos?.body?.charAt(0)?.toUpperCase() + pos?.body?.slice(1)}
                        redirect={redirectToSingle} 
                        readOnly={true}
                        isAtUserProfile={true}
                        />)}
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={post.length}
                            paginate={paginatePosts}
            />
                </RightSide>
                <RightSide>
                    <Titlebar title="Todos public" subtitle={`All of ${user.name} todos`}/>
                        {currentTodo?.map(todo => 
                        <Blog 
                        id={todo?.id} 
                        title={todo?.title?.charAt(0)?.toUpperCase() + todo?.title?.slice(1)}
                        author={user.name}
                        complete={todo.completed}
                        redirect={redirectToSingle} 
                        remove={handleremove} 
                        edit={handleEdit} 
                        readOnly={true}
                        isAtUserProfile={true}
                        />)}
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={todo.length}
                            paginate={paginateTodo}
                        />
                </RightSide>
            </Content>
        </Container>
    )
}

export default SingleUser


const Container = styled.div`
    margin : 10px 20px;
    min-width : 85vw;
    min-height : 100vh;

`

const Content = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : space-around;
`

const Profile = styled.div`
    border : 1px solid rgba(0,0,0,0.09);
    width : 100%;
    height: 100%;
    padding : 20px 10px;
    margin : 10px 0;
    img{
        display : block;
        width : 25%;
        margin : 0 auto 20px auto;
    }
    h5{
        text-align : center;
    }
    
`

const RightSide = styled.div`
border : 1px solid rgba(0,0,0,0.09);
margin : 10px 0;
width : 100%;
`

const Name = styled.p`
    font-size : 1.5rem;
    font-weight : 800;
    text-align : center;
    margin : 5px;
    span{
        font-style : italic;
        font-size : 1.2rem;
    }
`

const Email = styled.p`
margin : 5px;
text-align : center;
`