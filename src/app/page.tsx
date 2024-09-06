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
    </div>
  );
}
