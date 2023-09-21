/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
	return (
		<Router>
			<Navbar/>
			<Routes></Routes>
	
		
			</Router>
	);
}

export default App;
