import React from 'react'
import { createPost } from '@/actions/actions'

const Form = () => {
  return (
    <form action={createPost} className='flex flex-col gap-3  max-w-[400px] mx-auto space-x-2 mt-10'>
            <input placeholder='Title for a new post' name='title' type="text" className='border h-10 border-gray-400 rounded-md px-3 ' required />
            <textarea name='body' placeholder='Body for new post' rows={6} className='border border-gray-400 rounded-md px-3 py-2 h-full' required />
            <button className='bg-blue-300 px-2 py-1 rounded-md h-10 text-white'>Submit</button>
        </form>
  )
}

export default Form