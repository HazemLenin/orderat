import { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

function Restaurant() {
	const [selected, setSelected] = useState("Food");
	return (
		<>
			<button onClick={() => setSelected("Food")}>Food</button>
			<button onClick={() => setSelected("desert")}>Desert</button>
			<button onClick={() => setSelected("drinks")}>Drinkd</button>
			<div className="grid grid-cols-3 gap-10">
				{data.restaurants
					.filter((restaurant) => restaurant.category == selected)
					.map((restaurant) => (
						<Link
							to={`/restaurants/${restaurant.id}`}
							key={restaurant.id}
							style={{ backgroundImage: `url('${restaurant.image}')` }}
							className="mx-auto w-96 bg-no-repeat bg-contain h-96  mt-20 text-center text-2xl rounded-xl hover:shadow-2xl"
						>
							<div className="bg-transparent text-transparent hover:text-white hover:bg-red-600 w-96 h-96 rounded-xl hover:border-4 border-red-600 hover:opacity-80">
								<h1 className="mt-20">{restaurant.name}</h1>
								<span className="font-serif">
									sdjkvhhhhhhslhjkgkwkeqwkd hkwehrukwekywe khrkuwehrhwejrukhdj
									khwkdhmwadujawjdjhjhgj
								</span>
							</div>
						</Link>
					))}
			</div>
		</>
	);
}
export default Restaurant;
