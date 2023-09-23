import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/index.css";
import Restaurant from "./pages/Restaurant";
import RestaurantP from "./components/RestaurantCard";
import HeroSection from "./components/HeroSection";
import RestaurantsPage from "./pages/RestaurantsPage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
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
