import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Restaurant from "./pages/Restaurant";
import RestaurantP from "./components/RestaurantCard";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RestaurantsPage from "./pages/RestaurantsPage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RestaurantsPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
