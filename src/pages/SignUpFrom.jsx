import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    const userData = { username, password, email };
    localStorage.setItem("userData", JSON.stringify(userData));
    setUsername("");
    setPassword("");
    setEmail("")
    alert("Sign up successful!");
  };

  return (
    <div className="items-center text-center font-serif  align-middle justify-center mx-auto gap-8 my-20">
      <h1 className="text-red-600 text-3xl">Sign Up</h1>
      <br />
      <br />
      <label className="text-red-600 font-serif" >
        User Name:
      </label>
      <input
        className="border-2 border-red-600"
        type="text"
        placeholder="enter your name"
        required
        value={username}
          onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      
     
      <label className="text-red-600 font-serif" >
        Email:
      </label>
      <input
        className="border-2 border-red-600"
        type="text"
        placeholder="enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label className="text-red-600" >
        Password:
      </label>
      <input
        className="border-2 border-red-600"
        type="password"
        placeholder="enter your password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <label className="text-red-600 font-serif">Phone Number:</label>
      <input
        className="border-2 border-red-600"
        type="text"
        placeholder="enter your number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      <div>
        <button 
        onClick={()=> handleSignUp()}
          className="bg-red-600 text-white w-20 h-12 text-xl rounded-lg"
          type="submit"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
