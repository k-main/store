import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const data = [
  {
    id: 1,
    title: "Antique Marine Scene Oil Painting",
    image: "/generic-featured-1.webp",
    desc: "Transport yourself to a serene summer farmhouse with this stunning ORIGINAL oil painting. This Cottage Landscape masterpiece exudes Vintage STYLE, capturing the rustic charm of a countryside retreat.",
    price: "49.99"
  }
]

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};


const Item = async ( {params} : { params: {id: string }} ) => {
  const singleProduct:ProductType = await getData(params.id);
  return (
    <div className='flex flex-col md:flex-row items-center my-4 gap-10 md:justify-center'>
      {/* IMAGE CONTAINER  */}
      {singleProduct.img && (<div className=''>
      <Image src={singleProduct.img} alt='' className='relative' height={600} width={600}/>
      </div>)}
      {/* TEXT CONTAINER  */}
      <div className='flex flex-col items-center md:w-1/3'>
      <h1 className='font-bold text-xl md:text-2xl text-slate-700 text-center'>{singleProduct.title}</h1>

      <div className='flex justify-between w-4/5 items-center my-6 md:flex-col md:gap-4'>
        <div className='font-bold text-xl md:text-2xl'>${singleProduct.price}</div>
        <Link href='' className='bg-slate-700 text-white rounded-md p-2 px-4 flex gap-4'> Add to Cart <Image src="/cart.webp" alt="" height={20} width={20}></Image></Link>
      </div>

      <div className='mx-5 text-slate-700 text-center'> {singleProduct.desc}</div>
      </div>
    </div>
  )
}

export default Item