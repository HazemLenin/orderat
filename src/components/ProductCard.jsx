import pic from "../assets/css/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";

function ProductCard({ product, restaurantId }) {
	const [cart, add, remove, decreaseAmount] = useContext(CartContext);

	const [{ isDragging }, drag] = useDrag(() => ({
		type: "product",
		item: {
			restaurantId: restaurantId,
			productId: product.id,
		},
	}));
	return (
		<div
			className="
                overflow-hidden
                h-28
                hover:shadow-2xl
                transition-all
                rounded-2xl
                w-full
                flex
                justify-between
                items-center"
			key={product.id}
			ref={drag}
		>
			<img src={pic} alt="" className="w-32 h-auto" />
			<h2>
				{product.name}
				<br />
				<p className="text-black"> {product.price}</p>
			</h2>
			<button
				onClick={() => add(restaurantId, product.id)}
				className="block mr-3 rounded-full h-10 w-10 text-red-600 hover:bg-red-600 hover:text-white transition-all"
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}

export default ProductCard;
