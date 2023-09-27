import React from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data.json";
const RestaurantCard = ({ restaurant }) => {
	let stars = [];
	for (let i = 0; i < restaurant.rate; i++) {
		stars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
	}
	return (
		<Link
			to={`/restaurants/${restaurant.id}`}
			key={restaurant.id}
			style={{ backgroundImage: `url('${restaurant.image}')` }}
			className="
      block
mx-auto w-full aspect-square bg-no-repeat bg-contain text-center text-2xl rounded-xl hover:shadow-xl hover:-translate-y-3 transition-all"
		>
			<div className="flex justify-center items-center flex-col opacity-0 text-transparent hover:text-white  hover:bg-red-700  w-full h-full rounded-xl hover:border-4 border-red-700 hover:opacity-90 hover:shadow-2xl hover:shadow-black transition-all">
				<h1 className="font-bold text-3xl">{restaurant.name}</h1>
				<p className="">{restaurant.description}</p>
				<div>{stars}</div>
			</div>

			<div></div>
		</Link>
	);
};

export default RestaurantCard;
