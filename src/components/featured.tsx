import React from 'react'
import Image from 'next/image'
import { data } from '@/types/types';

// const data = [
//     {
//       id: 1,
//       title: "Antique Marine Scene Oil Painting",
//       image: "/generic-featured-1.webp",
//       price: "49.99"
//     },
//     {
//       id: 2,
//       title: "Large Abstract Cityscape Painting",
//       image: "/generic-featured-2.webp",
//       price: "49.99"
//     },
//     {
//       id: 3,
//       title: "Green Abstract Oil Painting",
//       image: "/generic-featured-3.webp",
//       price: "49.99"
//     },
//     {
//       id: 4,
//       title: "Green Abstract Oil Painting",
//       image: "/generic-featured-4.webp",
//       price: "49.99"
//     },
//   ]


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {cache:"no-store"});
  if (!res.ok){
    throw new Error("failed");
  }

  return res.json();
}


const Featured = async () => {

    const Data:data = await getData();
    return (
        <div><h1 className='text-2xl font-bold text-center p-12 text-white bg-slate-700 mb-4'>Featured Products</h1>
        <div className='w-screen overflow-x-scroll text-slate-700'>
          <div className=''>
            {/* WRAPPER */}
            
            <div className='w-max flex'>
            {/* SINGLE ITEM */}
              
              {Data.map((item) => (<div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[70vh]'>
              {/* IMAGE CONTAINER */}
                {item.img && <div className='relative flex-1 w-full transition-all duration-500'>
                  <Image src={item.img} alt='' fill className='object-contain'/>
                </div>}
              {/* TEXT CONTAINER */}
                <div className='flex h-1/3 flex-col items-center justify-center text-center gap-4 mt-2 xl:mt-0'>
                    <h1 className='text-xl xl:text-2xl font-bold uppercase'>{item.title}</h1>
                    {/* <p className='p-4 2xl:p-8'>{item.desc}</p> */}
                    <span className='text-lg font-bold'>${item.price}</span>
                    <button className='bg-slate-700 text-white p-2 px-4 rounded-md'>Add to Cart</button>
                </div>
              </div>))}
            </div>
          </div>
        </div>
    </div>
      )
    }
export default Featured