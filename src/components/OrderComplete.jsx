import { Box } from "@mui/system";
import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";

import "../App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function OrderComplete () {

    const { orderId } = useContext(CartContext)

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
                <h2>El ID de la orden es <span>{orderId}</span></h2> 
                <h3>Muchas gracias por tu compra, te avisaremos cuando tu pedido vaya en camino.</h3>
                <h3>Si necesitas ayuda con tu orden, escríbenos a <a href="mailto:ayuda@basicstore.cl">ayuda@basicstore.cl</a> </h3>

            </Box> 
                   <Link to={`/`}><Button variant='contained' className='backHome'>Volver a la tienda</Button></Link>
            </Box>
        </>
    )
}