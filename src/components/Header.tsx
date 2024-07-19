'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
    {
        href: "/",
        label: "home",
    },{
        href: '/posts',
        label: 'posts',
    },
    {
        href: 'create-post',
        label: 'create post',
    }
]

const Header = () => {

    const pathName = usePathname()
    console.log(pathName)

  return (
    <div className='flex justify-between items-center py-4 px-7 border-b'>
        <Link href={'/'}>
        <h4 className='font-serif text-2xl italic font-bold cursor-pointer'>Blogify</h4>
        </Link>
        <nav>
            <ul className='flex gap-4 text-sm items-center'>
                {
                    navLinks.map((link) => (
                        <li key={link.href}>
                            <Link className={`${pathName == link.href? "font-bold text-zinc-950":"text-zinc-400 "} ${pathName == 'sign-in'? 'hidden': ''}`} href={link.href}>
                            {link.label}
                            </Link>
                            </li>
                    ))
                }
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </ul>
        </nav>
        
    </div>
  )
}

export default Header