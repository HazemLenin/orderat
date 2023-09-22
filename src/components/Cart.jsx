/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { data } from "autoprefixer";
//creating the context of the Cart
export const CartContext = createContext([null, () => {}, () => {}, () => {}]);
function Cart() {
  //setting the memo of cart
  const [cart, setCart] = useState([]);
  //finding the item by id in the cart
  let add = (id) => {
    cart.find((i) => i.id == id);
    //setting the amount to 1 if the item is not in the cart
    if (add === undefined) {
      let item = data.items.find((i) => i.id == id);
      item.amount = 1;
      //adding the item into the cart
      setCart([...cart, item]);
    } else {
      //if the item was already in the cart
      let amountCart = cart.map((item) => {
        if (item.if == id) {
          item.amount++;
        }
        return item;
      });
      setCart(amountCart);
    }
  };
  //A remove function for the immediately remove button
  let remove = (id) => {
    setCart(cart.filter((item) => item.id != id));
  };
  //Decreasing the amount
  let decreaseAmount = (id) => {
    let amountCart = setCart(
      cart.map((item) => {
        if (item.id == id) {
          item.amount--;
        }
        return item;
      })
    );
    //Remove the item if the decreasing came till
    amountCart = amountCart.filter((i) => {
      i.amount > 0;
    });
    setCart(amountCart);
  };
  return (
<CartContext.Provider value={[cart, add, remove, decreaseAmount]}>

</CartContext.Provider>



  );
}

export default {Cart};