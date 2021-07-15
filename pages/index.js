import Overview from '../container/Overview/Overview';


export default function Home({data}) {
  return (
    <Overview data={data}/>
  )
}

export async function getServerSideProps(context) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const albums = await fetch(`https://jsonplaceholder.typicode.com/albums`)
  const photos = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const todos = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  let data = {}
  data = {
    posts : await posts.json(),
    comments : await comments.json(),
    albums : await albums.json(),
    photos : await photos.json(),
    todos : await todos.json(),
    users : await users.json()
  }

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data},
  }
}
