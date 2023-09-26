import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (email === userData.email && password === userData.password) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("User not found");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="items-center text-center font-serif  align-middle justify-center mx-auto gap-8 my-20">
      <h1 className="text-red-600 text-3xl">Sign In</h1>
      <br />

      <label className="text-red-600 font-serif">
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
      <h3 className="text-red-600/60 text-xs">Forgot your password?</h3>
      <br />
      <br />
      <div>
        <button 
        onClick={()=> handleLogin()}
          className="bg-red-600 text-white w-20 h-12 text-xl rounded-lg"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
