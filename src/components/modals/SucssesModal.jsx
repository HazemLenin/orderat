import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

function SucssesModal() {
	const [cart, add, remove, decreaseAmount, setCart] = useContext(CartContext);
	useEffect(() => {
		setCart([]);
	}, []);
	return (
		<div className="flex justify-center items-center flex-col gap-10 bg-white rounded-xl p-10">
			<h1 className="font-bold  text-red-600 text-5xl">Quicky is on the way</h1>
			<div className="bg-green-600 rounded-full flex justify-center items-center w-60 h-60 text-9xl text-white">
				<FontAwesomeIcon icon={faCheck} />
			</div>
			<Link
				to="/"
				className="text-center block pt-3 text-3xl font-semibold italic rounded-full h-16 w-60 shadow-2xl
       text-white bg-red-600"
			>
				Go Home
			</Link>
		</div>
	);
}
export default SucssesModal;
