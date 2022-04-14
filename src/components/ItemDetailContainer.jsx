import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system';
import { getItem } from '../utils/Productos';
import ItemDetail from './ItemDetail'
import { useParams } from "react-router";

export default function ItemDetailContainer() {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getItem(id - 1)
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