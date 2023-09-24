import { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import SearchBar from "./SearchBar";
function Restaurant() {
	const [selected, setSelected] = useState("Food");
	const [search, setSearch] = useState("");
	return (
		<>
			<div className=" items-center text-center flex gap-20">
				<div className="gap-10 flex items-center mt-10 mx-auto">
					{selected === "Food" ? (
						<button
							className="bg-red-600 border-2 w-32 h-12 scale-125 transition-all border-red-600 rounded text-white text-xl shadow-xl"
							onClick={() => setSelected("Food")}
						>
							Food
						</button>
					) : (
						<button
							className="bg-red-600 border-2 w-32 h-12 transition-all border-red-600 rounded-md text-white text-xl"
							onClick={() => setSelected("Food")}
						>
							Food
						</button>
					)}
					{selected == "desert" ? (
						<button
							className="bg-red-600 border-2 w-32 h-12 scale-125 transition-all border-red-600 rounded-md text-white text-xl shadow-xl"
							onClick={() => setSelected("desert")}
						>
							Dessert
						</button>
					) : (
						<button
							className="bg-red-600 border-2 w-32 h-12 transition-all border-red-600 rounded-md text-white text-xl"
							onClick={() => setSelected("desert")}
						>
							Dessert
						</button>
					)}
					{selected == "drinks" ? (
						<button
							className="bg-red-600 border-2 w-32 h-12 scale-125 transition-all border-red-600 rounded-md text-white text-xl shadow-xl"
							onClick={() => setSelected("drinks")}
						>
							Drinks
						</button>
					) : (
						<button
							className="bg-red-600 border-2 w-32 h-12 transition-all border-red-600 rounded-md text-white text-xl"
							onClick={() => setSelected("drinks")}
						>
							Drinks
						</button>
					)}
				</div>
			</div>
			{/* <SearchBar className="items-center align-middle justify-center mx-auto text-center" /> */}
			<input
				className="
					outline-none
					block
					p-4
					pl-10
					text-sm
					text-gray-900
					border
					border-gray-300
					rounded-lg
					bg-gray-50
					focus:ring-red-600
					focus:border-red-600
					w-2/3
					mx-auto
					my-10"
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search"
			/>
			<div className="md:grid grid-cols-3 gap-10 mt-20 px-5">
				{data.restaurants
					.filter((restaurant) => restaurant.category == selected)
					.filter(
						(restaurant) =>
							!search ||
							restaurant.name.toLowerCase().includes(search.toLowerCase())
					)
					.map((restaurant) => (
						<RestaurantCard key={restaurant.id} restaurant={restaurant} />
					))}
			</div>
		</>
	);
}
export default Restaurant;
