import Cartdata from "./Cartdata";
import formatcurrency from "./Formatcurrency";
function Delivery() {
  return (
    <div className="w-full p-8  mx-auto rounded-lg bg-gradient-to-r from-red-600 t0-black-200 text-xl">
      <h1>your delivery :{formatcurrency(60)}</h1>
    </div>
  );
}
export default Delivery;
