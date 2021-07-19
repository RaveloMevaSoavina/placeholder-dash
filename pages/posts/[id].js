import React from 'react'
import SinglePost from '../../container/Post/SinglePost';

function Singlepost({data}) {
    return (
        <div>
          <SinglePost data={data}/>
        </div>
    )
}

export default Singlepost

export async function getServerSideProps(context) {
    const {params} = context
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    
    let data = { posts :await posts.json(), comments : await comments.json() };
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data},
    }
  }
