import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {

    const [qty, setQty] = useState(0)

    function countOnAdd (q) {
        setQty(q) 
        console.log(qty);  
    }

    const Img = styled('img')``

    return (
        <>
            <Box className="itemDetail" sx={{
                display: 'flex',
                alignItems: 'center'

            }}>
                <Box sx={{
                    width: '50%',
                }}>
                    <Img className={item.id} src={item.imagen} sx={{
                        width: '75%'
                    }} />
                </Box>

                <Box sx={{
                    width: '50%'
                }}>
                    <p>{item.categoria}</p>
                    <h2>{item.nombre}</h2>
                    <h3>${item.precio}</h3>
                    <p>Stock disponible: {item.stock} unidades</p>

                    <Box sx={{
                        width: '50%',
                        my: 5,
                    
                    }}>
                    
                    {
                    qty === 0 ? <ItemCount stock={item.stock} onAdd={countOnAdd} item={item} /> : <Link to={`/cart`}><Button variant="contained" sx={{width: '100%'}}>Finalizar compra</Button></Link>
                    }

                    <Box sx={{
                        my: 10
                    }} className='description'>
                        <h4>Descripción</h4>
                        <p>{item.descripcion}</p>
                    </Box>
                    </Box>

                    
                </Box>
            </Box>
        </>
    )
}