import { useState, useContext } from "react";
import DraggableMarker from "./DraggableMarker";
import { MapContainer, TileLayer } from "react-leaflet";
import Addresstext from "./Addresstext";

function Map() {
	const [address, setAddress] = useState({
		lat: 31.25214048726485,
		lng: 30.009838471967534,
	});
	// is map opened state with initial value "true"
	const [isMapOpened, setMapOpened] = useState(true);
	return (
		<>
			<label className="relative inline-flex items-center cursor-pointer mt-5 ml-10 mb-5">
				<input
					type="checkbox"
					className="sr-only peer"
					onChange={() => {
						setMapOpened(!isMapOpened);
					}}
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-700 dark:peer-focus:ring-red-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-700"></div>
				<span className="ml-3 text-sm font-medium">
					{isMapOpened ? "Map" : "Address Form"}
				</span>
			</label>

			{isMapOpened ? (
				<div className="z-10 relative">
					<h2 className="text-center text-red-700 mb-5 text-2xl">
						Set your Address on Map.
					</h2>
					<MapContainer center={address} zoom={12} scrollWheelZoom={true}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<DraggableMarker />
					</MapContainer>
				</div>
			) : (
				<Addresstext />
			)}
		</>
	);
}
export default Map;
