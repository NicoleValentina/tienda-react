import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState('')

  //Log carro
  console.log(cart, total);
  
    //Agregar al carro
  function addToCart(item) {
    setCart([...cart, item])
  }

  //Revisar si hay items duplicados
  function isInCart(item){   
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id)

    if (indexItem !== -1) {
        const updateCart = [...cart]

        updateCart[indexItem].count = updateCart[indexItem].count + item.count

        setCart(updateCart)
        totalCart()

    } else {
        addToCart(item)}
  }

  //Remover un producto
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id))
    totalCart()
  }

  //Remover todo
  function clear() {
    setCart([]);
  }

  //Total carro
  function totalCart() {
    const priceCart = cart.map((item) => item.precio)
    setTotal(priceCart.reduce((ac, item) => ac + item, 0))
  }
 
  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clear, total }}>{children}</CartContext.Provider>
    </>
  );
}
