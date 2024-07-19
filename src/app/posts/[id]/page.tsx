import Upvote from '@/components/Upvote'
import prisma from '@/lib/db'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { notFound, usePathname } from 'next/navigation'
import React from 'react'



const page = async({ params }: { params: Params }) => {
    await new Promise((resolve) => {setTimeout(resolve,1000)})
    const post = await prisma.post.findUnique({
      where:{
        id: parseInt(params.id)
      }
    })

    if(!post){
      notFound()
    }
    
  return (
    <div className='px-7 pt-24 text-center '>
        <h1 className='text-5xl font-semibold mb-7 '>{post.title}</h1>
        <p className='max-w-[700px] mx-auto'>{post.body}</p>
        <Upvote />
    </div>
  )
}

export default page