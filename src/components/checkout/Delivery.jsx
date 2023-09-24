import Cartdata from "./Cartdata";
import formatcurrency from "./Formatcurrency";
function Delivery() {
	return (
		<div className="py-5 text-xl border-b border-gray-400">
			<h1>Delivery: {formatcurrency(60)}</h1>
		</div>
	);
}
export default Delivery;
