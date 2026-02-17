"use client"

import { useState, useEffect} from "react";
import { supabase } from "../lib/supabase";

export default function Home() {

  const [email, setEmail] = useState("")
  useEffect(() => {
  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      window.location.href = "/dashboard";
    }
  };
  checkUser();
}, []);


  const login = async () => {
    if (!email) return alert("Enter email")

    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) alert(error.message)
    else alert("Check your email for login link")
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border p-6 rounded">
        <h1 className="text-xl mb-4">Login</h1>

        <input
          className="border p-2 mr-2"
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button
          className="bg-black text-white px-4 py-2"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  )
}
