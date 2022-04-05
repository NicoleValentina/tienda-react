import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import '../App.css';


export default function ItemCount({ stock }) {

    //Sumar restar productos
    const [count, setCount] = useState(0)

    function add() {
        count < stock && setCount(count + 1)
    }

    function sub() {
        count > 0 && setCount(count - 1)
    }

    function onAdd() {
        alert(count + ' productos agregados al carro')
    }


    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '20%'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button onClick={sub} variant="outlined"> <RemoveIcon /> </Button>
                    <p>{count}</p>
                    <Button onClick={add} variant="outlined"> <AddIcon /> </Button>
                </Box>

                <Button onClick={onAdd} variant="contained">Agregar al carro</Button>
            </Box>
        </>

    )
}