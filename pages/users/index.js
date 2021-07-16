import React from 'react'
import Users from '../../container/Users/Users'

function User({data}) {
    return (<Users data={data}/>)
}

export default User;


export async function getServerSideProps(context) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let data = {
        posts : await posts.json(),
        todos : await todos.json(),
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
