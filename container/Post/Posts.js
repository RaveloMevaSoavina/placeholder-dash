import styled from 'styled-components'
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import Blog from '../../components/Blog/Blog';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react';

import Pagination from '../../components/UI/Pagination/Pagination'
import Form from '../../components/UI/Form/Form'
import Filter from '../../components/UI/Filter/Filter'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faFilter } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function posts({data}) {
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [openNew , setOpenNew] = useState(false)
    const [basedPosts, setBasePosts] = useState(data.posts);
    

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = basedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const redirectToSingle = (id) => { 
        router.push(`posts/${id}`);
    }

    const handleremove = (id) => {
        setBasePosts(basedPosts?.filter(post=> post.id != id));
    }


    return (
        <div>
            <Head>
                <title>(+{basedPosts.length-1}) Posts | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            <Titlebar title="Posts" subtitle={`All public posts (${basedPosts.length} items)`}/>
            <Content>
            <div>
                <ActionGroup>
                    <Button onClick={()=>setOpenNew(!openNew)}> <FontAwesomeIcon icon={faPlus}/> <span>Add a new Post</span></Button>
                </ActionGroup>
                <Blog data={currentPosts} redirect={redirectToSingle} users={data.users} remove={handleremove}/>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={basedPosts.length}
                    paginate={paginate}
                />
            </div>
            {openNew && <FormContainer>
                <Form setList={(news)=>setBasePosts([...basedPosts, news])}/>
            </FormContainer>}
            </Content>
        </div>
    )
}

export default posts

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

const Content = styled.div`
    display : flex;
    flex-direction : row;
`

const FormContainer = styled.div`

`