"use client"


import { useRouter } from 'next/navigation'
import React from 'react'

export default function WelcomePage() {
    const router = useRouter()

    const logOutFun = () => {
        router.push('/login');
        // localStorage.clear();
    }
    return (
        <>
            <div className='flex px-10 py-5 justify-between bg-slate-600 text-white items-center'>
                <h1 className='text-3xl'>Welcome to our website</h1>
                <button onClick={logOutFun} className='border rounded-full px-3 py-2 hover:scale-110 transition-all'>Logout</button>
            </div>
            <div>
                <h1 className='text-6xl text-center pt-5 font-bold'>Abh ke lie itna hi baaki baad main 😎</h1>
            </div>
        </>
    )
}
