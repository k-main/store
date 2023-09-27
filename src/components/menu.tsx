"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Store", url: "/store"},
    {id: 3, title: "Cart", url: "/cart"},
    {id: 4, title: "Login", url: "/login"},

]

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false; //   USER STATUS 

  return (
    <div> 
        {!open ? (<Image src="/dropdown.png" alt="" width={25} height={25} onClick={() => setOpen(true)}/>) : 
        (<Image src="/dropdown.png" alt="" width={25} height={25} onClick={() => setOpen(false)}/>)
        }

{        open && (
        <div className='bg-slate-700 font-bold text-white absolute left-0 w-full h-[calc(100vh-2.79rem)] gap-8 flex flex-col items-center justify-center text-3xl z-10'>
          {links.map(item => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}> {item.title} </Link>
          ))}
        </div>
        )}
    </div>
  )
}

export default Menu