import React from 'react'
import SingleUser from '../../container/Users/SingleUser';

function Singleuser({data}) {
    return (
        <div>
          <SingleUser data={data}/>
        </div>
    )
}

export default Singleuser

export async function getServerSideProps(context) {
    const {params} = context
    const users = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    let data = { users :await users.json(), posts : await posts.json(), todos : await todos.json()};
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data},
    }
  }
