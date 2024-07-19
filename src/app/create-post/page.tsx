import React from 'react'
import { SignedOut, SignIn, useUser, SignedIn } from "@clerk/nextjs";
import Page from '../sign-in/[[...sign-in]]/page';
import Form from '@/components/Form';

const page = () => {
   
  return (

    <main className='pt-16 text-center'>
    <SignedIn>
        <h1 className='text-5xl font-semibold mb-7 '>Create a Post</h1>
        <Form />
    </SignedIn>
    <SignedOut>

<Page />

</SignedOut>
    </main>
  )
}

export default page