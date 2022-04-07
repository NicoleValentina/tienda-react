import React from "react"
import Item from './Item'
import { Box } from '@mui/system';

export default function ItemList({ productos }) {

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                {productos.map(item =>
                    <Item key={item.id} item={item} />)}
            </Box>
        </>
    )
}