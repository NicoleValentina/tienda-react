import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system';
import ItemDetail from './ItemDetail'
import { useParams } from "react-router";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer() {

    const { id } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {

        const db = getFirestore ()
        const getItem = doc(db, 'productos', '0'+id)
        getDoc(getItem).then((res) => {
                setItem({ id: res.id, ...res.data() })

                console.log(res.nombre);
            })
    }, [id])

    console.log(item);

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