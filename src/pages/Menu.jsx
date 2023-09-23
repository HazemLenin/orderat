// sending page
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../data.json";
import pic from "../assets/css/pic.jpg";

function Menu() {
  const { id } = useParams();
  let restaurant = data.restaurants.find((r) => r.id == id);
  return (
    <>
      {" "}
      {/* <div className="justify-center gap-5 relative flex text-center text-7xl mt-12 pb-2 ">
        {" "}
        <img src={pic} alt="" className=" rounded-full w-32 h-32 " />
        {restaurant.name}
      </div> */}
      <div className="relative h-60 overflow-hidden">
        <div
          style={{ backgroundImage: `url('${pic}')` }}
          className="bg-cover bg-center w-full absolute inset-0"
        ></div>
        <div className="absolute inset-0 bg-red-700/50 flex items-end text-white pb-14 pl-10">
          <h1 className="text-5xl">{restaurant.name}</h1>
        </div>
      </div>
      <h1 className="text-6xl my-10 text-red-700">Menu</h1>
      <div className="grid grid-cols-3  gap-10 text-2xl">
        {restaurant.products.map((product) => (
          <>
            <h1
              className="overflow-hidden h-28 relative hover:shadow-2xl rounded-2xl right-0 ml-6 w-96 flex justify-center items-center align-middle"
              key={product.id}
            >
              <img
                src={pic}
                alt=""
                className="absolute left-0 -z-10 pr-4 py-auto w-32  object-cover h-full"
              />
              <h1 className="ml-28 my-auto">
                {product.name}
                <br />
                <p className="text-black text-m"> {product.price}</p>
              </h1>
              <button class="text-4xl font-bold rounded-full h-10 w-10 shadow-2xl text-red-700">
                +
              </button>
            </h1>
          </>
        ))}
      </div>
    </>
  );
}
export default Menu;
