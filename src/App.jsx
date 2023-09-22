import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Pages/Map";
import { createContext, useState } from "react";
import Menu from "./pages/Menu";
import AddressContext from "./contexts/AddressContext";
import Restaurant from "./pages/Restaurant";


function App() {
	const [address, setAddress] = useState({
		lat: 31.25214048726485,
		lng: 30.009838471967534,
		isMap: true,
	});

	return (
		<AddressContext.Provider value={[address, setAddress]}>
			<BrowserRouter>
				<Routes>
            <Route path="/" element={<Restaurant />} />
					<Route path="/restaurants/:id" element={<Menu />} />
					<Route path="/address" element={<Map />} />
				</Routes>
			</BrowserRouter>
		</AddressContext.Provider>
	);
}

export default App;
