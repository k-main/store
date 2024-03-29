"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const data = [
    {
      id: 1,
      title: "Vibrant colors and intricate brushwork.",
      image: "/generic-featured-1.webp",
    },
    {
      id: 2,
      title: "The perfect addition to any art collection.",
      image: "/generic-featured-2.webp",
    },
    {
      id: 3,
      title: "A unique masterpiece to elevate your space.",
      image: "/generic-featured-3.webp",
    },
  ]

  const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {cache:"no-store"});
  if (!res.ok){
    throw new Error("failed");
  }

  return res.json();
}

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval (() => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
        2000 );

        return () => clearInterval(interval);
    }, []);


  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row border-solid border-black"> 
    {/* TEXT CONTAINER */}
    <div className="flex h-1/3 items-center justify-center flex-col gap-6 text-slate-700 font-bold lg:flex-1 lg:h-auto bg-white">
      <h1 className='text-2xl md:text-4xl xl:text-5xl text-center p-4'> {data[currentSlide].title}</h1>
      <Link href="/store" className='bg-slate-700 text-white py-4 px-8 rounded-lg shadow-xl'>Order now</Link>
    </div>
    {/* IMG CONTAINER */}
    <div className="w-full relative flex-1"> 
    <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
    </div>


</div>
  )
}

export default Slider