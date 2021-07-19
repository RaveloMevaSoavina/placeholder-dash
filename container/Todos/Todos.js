// React
import { useEffect, useState } from 'react';

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'

// stylesheet
import styled from 'styled-components'

// internal components
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Blog from '../../components/Blog/Blog';
import Pagination from '../../components/UI/Pagination/Pagination'
import FormTodos from '../../components/UI/Form/TodosForm'

// Tiers Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons"; 

function Todos({data}) {
    const router = useRouter()

    {/** Stocke les resources de tous les todos */}
    const [basedTodos, setBaseTodos] = useState(data.todos);
    const [basedUsers, setBaseUsers] = useState(data.users);
    {/** Stocke l'item à éditer */}
    const [edit , setEdit] = useState([])
    {/** IsEditing : BOOL */}
    const [editing, setEdition] = useState(false)
    
    {/** State pour la pagination */}
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [openNew , setOpenNew] = useState(false)
    

    {/** Calcul sur la pagination */}
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = basedTodos.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    {/** Redirection lors du clique sur un post pour /todos/id */}
    const redirectToSingle = (id) => { 
        router.push(`todos/${id}`);
    }

    {/** Function pour la supressioin d'un post */}
    const handleremove = (id) => {
        if(id >basedTodos.lenght + 1){
            fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            }).then(()=>setBaseTodos(basedTodos?.filter(post=> post.id != id)));
        }else{
            setBaseTodos(basedTodos?.filter(post=> post.id != id))
        }
    }

    {/** Fonction pour la manipulation de l'edition d'un post */}
    const handleEdit = (id) => {
        setOpenNew(true);
        setEdition(true);
        setEdit(basedTodos.filter(todo=> todo.id == id));
    }

    {/** Updating the resources*/}
    const handleAddorUpdate = (news) => {
        let objIndex;
        if(!editing){
            // to add
            setBaseTodos([...basedTodos, news]) 
        } else{
            // to update
            objIndex = basedTodos.findIndex((obj => obj.id == news.id))
            basedTodos[objIndex].title =  news.title,
            basedTodos[objIndex].userId =  news.userId
        }
        setEdition(false);
    }

    const handleAddNew  = () => {
        if(editing){
            setEdition(false)
            setEdit([])
        }else{
            setOpenNew(true);
        }
    }

    return (
        <Container>
            {/** SEO Goes here */}
            <Head>
                <title>(+{basedTodos.length-1}) Todos | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            {/** Grand Titre */}
            <Titlebar title="Todos" subtitle={`All public todos based on authors (${basedTodos.length} items)`}/>
            {/* Button pour l'ajour d'un post */}
            <ActionGroup> 
                <Button onClick={()=> handleAddNew()}>
                <FontAwesomeIcon icon={faPlus}/> <span>Add a new Todos</span></Button>
            </ActionGroup>
            {/** Formulaire d'édition ou d'ajour d'un post */}
            {openNew && <FormTodos setList={handleAddorUpdate} edit={edit} editing={editing} autoclose={()=>setOpenNew(false)}/>}
            {/* Liste de tous le todos paginer*/}
            <BlogContainer>
            {currentPosts?.map(post=>
                <Blog 
                    id={post?.id} 
                    title={post?.title?.charAt(0)?.toUpperCase() + post?.title?.slice(1)}
                    author={basedUsers?.filter(user => user?.id === post?.userId)[0]?.name}
                    complete={post.completed}
                    redirect={redirectToSingle} 
                    remove={handleremove} 
                    edit={handleEdit} 
                />
                )}
            </BlogContainer>
            {/** Lien de pagination */}
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
    min-width : 92vw;
    min-height : 100vh;
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
const BlogContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    justify-content : space-between;
    flex-wrap : wrap;
`