import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CartForm() {

  const { cart, total } = useContext(CartContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buyer, setBuyer] = useState ({})

  useEffect(() => {
    setBuyer({ name, email, phone })
  }, [name, email, phone])

  const date = new Date()

  const sendOrder = () => {

    const order = {
        buyer: buyer, 
        items: cart, 
        total: total,
        date: date
    }

    console.log(order);

    const db = getFirestore()
    const orders = collection(db, 'orders')

    addDoc(orders, order).then(({id}) => {
        console.log(id);
    })
  }
   

  return (
    <>
      <h3>Ingresa tus datos para completar tu compra</h3>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nombre" variant="outlined" onChange={(n) => {setName(n.currentTarget.value)}} />
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(n) => {setEmail(n.currentTarget.value)}} />
        <TextField id="outlined-basic" label="Teléfono" variant="outlined" onChange={(n) => {setPhone(n.currentTarget.value)}}/>
      </Box>

      <Button onClick={() => {sendOrder()}}>Finalizar compra</Button>
    </>
  );
}
