import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    console.log(item);
  }

  function isInCart(id){
      console.log();
  }

  function removeFromCart(item) {
    console.log(item);
  }

  function clear() {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clear }}>{children}</CartContext.Provider>
    </>
  );
}
