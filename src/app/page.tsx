"use client"
import { useEffect } from "react";
import SignUp from "./signup";

export default function Home() {

  /* useEffect(() => {
    console.log("apiKey => ", process.env.NEXT_PUBLIC_apiKey)
    console.log("authDomain => ", process.env.NEXT_PUBLIC_authDomain)
    console.log("NEXT_PUBLIC_projectId => ", process.env.NEXT_PUBLIC_projectId)
    console.log("NEXT_PUBLIC_storageBucket => ", process.env.NEXT_PUBLIC_storageBucket)
    console.log("NEXT_PUBLIC_messagingSenderId => ", process.env.NEXT_PUBLIC_messagingSenderId)
    console.log("NEXT_PUBLIC_appId => ", process.env.NEXT_PUBLIC_appId)
    console.log("NEXT_PUBLIC_measurementId => ", process.env.NEXT_PUBLIC_measurementId)
  }, []) */

  return (
    <div className="mx-auto">
      <SignUp />
    </div>
  );
}
