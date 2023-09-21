import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Restaurant from "./pages/Restaurant";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
