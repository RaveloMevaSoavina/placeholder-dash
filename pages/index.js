// Internal Component
import Overview from '../container/Overview/Overview';

export default function Home({data}) {
  return (
    // Appelle du composant container de OVERVIEW_PAGE
    /**
     * @ OVERVIEW_PAGE
     * @ http://localhost:3000/
     * @ page/index
     * RETURN Component
     * CONTAINER Container/Overview
     */
    <Overview data={data}/>
  )
}

// SSR

export async function getServerSideProps() {
  // Récupération de tout les posts
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  // Récupération de tout les commentaires
  const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)

  // Récupération de tout les albums
  const albums = await fetch(`https://jsonplaceholder.typicode.com/albums`)

  // Récupération de tout les photos
  const photos = await fetch(`https://jsonplaceholder.typicode.com/photos`)

  // Récupération de tout les utilisateurs (users)
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`)

  // Récupération de tout les todos
  const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`)

  // compacter les données sous forme d'objet
  let data = {
    posts : await posts.json(),
    comments : await comments.json(),
    albums : await albums.json(),
    photos : await photos.json(),
    todos : await todos.json(),
    users : await users.json()
  }

  // controlle d'érreur au cas où data vaut null ou undefined
  if (!data) {
    return {
      notFound: true,
    }
  }

  // Valeur retourner en SSR de data
  /*
    Forme globale de sortie de data
    {posts : [{...}],comments : [{...}],albums : [{...}],photos : [{...}],users : [{...}],todos : [{...}]}
  }
  */
  return {
    props: {data},
  }
}
