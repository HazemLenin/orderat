import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Restaurant from "./pages/Restaurant";
function App() {
  return (
    <>
      <Restaurant />
    </>
  );
}

export default App;
