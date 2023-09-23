import Cartdata from "../components/Cartdata";
import formatcurrency from "../components/Formatcurrency";
import Delivery from "../components/Delivery";
import Total from "../components/Total";
import Cartcost from "../components/Cartcost";
import Taxes from "../components/Taxes";
let products = [
  {
    id: 1,
    name: "Dinner box",
    price: 100,
    quantity: 5,
  },
  {
    id: 2,
    name: "Fried Chicken",
    price: 200,
    quantity: 3,
  },
  {
    id: 3,
    name: "Small Burger",
    price: 300,
    quantity: 1,
  },
  {
    id: 4,
    name: "Happy Meal",
    price: 400,
    quantity: 8,
  },
  {
    id: 5,
    name: "Chicken Macdo",
    price: 500,
    quantity: 8,
  },
];
function Checkout() {
  return (
    <div className="flex w-full gap-20">
      <div className="w-2/3 text-white">
        <Delivery />

        <br />

        <Taxes products={products} />

        <br />

        <Cartcost products={products} />
        <br />

        <Total products={products} />
        <br />
        <div className="ml-60">
          <button className="rounded-xl bg-red-600 text-white w-28 h-12 text-2xl ">
            Cash
          </button>
          <button className="rounded-xl bg-red-600 text-white  w-28 h-12 ml-20 text-2xl">
            Credit
          </button>
        </div>
      </div>

      <div className="w-1/3  ">
        <Cartdata products={products} />
      </div>
    </div>
  );
}
export default Checkout;
