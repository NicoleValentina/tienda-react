import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import ItemList from './ItemList'
import { listaProductos } from '../utils/Productos'
import '../App.css';
import { useParams } from "react-router";



export default function ItemContainer() {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState([])

  const { category } = useParams()

  useEffect(() => {
    listaProductos()
      .then((res) => {

        if (category) {
          let categorias = res.filter((item) => item.categoria === category)
          setProductos(categorias)
          setTitulo(category)
         
        } else {
          setProductos(res)
          setTitulo('Productos')
        }

      })
      .catch((err) => {
        console.log(err);
      })
}, [category])



return (
  <>
    <Box sx={{
      mx: 5,
      my: 5,
    }}>
      <h1>{titulo}</h1>

      <ItemList productos={productos} />
    </Box>
  </>
);
}
