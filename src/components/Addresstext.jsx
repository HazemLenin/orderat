import { useContext, useRef } from "react";
import AddressContext from "../contexts/AddressContext";

function Addresstext() {
	const [address, setAddress] = useContext(AddressContext);
	const addressRef = useRef();

	function handleChange() {
		setAddress({
			isMap: false,
			lat: 31.25214048726485,
			lng: 30.009838471967534,
			address: addressRef.current.value,
		});
		console.log(address);
	}

	return (
		<div className="ml-5 ">
			<h2 className="italic">Detailed Address :</h2>
			<input
				type="text"
				placeholder="Type your Address"
				onChange={handleChange}
				ref={addressRef}
				className="border-2"
			/>{" "}
			<br />
			<br />
			<button
				type="submit"
				className="border-4 rounded border-red-700 ml-10 bg-red-700 text-white"
			>
				Save Address
			</button>
		</div>
	);
}
export default Addresstext;
