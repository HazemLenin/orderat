import formatcurrency from "./Formatcurrency";
import Cartdata from "./Cartdata";

export default function Total(props) {
  let var1 = props.products.reduce((total, product) => {
    const item = props.products.find((item) => item.id === product.id);
    return total + (item?.price || 0) * product.quantity;
  }, 0);

  let var2 = var1 * 0.14;
  let var3 = 60;
  let var4 = var1 + var2 + var3;
  return (
    <div className="p-8 mx-auto rounded-lg bg-gradient-to-r from-red-600 t0-black-200  text-xl ">
      <h1> your total:{var4}</h1>
    </div>
  );
}
