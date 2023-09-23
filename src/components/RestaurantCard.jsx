import React from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data.json";
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
mx-auto w-96 bg-no-repeat bg-contain h-96 text-center text-2xl rounded-xl  hover:shadow-2xlxl  border-2 shadow-lg"
		>
			<div className="flex justify-center items-center flex-col opacity-0 text-transparent hover:text-white  hover:bg-red-600  w-full h-full rounded-xl hover:border-4 border-red-600 hover:opacity-90 hover:shadow-2xl hover:shadow-black">
				<h1 className="font-serif font-bold text-3xl">{restaurant.name}</h1>
				<span className="font-serif ">{restaurant.description}</span>
				<br />
				<div>{stars}</div>
			</div>

			<div></div>
		</Link>
	);
};

export default RestaurantCard;
