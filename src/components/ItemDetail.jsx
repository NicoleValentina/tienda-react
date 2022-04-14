import React from 'react'
import ItemCount from './ItemCount'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

export default function ItemDetail({ item }) {

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
                        my: 10,
                    }}>
                        <ItemCount stock={item.stock} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}