import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system';
import { getItem } from '../utils/Productos';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

    useEffect(() => {
        getItem(0)
            .then((res) => {
                setItem(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <Box sx={{
                mx: 5,
                my: 5,
            }}>
                <ItemDetail item={item} />
            </Box>
        </>
    )
}