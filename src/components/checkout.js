import formatcurrency from "./Formatcurrency";
import data from "./data";
 export default function delivery(){
    return
    <div>
    <h1>your delivery : {formatcurrency(60)}</h1>
    </div>
}
 export default function cartcost(){
    return
    <div>
    <h1> your cart cost :</h1>
    {formatcurrency(
      product.reduce((total, product) => {
        const item = product.data.find((item) => item.id === product.id);
        return total + (item?.price || 0) * product.quantity;
      }, 0)
    )} 
    
    </div>
 }
 export default function taxes(){
    return
    <div>
    <h1> taxes :</h1>
    {formatcurrency(
      product.reduce((total, product) => {
        const item = product.data.find((item) => item.id === product.id);
        return total + (item?.price || 0) * product.quantity*0.14;
      }, 0)
    )} 
</div>
 }
 export default function total(){
  return
  <div>
  <h1> your total:</h1>
  {formatcurrency(
    product.reduce((total, product) => {
      const item = product.data.find((item) => item.id === product.id);
      return total + (item?.price || 0) * product.quantity*0.14 + 60;
    }, 0)
  )} 
</div>
}