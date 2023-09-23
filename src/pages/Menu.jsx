// sending page
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../data.json";
import pic from "../assets/css/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";

function Menu() {
	const { id } = useParams();
	let restaurant = data.restaurants.find((r) => r.id == id);
	return (
		<>
			<div className="relative h-60 overflow-hidden">
				<div
					style={{ backgroundImage: `url('${pic}')` }}
					className="bg-cover bg-center w-full absolute inset-0"
				></div>
				<div className="absolute inset-0 bg-red-600/50 flex items-end text-white pb-14 pl-10">
					<h1 className="text-5xl">{restaurant.name}</h1>
				</div>
			</div>
			<div className="px-10">
				<h1 className="text-6xl my-10 text-red-600">Menu</h1>
				<div className="grid grid-cols-3  gap-10 text-2xl">
					{restaurant.products.map((product) => (
						<ProductCard product={product} key={product.id} restaurantId={id} />
					))}
				</div>
			</div>
		</>
	);
}
export default Menu;
