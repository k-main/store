import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='min-h-[calc(100vh-6rem)] h-auto flex flex-col items-center justify-center gap-2 align'>

    <div className='flex flex-col gap-4'>
        <div className='font-bold text-2xl text-slate-600 text-center'> Register </div>
        <div className='text-center'>Or</div>
        <button className='bg-slate-700 text-white p-3 rounded-md'>Sign in with Google</button>

    </div>

    <form className='flex flex-col gap-5 mt-5'>

      <input type='email' placeholder='Username' className='p-5 text bg-slate-300 rounded-md focus:border-slate-700'></input>

      <input type='password' placeholder='Password' className='p-5 bg-slate-300 rounded-md focus:border-slate-700 text-slate-700'></input>

      <button className=' bg-slate-700 text-white rounded-md p-4'> Register </button>
    </form>





  </div>
  )
}

export default Register