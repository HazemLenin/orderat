/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { data } from "autoprefixer";
//creating the context of the Cart
const CartContext = createContext([[], () => {}, () => {}, () => {}]);
export default CartContext;
