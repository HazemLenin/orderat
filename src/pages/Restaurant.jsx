import { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "./SearchBar";
function Restaurant() {
  const [selected, setSelected] = useState("Food");
  return (
    <>
      <div className=" items-center text-center flex gap-20">
        <div className="gap-10 flex items-center mt-10 mx-auto">
          {selected === "Food" ? (
            <button
              className="bg-red-600 border-2 w-40 h-24 border-red-600 rounded-xl text-white text-4xl  shadow-lg shadow-black "
              onClick={() => setSelected("Food")}
            >
              Food
            </button>
          ) : (
            <button
              className="bg-red-600 border-2 w-32 h-12 border-red-600 rounded-xl text-white text-3xl  shadow-xl shadow-gray-300"
              onClick={() => setSelected("Food")}
            >
              Food
            </button>
          )}
          {selected == "desert" ? (
            <button
              className="bg-red-600 border-2 w-40 h-24 border-red-600 rounded-xl text-white text-3xl  shadow-lg shadow-black"
              onClick={() => setSelected("desert")}
            >
              Dessert
            </button>
          ) : (
            <button
              className="bg-red-600 border-2 w-32 h-12 border-red-600 rounded-xl text-white text-3xl shadow-xl shadow-gray-300"
              onClick={() => setSelected("desert")}
            >
              Dessert
            </button>
          )}
          {selected == "drinks" ? (
            <button
              className="bg-red-600 border-2 w-40 h-24 border-red-600 rounded-xl text-white text-3xl shadow-lg shadow-black"
              onClick={() => setSelected("drinks")}
            >
              Drinks
            </button>
          ) : (
            <button
              className="bg-red-600 border-2 w-32 h-12 border-red-600 rounded-xl text-white text-3xl shadow-xl shadow-gray-300"
              onClick={() => setSelected("drinks")}
            >
              Drinks
            </button>
          )}
        </div>
      </div>
      <SearchBar className="items-center align-middle justify-center mx-auto text-center text-justify" />

      <div className="grid grid-cols-3 gap-10 mt-20">
        {data.restaurants
          .filter((restaurant) => restaurant.category == selected)
          .map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    </>
  );
}
export default Restaurant;
