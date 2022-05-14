import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

//Imports tabla MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "../App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function OrderComplete () {

    const { cart, total, orderId, totalCart } = useContext(CartContext)

     //Total items
    function totalProd(a, b) {
        const total = a * b;
        return total;
     }

    // const priceCart = cart.map((item) => item.precio * item.count)
    // console.log(priceCart);
    // let testtotal = priceCart.reduce((ac, item) => ac + item, 0)
    // console.log(testtotal);

    return(
        <>
        <Box sx={{ 
            my: 5,
            mx: 5
        }}>
            <h1>Tu orden se ha generado con éxito 🎉</h1>
            <h3><span>El ID de la orden es</span> {orderId}</h3>   

            <Box className="orderSummary" sx={{
                px: 3,
                py: 3
            }}>

                <h4>Tus productos</h4>
                <TableContainer>
            <Table>
              <TableHead>
                <TableCell></TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Total</TableCell>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow className="itemCart" key={item.id}>
                    <TableCell>
                      <img src={item.imagen} />
                    </TableCell>
                    <TableCell>
                      <h3>{item.nombre}</h3>
                      <p className="itemCat">{item.categoria}</p>
                    </TableCell>
                    <TableCell>
                      <p>{item.count}</p>
                    </TableCell>
                    <TableCell>
                      <p>{(item.precio).toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</p>
                    </TableCell>
                    <TableCell>
                      <p>{totalProd(item.count, item.precio).toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box>
              <h4 className="orderTotal">Total compra: {totalCart()}</h4>
          </Box>

            </Box> 
                   <Link to={`/`}><Button variant='contained' >Volver a la tienda</Button></Link>
            </Box>
        </>
    )
}