"use client"
import { useEffect } from "react";
import SignUp from "./signup";

export default function Home() {

  useEffect(() => console.log(process.env.NEXT_PUBLIC_apiKey), [])

  return (
    <div className="mx-auto">
      <SignUp />
    </div>
  );
}
