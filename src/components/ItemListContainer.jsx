import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import ItemList from './ItemList'
import { listaProductos } from '../utils/Productos'
import '../App.css';


export default function ItemContainer() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    listaProductos()
      .then((res) => {
        setProductos(res)
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
        <h1>Tienda</h1>

        <ItemList productos={productos} />
      </Box>
    </>
  );
}
