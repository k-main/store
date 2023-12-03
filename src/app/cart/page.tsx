import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row'>
      <div className='font-bold text-2xl text-slate-600 p-8 bg-gray-200'>Shopping Cart</div>
      {/* {PRODUCTS CONTAINER} */}
      <div className='h-1/2 p-4 lg:p-8 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2'>

        {/* {SINGLE ITEM CONTAINER} */}
        <div className='flex items-center justify-between mb-4 mt-10'>
        <Image src='/generic-featured-1.webp' width={100} height={100} alt='' />
        <div>
          <h1 className='uppercase text-xl font-bold'>painting</h1>
          <span>large</span>
        </div>

          <div className='flex flex-col'>
          <h2 className='font-bold'>$1.00</h2>
          <h3 className='underline text-slate-400 cursor-pointer'>Remove</h3>
          </div>

        </div>

        <div className='flex items-center justify-between mb-4'>
        <Image src='/generic-featured-1.webp' width={100} height={100} alt='' />
        <div>
          <h1 className='uppercase text-xl font-bold'>painting</h1>
          <span>large</span>
        </div>

          <div className='flex flex-col'>
          <h2 className='font-bold'>$1.00</h2>
          <h3 className='underline text-slate-400 cursor-pointer'>Remove</h3>
          </div>

        </div>

        <div className='flex items-center justify-between mb-4'>
        <Image src='/generic-featured-1.webp' width={100} height={100} alt='' />
        <div>
          <h1 className='uppercase text-xl font-bold'>painting</h1>
          <span>large</span>
        </div>

          <div className='flex flex-col'>
          <h2 className='font-bold'>$1.00</h2>
          <h3 className='underline text-slate-400 cursor-pointer'>Remove</h3>
          </div>

        </div>
        
      </div>

      <div className=''> </div>
      {/* {PAYMENT CONTAINER} */}
      <div className='h-1/3 p-4 lg:p-12 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 bg-slate-300'> 
        <div className='p-8 lg:p-12'>
          <div className='flex justify-between mb-4'>
            <span className=''> Tax</span>
            <span className='font-bold'> $0.50</span>
          </div>
          <div className='flex justify-between'>
            <span className=''> Subtotal</span>
            <span className='font-bold'> $3.50</span>
          </div>
        </div>
        <hr className=''/>
        <button className='bg-slate-700 text-white p-3 rounded-md w-1/2 self-end lg:w-3/4 xl:w-full 2xl:w-1/2 2xl:self-center shadow-xl'> Proceed to Checkout </button>
      </div>
    </div>
  )
}

export default Cart