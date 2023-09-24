import formatcurrency from "./Formatcurrency";
import Cartdata from "./Cartdata";

export default function Total(props) {
	let cartCost = props.products.reduce(
		(total, product) => total + (product.price || 0) * product.amount,
		0
	);

	let taxes = cartCost * 0.14;
	let delivery = 60;
	let total = cartCost + taxes + delivery;
	return (
		<div className="py-5 text-xl text-right text-red-600">
			Total: {formatcurrency(total)}
		</div>
	);
}
