import Cartdata from "./Cartdata";
import formatcurrency from "./Formatcurrency";

export default function Taxes(props) {
	let cartCost = props.products.reduce(
		(total, product) => total + (product.price || 0) * product.amount * 0.14,
		0
	);
	return (
		<div className="py-5 text-xl border-b border-gray-400">
			Taxes: {formatcurrency(cartCost, 0)}
		</div>
	);
}
