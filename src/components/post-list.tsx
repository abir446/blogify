import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const Postlist = async() => {
    const data = await prisma.post.findMany()
    
    await new Promise((resolve) => {setTimeout(resolve,1000)})
  return (
    <ul>
    {
        data.map((post:any) => (
            <li key={post.id} className="mb-3">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        ))
    }
</ul>
  )
}

export default Postlist