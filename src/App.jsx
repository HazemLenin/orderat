/* eslint-disable no-unused-vars */
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import Menu from "./pages/Menu";
import RestaurantsPage from "./pages/RestaurantsPage";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import CartContext from "./contexts/CartContext";
import PopupIcon from "./components/CartPopup";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import data from "./data.json";
import Footer from "./components/Footer";
import LoginForm from "./Pages/LoginForm";
import RegisterForm from "./Pages/RegisterForm";
import About from "./Pages/About";
import ProtectedRoute from './pages/ProtectedRoute';


function App() {




	const [address, setAddress] = useState({
		lat: 31.25214048726485,
		lng: 30.009838471967534,
		isMap: true,
	});
	const [cart, setCart] = useState([]);
	//finding the item by id in the cart
	let add = (productId) => {
		let products = data.restaurants.flatMap((r) => r.products);
		let product = products.find((p) => p.id == productId);

		let oldProduct = cart.find((p) => p.id == product.id);
		if (oldProduct === undefined) {
			product.amount = 1;
			//adding the item into the cart
			setCart([...cart, product]);
		} else {
			//if the item was already in the cart
			let newCart = cart.map((item) => {
				if (item.id == product.id) {
					item.amount++;
				}
				return item;
			});
			setCart(newCart);
		}
	};
	//A remove function for the immediately remove button
	let remove = (id) => {
		setCart(cart.filter((item) => item.id != id));
	};
	//Decreasing the amount
	let decreaseAmount = (productId) => {
		let amountCart = cart.map((item) => {
			if (item.id == productId) {
				item.amount--;
			}
			return item;
		});
		//Remove the item if the decreasing came till
		amountCart = amountCart.filter((i) => i.amount > 0);
		setCart(amountCart);
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<CartContext.Provider
				value={[cart, add, remove, decreaseAmount, setCart]}
			>
				<BrowserRouter>
					<Navbar />
					<div className="pt-14">
						<Routes>
							<Route path="/" element={<RestaurantsPage />} />
							<Route path="/restaurants/:id" element={<Menu />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/login" element={<LoginForm />} />
							<Route path="/signup" element={<RegisterForm />} />
							<Route path="/about" element={<About />} />
						</Routes>
					</div>
					<PopupIcon />
					<Footer />
				</BrowserRouter>
			</CartContext.Provider>
		</DndProvider>
	);
}

export default App;
