import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBowlFood,
	faBurger,
	faCookie,
	faDrumstickBite,
	faIceCream,
	faMartiniGlass,
	faMugSaucer,
	faPizzaSlice,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDrag } from "react-dnd";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import formatcurrency from "./checkout/Formatcurrency";

function ProductCard({ product, restaurantId }) {
	const [cart, add, remove, decreaseAmount] = useContext(CartContext);

	const icons = [
		"PIZZA",
		"BURGER",
		"MARTINI",
		"ICE_CREAM",
		"BOWL",
		"DRUMSTICK",
		"COOKIE",
		"MUG",
	];

	const colors = ["GREEN", "SKY", "PURPLE", "RED", "YELLOW"];
	let color = colors[Math.floor(Math.random() * colors.length)];

	let backgroundClass;
	switch (product.color) {
		case "GREEN":
			backgroundClass = "bg-green-400 text-green-600";
			break;
		case "SKY":
			backgroundClass = "bg-sky-400 text-sky-600";
			break;
		case "PURPLE":
			backgroundClass = "bg-purple-400 text-purple-600";
			break;
		case "RED":
			backgroundClass = "bg-red-400 text-red-600";
			break;
		case "YELLOW":
			backgroundClass = "bg-yellow-400 text-yellow-600";
			break;
		default:
			break;
	}

	let icon;
	switch (product.icon) {
		case "PIZZA":
			icon = <FontAwesomeIcon icon={faPizzaSlice} />;
			break;
		case "BURGER":
			icon = <FontAwesomeIcon icon={faBurger} />;
			break;
		case "MARTINI":
			icon = <FontAwesomeIcon icon={faMartiniGlass} />;
			break;
		case "ICE_CREAM":
			icon = <FontAwesomeIcon icon={faIceCream} />;
			break;
		case "BOWL":
			icon = <FontAwesomeIcon icon={faBowlFood} />;
			break;
		case "DRUMSTICK":
			icon = <FontAwesomeIcon icon={faDrumstickBite} />;
			break;
		case "COOKIE":
			icon = <FontAwesomeIcon icon={faCookie} />;
			break;
		case "MUG":
			icon = <FontAwesomeIcon icon={faMugSaucer} />;
			break;
		default:
			break;
	}
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
                md:h-28
                hover:shadow-2xl
                transition-all
                rounded-2xl
                w-full
                md:flex
                justify-between
                items-center
				gap-5	"
			key={product.id}
			ref={drag}
			style={{ cursor: 'move' }}
		>
			<div
				className={`hidden md:flex justify-center items-center rounded-md h-20 w-20 text-4xl ml-5 ${backgroundClass}`}
			>
				{icon}
			</div>

			<h2>
				{product.name}
				<br />
				<p className="text-red-600"> {formatcurrency(product.price)}</p>
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
