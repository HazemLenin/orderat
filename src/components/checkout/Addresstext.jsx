import { useContext, useRef, useState } from "react";

function Addresstext() {
	const [address, setAddress] = useState({});
	const addressRef = useRef();

	function handleChange() {
		setAddress({
			isMap: false,
			lat: 31.25214048726485,
			lng: 30.009838471967534,
			address: addressRef.current.value,
		});
	}

	return (
		<div className="ml-5 ">
			<h2 className="text-3xl text-red-700 text-center">Detailed Address:</h2>
			<input
				className="
					outline-none
					block
					p-4
					pl-10
					text-sm
					text-gray-900
					border
					border-gray-300
					rounded-lg
					bg-gray-50
					focus:ring-red-700
					focus:border-red-700
					w-2/3
					mx-auto
					my-10"
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Type your address"
			/>
		</div>
	);
}
export default Addresstext;
