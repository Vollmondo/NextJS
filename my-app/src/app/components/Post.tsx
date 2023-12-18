import Link from 'next/link'
import React from 'react'

export default async function Post (
    params: {
        post: {
        title: string,
        body: string
        }
    }
) {
  return (
    <div>
        <Link href={'/'}>Назад</Link><br />
        <h1>{params.post.title}</h1>
        <p>{params.post.body}</p>
    </div>
  )
}