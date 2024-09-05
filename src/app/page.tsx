"use client"

import { signupWithEmailPassword } from "@/firebase/firebseauth";
import Image from "next/image";
import { useState } from "react";
import Login from "./login";

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (

    <div className="mx-auto">
     {/*  <input className="border" type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input className="border" type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br />
      <button onClick={() => { signupWithEmailPassword(email, password) }}>Signup</button> */}
      <Login />
    </div>
  );
}
