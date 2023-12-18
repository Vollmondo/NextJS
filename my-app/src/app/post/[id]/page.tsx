import Link from 'next/link'
import { stringify } from 'querystring'
import React from 'react'
import Post from '@/app/components/Post'

async function fetchPost(id:string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
  const result = await res.json()
  return result
}

export default async function PagePost(
  params: {
    params: { 
      id:string
    }
  }
) {
  const post = await fetchPost(params.params.id)

  return (
    <div>
        <Post post={post}/>
    </div>
  )
}
