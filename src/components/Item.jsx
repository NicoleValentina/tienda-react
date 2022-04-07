import React from "react"
import ItemCount from './ItemCount'
import { Box } from '@mui/system';




export default function Item({ item }) {
    console.log(item.imagen);

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%'
            }}>
                <img src={require('../media/' + item.imagen + '.jpg')} />
                <h2>{item.nombre}</h2>
                <p>${item.precio}</p>
                <ItemCount stock={item.stock} />

            </Box>
        </>

    )

}
