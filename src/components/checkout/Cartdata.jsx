import formatcurrency from "./Formatcurrency";
import CartContext from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

function Cartdata(props) {
	let cartCost = props.products.reduce(
		(total, product) => total + (product.price || 0) * product.amount,
		0
	);

	const [cart, add, remove, decreaseAmount] = useContext(CartContext);

	return (
		<div className="rounded-lg shadow-2xl p-8 w-full bg-red-700">
			<div className="flex justify-between items-center mb-3">
				<div className="text-white w-full text-center">Product</div>
				<div className="text-white w-full text-center">Price</div>
				<div className="text-white w-full text-center">Amount</div>
			</div>
			<hr />
			{props.products.map((product, index) => (
				<div key={index}>
					<div className="flex justify-between items-center my-3">
						<div className="text-white w-full text-center">{product.name}</div>
						<div className="text-white w-full text-center">{product.price}</div>
						<div className="text-white w-full text-center">
							{product.amount}
						</div>
						<button
							className="text-white"
							onClick={() => decreaseAmount(product.restaurantId, product.id)}
						>
							<FontAwesomeIcon icon={faMinus} />
						</button>
					</div>

					<hr />
				</div>
			))}
			<p className="text-white text-xl text-right mt-3">
				Total: {formatcurrency(cartCost)}
			</p>
		</div>
	);
}
export default Cartdata;
