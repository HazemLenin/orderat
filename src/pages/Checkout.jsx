import Cartdata from "../components/checkout/Cartdata";
import formatcurrency from "../components/checkout/Formatcurrency";
import Delivery from "../components/checkout/Delivery";
import Total from "../components/checkout/Total";
import Cartcost from "../components/checkout/Cartcost";
import Taxes from "../components/checkout/Taxes";
import CartContext from "../contexts/CartContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faDollar } from "@fortawesome/free-solid-svg-icons";
import Map from "../components/checkout/Map";
import VisaModal from "../components/modals/VisaModal";
import SucssesModal from "../components/modals/SucssesModal";

function Checkout() {
	const [cart, add, remove, decreaseAmount] = useContext(CartContext);

	const [isSuccessOpened, setIsSuccessOpened] = useState(false);
	const [isCreditOpened, setIsCreditOpened] = useState(false);

	return (
		<div className="flex w-full gap-20 px-5 pt-5">
			<div className="w-2/3">
				<h1 className="text-4xl text-red-600">Checkout</h1>
				<Map />
				<Delivery />
				<Taxes products={cart} />
				<Cartcost products={cart} />
				<Total products={cart} />

				<div className="flex justify-around w-full">
					<button
						onClick={() => setIsSuccessOpened(true)}
						className="flex justify-center items-center gap-2 rounded-md bg-red-600 text-white w-32 h-12 text-xl"
					>
						<FontAwesomeIcon icon={faDollar} />
						Cash
					</button>
					<button
						onClick={() => setIsCreditOpened(true)}
						className="flex justify-center items-center gap-2 rounded-md bg-red-600 text-white w-32 h-12 text-xl"
					>
						<FontAwesomeIcon icon={faCreditCard} />
						Credit
					</button>
				</div>
			</div>

			<div className="w-1/3  ">
				<Cartdata products={cart} />
			</div>
			{!!isCreditOpened && (
				<div className="flex justify-center items-center fixed z-50 inset-0 w-screen h-screen bg-black/50">
					<VisaModal
						submitFunc={(e) => {
							e.preventDefault();
							setIsCreditOpened(false);
							setIsSuccessOpened(true);
						}}
					/>
				</div>
			)}
			{!!isSuccessOpened && (
				<div
					closeFunc={() => setIsSuccessOpened(false)}
					className="flex justify-center items-center fixed z-50 inset-0 w-screen h-screen bg-black/50"
				>
					<SucssesModal />
				</div>
			)}
		</div>
	);
}
export default Checkout;
