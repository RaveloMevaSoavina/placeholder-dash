import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Blog from '../../components/Blog/Blog';
import Pagination from '../../components/UI/Pagination/Pagination'
import FormTodos from '../../components/UI/Form/TodosForm'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Todos({data}) {
    const router = useRouter()
    const [basedTodos, setBaseTodos] = useState(data.todos);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = basedTodos.slice(indexOfFirstPost, indexOfLastPost);
    const [openNew , setOpenNew] = useState(false)
    const [edit , setEdit] = useState([])
    const [editing, setEdition] = useState(false)

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const redirectToSingle = (id) => { 
        router.push(`todos/${id}`);
    }
    const handleremove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        }).then(()=>setBaseTodos(basedTodos?.filter(post=> post.id != id)));

        ;
    }

    const handleEdit = (id) => {
        setOpenNew(true);
        setEdition(true);
        setEdit(basedTodos.filter(todo=> todo.id == id));
    }

    const handleAddorUpdate = (news) => {
        console.log(news);
        !editing ? setBaseTodos([...basedTodos, news]) : setBaseTodos([...basedTodos, basedTodos[news.id - 1].title =  news.title, basedTodos[news.id - 1].userId =  news.userId]);
    }

    return (
        <Container>
            <Head>
                <title>(+{basedTodos.length-1}) Todos | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            <Titlebar title="Todos" subtitle={`All public todos based on authors (${basedTodos.length} items)`}/>
                <ActionGroup>
                    <Button onClick={()=>setOpenNew(!openNew)}> <FontAwesomeIcon icon={faPlus}/> <span>Add a new Todos</span></Button>
                </ActionGroup>
            {openNew && <FormTodos setList={handleAddorUpdate} edit={edit} editing={editing}/>}
            <Blog data={currentPosts} redirect={redirectToSingle} users={data.users} remove={handleremove} edit={handleEdit} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={basedTodos.length}
                paginate={paginate}
            />
        </Container>
    )
}

export default Todos

const Container = styled.div`
    display : flex;
    flex-direction : column;
    flex :1;
`

const Button = styled.button`
    padding : 10px 20px;
    background-color : #1E3CBF;
    color : #DDE4F0;
    border : none;
    margin : 20px 30px;
    cursor : pointer;
    outline : none;
    span{
        margin-left :10px;
    }
`

const ActionGroup = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : right;
`
