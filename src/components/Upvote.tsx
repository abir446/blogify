"use client";
import React, { useState } from 'react'

const Upvote = () => {
    const [UpVote,setUpVote] = useState(0)
  return (
    <button onClick={()=>setUpVote(UpVote + 1)} className='mt-5 bg-blue-500 text-white p-2 rounded-md'>UpVote {UpVote}</button>
  )
}

export default Upvote