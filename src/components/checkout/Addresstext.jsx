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
			<h2 className="text-2xl text-red-700 animate-pulse text-center mb-5">
				Address
			</h2>
			<input
				type="text"
				placeholder="Building Number"
				className="outline-none
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
					"
			/>
			<br />
			<input
				type="text"
				placeholder="Apt. No."
				className="outline-none
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
				"
			/>{" "}
			<br />
			<input
				type="text"
				placeholder="Floor (optional)"
				className="outline-none
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
					"
			/>{" "}
			<br />
			<input
				type="text"
				placeholder="Street Name"
				className="outline-none
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
					"
			/>{" "}
			<br />
			<input
				type="text"
				placeholder="Additional directions (optional)"
				className="outline-none
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
			"
			/>{" "}
		</div>
	);
}
export default Addresstext;
