"use client"
import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const UserLinks = () => {
  const {status} = useSession();

  return (
    <div>
        {status === "authenticated" ? 
        (<div className='flex flex-col md:flex-row'> 
            <Link className='mb-10 md:mb-0 md:pr-5' href='/orders'>Orders</Link>
            <span className='cursor-pointer' onClick={() => signOut()}>Logout</span>
        </div>
        ) : 
        (<Link href='/login'>Login</Link> )}
    </div>
  )
}

export default UserLinks