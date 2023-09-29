import React, { useState, useEffect } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebase from '../firebase'
const RegisterForm = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phone = e.target[3].value;

    const auth = getAuth();
   try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
console.log("Done");

navigate("/")
  } catch{
    console.log("error")
  } 
  }
  return (
    <div className=" justify-center ">
      <form onSubmit={handleSignUp} className="pb-10 mt-10 h-full flex max-w-md flex-col gap-4 align-middle mx-auto text-center border-2 border-gray-300 shadow-xl ">
        <h2 className=" mt-10 text-2xl text-red-700">Sign Up</h2>
        <div>
          <Label htmlFor="username" value="Username" />
          <input
            className="border-2 h-8 rounded-lg w-full"
            id="username"
            placeholder="   Put your User Name here"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="name"
            theme={{ dark: false }}
          />
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
        <Label htmlFor="phone" value="Phone Number" />
        <input
          className="border-2 h-8 rounded-lg w-full"
          id="phone"
          placeholder="   Put your phone number here"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          theme={{ dark: false }}
        />
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
};

export default RegisterForm;
