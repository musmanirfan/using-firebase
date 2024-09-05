"use client"

import { auth } from "@/firebase/firebaseconfig"
import { loginpWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebseauth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user login successfully");
                router.push('/welcomePage')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-card p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-foreground text-center mb-4">Login | SignUp</h2>
                <div className="flex flex-col space-y-2">
                    <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/80">Login with Facebook</button>
                    <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400">Login with Google</button>
                </div>
                <div className="mt-4">
                    <label className="block text-muted-foreground">Login with email</label>
                    <input type="email" placeholder="Email" className="border border-border rounded-lg p-2 w-full mt-1"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="border border-border rounded-lg p-2 w-full mt-2"
                        value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="bg-destructive text-destructive-foreground p-2 rounded-lg w-full mt-4 hover:bg-destructive/80" onClick={() => { signupWithEmailPassword(email, password) }}>SIGNUP</button>
                    <button className="bg-destructive text-destructive-foreground p-2 rounded-lg w-full mt-4 hover:bg-destructive/80" onClick={handleLogin}>login</button>

                </div>
                {/* <p className="text-center text-muted-foreground mt-4">Don't have an account? <a href="#" className="text-primary">SIGN UP NOW</a></p> */}
            </div>
        </div>

    )
}