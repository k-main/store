import React from 'react'

const OrdersPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
    <div className='bg-red-100 rounded-md p-4 font-bold'>This is how orders are going to look like once we have some</div>
    <table className='w-full border-separate border-spacing-3'>
        <thead>
            <tr className='text-left'>
                <th className='hidden md:block'>Order ID</th>
                <th>Date</th>
                <th>Price</th>
                <th className='hidden md:block'>Products</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
                <td className='hidden md:block py-6 px-1'>423942873489756928734</td>
                <td className='py-6 px-1'>12/07/01</td>
                <td className='py-6 px-1'>$1000</td>
                <td className='hidden md:block py-6 px-1'>A painting</td>
                <td>In Progress</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
                <td className='hidden md:block py-6 px-1'>948726345892348759284</td>
                <td className='py-6 px-1'>12/07/01</td>
                <td className='py-6 px-1'>$1000</td>
                <td className='hidden md:block py-6 px-1'>Another painting</td>
                <td>In Progress</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
                <td className='hidden md:block py-6 px-1'>987985089273458792355</td>
                <td className='py-6 px-1'>12/07/01</td>
                <td className='py-6 px-1'>$1000</td>
                <td className='hidden md:block py-6 px-1'>A shirt</td>
                <td>In Progress</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default OrdersPage