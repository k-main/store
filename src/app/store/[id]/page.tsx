import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    id: 1,
    title: "Antique Marine Scene Oil Painting",
    image: "/generic-featured-1.webp",
    desc: "Transport yourself to a serene summer farmhouse with this stunning ORIGINAL oil painting. This Cottage Landscape masterpiece exudes Vintage STYLE, capturing the rustic charm of a countryside retreat.",
    price: "49.99"
  }
]

const Item = () => {
  return (
    <div className='flex flex-col md:flex-row items-center my-4 gap-10 md:justify-center'>
      {/* IMAGE CONTAINER  */}
      <div className=''>
      <Image src={data[0].image} alt='' className='relative' height={600} width={600}/>
      </div>
      {/* TEXT CONTAINER  */}
      <div className='flex flex-col items-center md:w-1/3'>
      <h1 className='font-bold text-xl md:text-2xl text-slate-700 text-center'>{data[0].title}</h1>

      <div className='flex justify-between w-4/5 items-center my-6 md:flex-col md:gap-4'>
        <div className='font-bold text-xl md:text-2xl'>${data[0].price}</div>
        <Link href='' className='bg-slate-700 text-white rounded-md p-2 px-4 flex gap-4'> Add to Cart <Image src="/cart.webp" alt="" height={20} width={20}></Image></Link>
      </div>

      <div className='mx-5 text-slate-700 text-center'> {data[0].desc}</div>
      </div>
    </div>
  )
}

export default Item