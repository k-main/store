import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    id: 1,
    title: "Antique Marine Scene Oil Painting",
    image: "/generic-featured-1.webp",
    price: "49.99"
  },
  {
    id: 2,
    title: "Large Abstract Cityscape Painting",
    image: "/generic-featured-2.webp",
    price: "49.99"
  },
  {
    id: 3,
    title: "Green Abstract Oil Painting",
    image: "/generic-featured-3.webp",
    price: "49.99"
  },
  {
    id: 4,
    title: "Green Abstract Oil Painting",
    image: "/generic-featured-4.webp",
    price: "49.99"
  },
  {
    id: 5,
    title: "Green Abstract Oil Painting",
    image: "/generic-featured-5.webp",
    price: "49.99"
  },
  {
    id: 6,
    title: "Green Abstract Oil Painting",
    image: "/generic-featured-6.webp",
    price: "49.99"
  },
]

const Store = () => {
  return (
    <div className='min-h-[calc(100vh-6rem)] h-auto flex flex-wrap mt-10 justify-center'>
      {data.map((item) => (
        // ITEM CONTAINER 
        <div key={item.id} className='flex flex-col bg-white h-1/2 mx-2 mt-4 items-center p-5 rounded-md'>
          {/* IMAGE CONTAINER  */}
          <div className=''> 
            <Image 
                src={item.image} 
                alt="" 
                width={350}
                height={350}/> 
          </div>
          {/* TEXT CONTAINER  */}
          <div className='mt-2 flex flex-col text-center w-full items-center'>
            <Link className="hover:pointer hover:text-slate-600 text-lg font-bold" href={"store/" + item.id}>{item.title}</Link>
            <div className='my-3 font-bold flex justify-between items-center text w-4/5'>
               <Link href={"store/" + item.id} className='text-lg'>${item.price}</Link> 
               <div className='border-2 border-slate-500 rounded-lg p-2 flex gap-3 hover:bg-slate-600 hover:text-white'>
                  <div>Add to Cart</div>
                   <Image src="/cart-black.webp" alt="" height={20} width={20}/>
                    </div>
                  </div>
            
          </div>
        </div>
      ))}

    </div>
  )
}

export default Store