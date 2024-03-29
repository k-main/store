"use client"
import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {

  const { data, status } = useSession();
  const router = useRouter()

  if (status === "loading"){
    return <p>Loading..</p>
  }
  if (status === "authenticated"){
    router.push("/");
  }

  return (
    <div className='min-h-[calc(100vh-6rem)] h-auto flex flex-col items-center justify-center gap-5 align'>

      <div>
        <div className='font-bold text-2xl text-slate-600 text-center'>
          Hello
        </div>
        
        <div className='flex gap-3 mt-1'> Not registered? <Link href='/register' className='text-slate-600 underline hover:pointer'> create an account</Link></div>
      </div>

      <div className='flex flex-col gap-2 text-center'>
        <div>Or</div>
        <button className='bg-slate-700 text-white p-3 rounded-md shadow-xl' onClick={() => signIn("google")}>Sign in with Google</button>
      </div>

      <form className='flex flex-col gap-5 mt-5'>

        <input type='email' placeholder='Username' className='p-5 text bg-slate-300 rounded-md focus:border-slate-700 shadow-xl'></input>

        <input type='password' placeholder='Password' className='p-5 bg-slate-300 rounded-md focus:border-slate-700 text-slate-700 shadow-xl'></input>

        <button className=' bg-slate-700 text-white rounded-md p-4 shadow-2xl'> Sign in </button>
      </form>





    </div>
  )
}

export default Login