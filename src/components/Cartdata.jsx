import formatcurrency from "./Formatcurrency";

function Cartdata(props) {
  let var1 = props.products.reduce((total, product) => {
    const item = props.products.find((item) => item.id === product.id);
    return total + (item?.price || 0) * product.quantity;
  }, 0);
  return (
    <div className="rounded-lg  shadow-2xl p-8 mr-96 w-full bg-red-600  ">
      {props.products.map((product) => (
        <>
          <div className="flex justify-between text-xl" key={product.id}>
            <div className="text-white w-full text-center mb-10 ">
              {product.name}
            </div>
            <div className="text-white w-full text-center mb-10">
              {product.price}
            </div>
            <div className="text-white w-full text-center mb-10">
              {product.quantity}
            </div>
          </div>

          <hr />
        </>
      ))}
      <span className="ml-96 text-white text-xl ">{var1}</span>
    </div>
  );
}
export default Cartdata;
