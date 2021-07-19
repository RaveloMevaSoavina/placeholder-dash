// React
import React from 'react'

// Internal Component
import Users from '../../container/Users/Users'

function User({data}) {
    return (
    // Appelle du composant container de TODOS_PAGE
    /**
     * @ TODOS_PAGE
     * @ http://localhost:3000/todos
     * @ page/todos/
     * RETURN Component
     * CONTAINER Container/Todos
     */
    <Users data={data}/>)
}

export default User;


export async function getServerSideProps(context) {
  // Récupération de tout les posts
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  // Récupération de tout les todos
    const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`)

  // Récupération de tout les utilisateurs
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)

    // compacter les données sous forme d'objet
    let data = {
        posts : await posts.json(),
        todos : await todos.json(),
        users : await users.json()
    };
  
  // controlle d'érreur au cas où data vaut null ou undefined
    if (!data) {
      return {
        notFound: true,
      }
    }
  
      // Valeur retourner en SSR de data
  /*
    Forme globale de sortie de data
    {posts : [{...}],todos : [{...}],users : [{...}]}
  }
  */
    return {
      props: {data},
    }
  }
