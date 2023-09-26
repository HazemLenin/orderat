import Cartdata from "./Cartdata";
import formatcurrency from "./Formatcurrency";
function Delivery() {
	return (
		<div className="py-5 text-xl border-b border-gray-400">
			Delivery: {formatcurrency(60)}
		</div>
	);
}
export default Delivery;
