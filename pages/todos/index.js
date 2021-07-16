import React from 'react'
import Todos from '../../container/Todos/Todos'

function To_do({data}) {
    return (<Todos data={data}/>)
}

export default To_do;


export async function getServerSideProps(context) {
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let data = {
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
