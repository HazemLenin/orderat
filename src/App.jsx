/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { createContext } from "react";
import { useEffect } from "react";
import { data } from "autoprefixer";
import { CartContext } from "./components/cart";

function App() {
  const cartlogic = useContext(CartContext)
  
  return (
    
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
  
  );
}

export default App;
