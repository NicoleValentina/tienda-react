import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  

  function addToCart(item) {
    setCart([...cart, item])
  }
  console.log(cart);

  function isInCart(id){   
    
  }

  function removeFromCart(id) {
    setCart([cart.filter((item) => item.id !== id)])
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
