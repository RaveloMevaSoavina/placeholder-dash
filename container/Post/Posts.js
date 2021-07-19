// React
import { useEffect, useState } from 'react';

// Stylesheet
import styled from 'styled-components'

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'

// Internal Component
import Blog from '../../components/Blog/Blog';
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Pagination from '../../components/UI/Pagination/Pagination'
import Form from '../../components/UI/Form/Form'

// Tiers Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function posts({data}) {
    const router = useRouter()

    {/** Stocke les resources de tous les todos */}
    const [basedPosts, setBasePosts] = useState(data.posts);
    const [basedUsers, setBaseUsers] = useState(data.users)
    {/** Stocke l'item à éditer */}
    const [edit , setEdit] = useState([])

    {/** IsEditing : BOOL */}
    const [editing, setEdition] = useState(false)

    {/** State pour la pagination */}
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [openNew , setOpenNew] = useState(false)
    
    
    {/** Calcul sur la pagination */}
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = basedPosts.slice(indexOfFirstPost, indexOfLastPost);

    {/** Function  appelle le bon page en pagination*/}
    const paginate = pageNumber => setCurrentPage(pageNumber);

    {/** Redirection lors du clique sur un post pour /post/id */}
    const redirectToSingle = (id) => { 
        router.push(`posts/${id}`);
    }

    {/** Function pour la supressioin d'un post */}
    const handleremove = (id) => {
        if(id >basedPosts.lenght + 1){
        fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})
        .then(()=>setBasePosts(basedPosts?.filter(post=> post.id != id)))
        }else{
            setBasePosts(basedPosts?.filter(post=> post.id != id))
        }

    }

    {/** Fonction pour la manipulation de l'edition d'un post */}
    const handleEdit = (id) => {
        setOpenNew(true);
        setEdition(true);
        setEdit(basedPosts.filter(todo=> todo.id == id));
    }

    {/** Updating the resources*/}
    const handleAddorUpdate = (news) => {
        let objIndex;
        if(!editing){
            // to add
            setBasePosts([...basedPosts, news]) 
        } else{
            // to update
            objIndex = basedPosts.findIndex((obj => obj.id == news.id))
            basedPosts[objIndex].title =  news.title,
            basedPosts[objIndex].body =  news.body,
            basedPosts[objIndex].userId =  news.userId
        }
        setEdition(false);
    }

    return (
        <Container>
            {/** SEO Goes here */}
            <Head>
                <title>(+{basedPosts.length-1}) Posts | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            {/** Grand Titre */}
            <Titlebar title="Posts" subtitle={`All public posts (${basedPosts.length} items)`}/>
            {/** Button pour l'ajour d'un post */}
            <ActionGroup>
                <Button onClick={()=>setOpenNew(!openNew)}>
                    <FontAwesomeIcon icon={faPlus}/> 
                    <span>Add a new Post</span>
                </Button>
            </ActionGroup>
            {/** Formulaire d'édition ou d'ajour d'un post */}
            {openNew && <Form setList={handleAddorUpdate} edit={edit} editing={editing}/>}
            {/** Liste de tous le post paginer*/}
            <BlogContainer>
            {currentPosts?.map(post=>
                <Blog 
                    id={post?.id} 
                    title={post?.title?.charAt(0)?.toUpperCase() + post?.title?.slice(1)}
                    author={basedUsers?.filter(user => user?.id === post?.userId)[0]?.name}
                    complete={post?.complete}
                    body={post?.body?.charAt(0)?.toUpperCase() + post?.body?.slice(1)}
                    redirect={redirectToSingle} 
                    remove={handleremove} 
                    edit={handleEdit} 
                />)}
            </BlogContainer>
            {/** Lien de pagination */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={basedPosts.length}
                paginate={paginate}
            />
        </Container>
    )
}

export default posts

const Container = styled.div`
    display : flex;
    flex-direction : column;
    min-width : 92vw;

`

const Button = styled.button`
    padding : 10px 20px;
    background-color : #1E3CBF;
    color : #DDE4F0;
    border : none;
    margin : 20px 30px;
    cursor : pointer;
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
    flex-direction : column;
    width : 100%;
    justify-content : space-between;
    flex-wrap : wrap;
`