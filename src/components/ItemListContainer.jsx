import React from "react";
import ItemCount from './ItemCount'
import { Box } from '@mui/system';
import '../App.css';

export default function ItemContainer({ stock }) {
  return (
    <>
      <Box sx={{
        mx: 5,
        my: 5,
      }}>
        <h1>Tienda</h1>

        <ItemCount stock={10} />
      </Box>
    </>
  );
}
