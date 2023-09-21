import { useState , useContext } from "react";
import DraggableMarker from "../components/DraggableMarker";
import { MapContainer, TileLayer } from "react-leaflet";
import Addresstext from "../components/Addresstext";
import { AddressContext } from "../App";




function Map() {
    const [address , setAddress] = useContext(AddressContext)
    console.log(address)
  // is map opened state with initial value "true"
  const [isMapOpened, setMapOpened] = useState(true);
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
     
        <input
          type="checkbox" className="sr-only peer"
          onChange={() => {
            setMapOpened(!isMapOpened);
          }}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isMapOpened ? " Address Form" : " Map" }
        </span>
      </label>

      {isMapOpened ? (
        <>
          <h2> Set your Address on Map.</h2>
          <MapContainer
            center={address}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker />
          </MapContainer>
        </>
      ) : (
        <Addresstext />
      )}
    </>
  );
}
export default Map;
