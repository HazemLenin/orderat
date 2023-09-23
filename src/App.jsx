import { useContext, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Pages/Map";
import { createContext, useState } from "react";
import Menu from "./pages/Menu";
import AddressContext from "./contexts/AddressContext";
import RestaurantsPage from "./pages/RestaurantsPage";
import Navbar from "./components/navbar";
import { createContext } from "react";
import { useEffect } from "react";
import { data } from "autoprefixer";
import { CartContext } from "./components/cart";


function App() {
  const cartlogic = useContext(CartContext)
	const [address, setAddress] = useState({
		lat: 31.25214048726485,
		lng: 30.009838471967534,
		isMap: true,
	});

	return (
		<AddressContext.Provider value={[address, setAddress]}>
			<BrowserRouter>
    <Navbar/>
				<Routes>
            <Route path="/" element={<RestaurantsPage />} />
					<Route path="/restaurants/:id" element={<Menu />} />
					<Route path="/address" element={<Map />} />
				</Routes>
			</BrowserRouter>
		</AddressContext.Provider>
	);
}

export default App;
