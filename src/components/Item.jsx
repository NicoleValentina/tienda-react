import React from "react"
import { Box } from '@mui/system';
import { Link } from "react-router-dom";


export default function Item({ item }) {

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%'
            }} className="item">
                <Link to={`/item/` + item.id} className="itemLink">
                    <img src={item.imagen} />
                    <h2>{item.nombre}</h2>
                </Link>
                <p>${item.precio}</p>
            </Box>
        </>

    )

}
