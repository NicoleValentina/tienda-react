import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  //Log carro
  console.log(cart);
  

  function addToCart(item) {

    setCart([...cart, item])
  }

  function isInCart(item){   
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id)

    if (indexItem !== -1) {
        const updateCart = [...cart]

        updateCart[indexItem].count = updateCart[indexItem].count + item.count

        setCart(updateCart)
    } else {
        addToCart(item)}
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
