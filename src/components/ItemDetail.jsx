import React from 'react'
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

export default function ItemDetail({ item }) {

    console.log(item);

    const Img = styled('img') ``

    return (
        <>
            <Box sx={{
                display: 'flex',

            }}>
                <Box sx={{
                    width: '50%'
                }}>
                    <Img className={item.id} src={item.imagen} sx={{
                        width: '50%'
                    }} />
                </Box>

                <Box sx={{
                    width: '75%'
                }}>
                    <h2>{item.nombre}</h2>
                    <p>${item.precio}</p>
                </Box>
            </Box>
        </>
    )
}