import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import '../App.css';


export default function ItemCount({ stock, onAdd, item }) {

    const { addToCart, isInCart } = useContext(CartContext)

    //Sumar restar productos
    const [count, setCount] = useState(0)

    function add() {
        count < stock && setCount(count + 1)
    }

    function sub() {
        count > 0 && setCount(count - 1)
    }



    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={sub} variant="outlined"> <RemoveIcon /> </Button>
                    <p>{count}</p>
                    <Button onClick={add} variant="outlined"> <AddIcon /> </Button>
                </Box>

                <Button onClick={() => { 
                    onAdd(count); 
                    addToCart({...item, count})
                    isInCart({...item, count})
                    }} variant="contained">Agregar al carro</Button>
            </Box>
        </>

    )
}