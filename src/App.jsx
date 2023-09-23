import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      <Routes>
        < Route path="/Checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
