"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'

const Navbar = () => {
  return (
    <div className="flex bg-slate-700 text-white justify-between gap-3 p-5"> 
        {/* TITLE CONTAINER */}
        <div><h1 className='font-bold text-xl xl:mx-12'>Store</h1></div>

        {/* CONTEXT MENU  */}
        <div className='md:hidden cursor-pointer'>
          <Menu/>
        </div>

        {/* LINK CONTAINER */}
        <div className='hidden md:flex md:gap-5 lg:gap-7 xl:mx-12'>        
        <Link href='/'>Home</Link>
        <Link href='/store'>Store</Link>
        <Link href='/login'>Login</Link>
        <Image src="/cart.webp" alt="" height={25} width={25}></Image>
        </div>
        
    </div>
  )
}

export default Navbar