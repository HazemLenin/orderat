// sending page
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../data.json";
import ProductCard from "../components/ProductCard";

function Menu() {
	const { id } = useParams();
	let restaurant = data.restaurants.find((r) => r.id == id);
	return (
		<>
			<div className="relative h-60 overflow-hidden">
				<div
					style={{ backgroundImage: `url('${restaurant.image}')` }}
					className="bg-cover bg-center w-full absolute inset-0"
				></div>
				<div className="absolute inset-0 bg-red-700/80 flex items-end text-white pb-14 pl-10">
					<h1 className="text-5xl">{restaurant.name}</h1>
				</div>
			</div>
			<div className="px-10">
				<h1 className="text-6xl my-10 text-red-700">Menu</h1>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
					{restaurant.products.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</div>
		</>
	);
}
export default Menu;
