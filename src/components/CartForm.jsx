import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';


export default function CartForm() {

  const { cart, totalCart, setId, clear } = useContext(CartContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [buyer, setBuyer] = useState ({})
 

  useEffect(() => {
    setBuyer({ name, email, phone })
  }, [name, email, phone])

  const date = new Date()

  const sendOrder = () => {

    const order = {
        buyer: buyer, 
        items: cart, 
        total: totalCart().toLocaleString("es-CL", {style:"currency", currency:"CLP"}),
        date: date
    }

    const db = getFirestore()
    const orders = collection(db, 'orders')

    addDoc(orders, order).then(({id}) => {
        setId(id)
    })
  }
  
  const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const validRegexPhone = /^[0-9]*$/

  return (
    <>
      <h3>Ingresa tus datos para procesar tu orden</h3>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
      > 
        <TextField required id="outlined-basic" label="Nombre" variant="outlined" onChange={(n) => {setName(n.currentTarget.value)}} />


        { email.match(validRegexEmail) ?
          <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(n) => {
          setEmail(n.currentTarget.value)}} /> : <TextField error required id="outlined-basic" label="Email" variant="outlined" 
          helperText="Email inválido"
          onChange={(n) => {
            setEmail(n.currentTarget.value)}} /> }


        { (phone.match(validRegexPhone) && phone.length == 8) ? 
        <TextField required id="outlined-basic" label="Teléfono" variant="outlined" InputProps={{
            startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
          }} onChange={(n) => {
          setPhone(n.currentTarget.value)}}/> : <TextField error required id="outlined-basic" label="Teléfono" variant="outlined" helperText="Debes ingresar 8 dígitos" 
          InputProps={{
            startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
          }} onChange={(n) => {
          setPhone(n.currentTarget.value)}}/> }
      </Box>

      { (phone == false || email == false || name == false) ? <Button variant="contained" disabled> Finalizar compra</Button> : 
      <Link to={`/finish-order`}>
        <Button variant="contained" onClick={() => {
        sendOrder()
        clear()}
        }>Finalizar compra</Button>
      </Link> }
    </>
  );
}
