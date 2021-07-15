import React from 'react'
import Post from '../../container/Post/Posts'

function posts({data}) {
    return (<Post data={data}/>)
}

export default posts


export async function getServerSideProps(context) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let data = {
      posts : await posts.json(),
      users : await users.json()
    };
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data},
    }
  }
