// Internal Component
import Post from '../../container/Post/Posts'

function posts({data}) {
    return (
      // Appelle du composant container de POST_PAGE
    /**
     * @ POST_PAGE
     * @ http://localhost:3000/posts
     * @ page/posts/
     * RETURN Component
     * CONTAINER Container/Post
     */
    <Post data={data}/>
    )
}

export default posts


export async function getServerSideProps(context) {
  // Récupération de tout les posts
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  // Récupération de tout les utilisateurs (users)
    const users = await fetch(`https://jsonplaceholder.typicode.com/users`)

    // compacter les données sous forme d'objet
    let data = {
      posts : await posts.json(),
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
    {posts : [{...}],users : [{...}]}
  }
  */
    return {
      props: {data},
    }
  }
