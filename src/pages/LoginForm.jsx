import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDacCMh0IFhFZmDs8uTseuLwMcXs7RZDV8",
      authDomain: "urpr-e74ab.firebaseapp.com",
      projectId: "urpr-e74ab",
      storageBucket: "urpr-e74ab.appspot.com",
      messagingSenderId: "683963509393",
      appId: "1:683963509393:web:df5fc02c58dc08f99ead30",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
   
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth =getAuth()
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log("Done");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className=" justify-center ">
      <form onSubmit={handleLogin} className="pb-10 mt-10 h-full flex max-w-md flex-col gap-4 align-middle mx-auto text-center border-2 border-gray-300 shadow-xl ">
        <h2 className=" mt-10 text-2xl text-red-700">Sign In</h2>
        <div>
          <div className="mt-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>

          <input
            className="border-2 h-8 rounded-lg w-full"
            id="email1"
            placeholder="   Put your email here"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            theme={{ dark: false }}
          />
        </div>
        <div>
          <div className="mt-2 ">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <input
            className="border-2 h-8 rounded-lg w-full"
            id="password1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="  Password"
            type="password"
            theme={{ dark: false }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button
          
          className="text-white border-red-700 bg-red-700"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
