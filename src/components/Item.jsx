import React from "react"
import ItemCount from './ItemCount'
import { Box } from '@mui/system';


export default function Item({ item }) {

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%'
            }}>
                <img src={item.imagen} />
                <h2>{item.nombre}</h2>
                <p>${item.precio}</p>
                <ItemCount stock={item.stock} />
                <button>Ver Detalle</button>
            </Box>
        </>

    )

}
