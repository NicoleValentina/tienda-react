import { Box } from "@mui/system";
import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";

import "../App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function OrderComplete () {

    const { orderId } = useContext(CartContext)

     //Total items
    function totalProd(a, b) {
        const total = a * b;
        return total;
     }


    return(
        <>
        <Box sx={{ 
            my: 5,
            mx: 5
        }}>
            <h1>Tu orden se ha generado con éxito 🎉</h1>  

            <Box className="orderSummary" sx={{
                px: 3,
                py: 3
            }}>
                <h3><span>El ID de la orden es</span> {orderId}</h3> 
                <h4>Muchas gracias por tu compra, te avisaremos cuando tu pedido vaya en camino.</h4>
                <h4>Si necesitas ayuda con tu orden, escríbenos a ayuda@basicstore.cl</h4>

            </Box> 
                   <Link to={`/`}><Button variant='contained' className='backHome'>Volver a la tienda</Button></Link>
            </Box>
        </>
    )
}