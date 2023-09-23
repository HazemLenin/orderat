import { createContext } from "react";

const AddressContext = createContext([
	{
		lat: 31.25214048726485,
		lng: 30.009838471967534,
		isMap: true,
	},
	() => {},
]);

export default AddressContext;
