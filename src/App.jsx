import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisaModal from "./pages/VisaModal";
import Menu from "./pages/Menu";
import SucssesModal from "./components/SucssesModal";

function App() {
  return (
    <BrowserRouter>
      {/* <VisaModal/> */}
      <SucssesModal/> 
      <Routes>
        <Route path="/restaurants/:id" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
