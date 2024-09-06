"use client"


import { useRouter } from 'next/navigation'
import React from 'react'

export default function WelcomePage() {
    const router = useRouter()

    const logOutFun = () => {
        router.push('/');
        localStorage.clear();
    }
    return (
        <>
            <h1>Welcome to our website</h1>
            <button onClick={logOutFun}>Logout</button>
        </>
    )
}
