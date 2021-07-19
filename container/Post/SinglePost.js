// React
import { useEffect, useState } from 'react';

// Stylesheet
import styled from 'styled-components'

// Next
import { useRouter } from 'next/router'
import Head from 'next/head'

// Internal Component
import Titlebar from '../../components/UI/TitleBar/Titlebar';
import CommentsCard from '../../components/Card/CommentsCard/Card';
// import CommentsForm from '../../components/UI/Form/CommentForm';

function SinglePost({data}) {
    const [post, setPost] = useState(data.posts)
    const [comments, setComments] = useState(data.comments)

    const handleRemove = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
        .then(()=> setComments(comments?.filter(coms=> coms.id != id)));
    }

    

    return (
        <Container>
            <Head>
                <title>{post.title} | Placeholder</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
            </Head>
            <h1>'' {post.title?.charAt(0)?.toUpperCase() + post.title?.slice(1)} ''</h1>
            <BodyPart>{post.body?.charAt(0)?.toUpperCase() + post.body?.slice(1)}</BodyPart>
            <br/>
            <hr/>
            <Titlebar title="Comments" subtitle={`All the comments (${comments.length} commentaires)`} />
            <CommentsContainer>
            {
            comments?.map(comment => 
                <CommentsCard 
                    key={comment.id}
                    id={comment.id}
                    name={comment.name?.charAt(0)?.toUpperCase() + comment.name?.slice(1)} 
                    email={comment.email}
                    body={comment.body?.charAt(0)?.toUpperCase() + comment.body?.slice(1)}
                    onRemove={handleRemove}
                />
            )}
            </CommentsContainer>
            {/* <Titlebar title="Add comments" subtitle="Posting your comments" />
            <CommentsForm id={post.id}/> */}
        </Container>
    )
}

export default SinglePost


const Container = styled.div`
    min-height : 100vh;
`

const CommentsContainer = styled.div`
    margin : 10px 20px;
    padding : 10px;
    h1{
    margin : 0 20px;

    }

`

const BodyPart = styled.div`
    font-weight : 600;
    font-style : italic;
    margin : 0 20px;
`