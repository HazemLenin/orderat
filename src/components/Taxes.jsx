import Cartdata from "./Cartdata";
import formatcurrency from "./Formatcurrency";
export default function Taxes(props) {
  return (
    <div className=" p-8  mx-auto rounded-lg bg-gradient-to-r from-red-600 t0-white-200  w-full   text-xl">
      <h1 className=""> Taxes :</h1>
      {formatcurrency(
        props.products.reduce((total, product) => {
          const item = props.products.find((item) => item.id === product.id);
          return total + ((item?.price || 0) * product.quantity )* 0.14;
        
        }, 0)
      )}
    
    </div>
  );
}
