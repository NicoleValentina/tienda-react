import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState("")

  //Log carro
  console.log(cart);
  
    //Agregar al carro y sumar total
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

    } else {
        addToCart(item)}
  }

  //Remover un producto
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  //Remover todo
  function clear() {
    setCart([]);
  }

  //Total carro
  function totalCart() { 
    const priceCart = cart.map((item) => item.precio * item.count)
    const total = priceCart.reduce((ac, item) => ac + item, 0)
    return total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})
  } 
 
  //Guardar order ID
  function setId(id) {
     setOrderId(id)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clear, totalCart, setId, orderId }}>{children}</CartContext.Provider>
    </>
  );
}
