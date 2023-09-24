import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import "./map.css";

function DraggableMarker() {
	const [address, setAddress] = useState({
		lat: 31.25214048726485,
		lng: 30.009838471967534,
	});
	const [draggable, setDraggable] = useState(false);
	const markerRef = useRef(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					let newAdress = marker.getLatLng();
					newAdress.isMap = true;
					setAddress(newAdress);
				}
			},
		}),
		[]
	);
	const toggleDraggable = useCallback(() => {
		setDraggable((d) => !d);
	}, []);

	return (
		<Marker
			draggable
			eventHandlers={eventHandlers}
			position={address}
			ref={markerRef}
		>
			<Popup minWidth={90}>
				<span onClick={toggleDraggable}>{draggable}</span>
			</Popup>
		</Marker>
	);
}
export default DraggableMarker;
