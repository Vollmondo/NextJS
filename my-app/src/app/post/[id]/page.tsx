import Link from 'next/link'
import { stringify } from 'querystring'
import React from 'react'

async function fetchPost(id:string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  const result = await res.json()
  return result
}

export default async function Post(
  params: {
    params: { 
      id:string
    }
  }
) {
  console.log(params.params.id)

  const posts = await fetchPost(params.params.id)

  return (
    <div>
        <Link href={'/'}>Назад</Link>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
    </div>
  )
}
