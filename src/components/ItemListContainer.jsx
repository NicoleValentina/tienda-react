import React, { useEffect, useState } from "react";
import { Box } from '@mui/system';
import ItemList from './ItemList'
import '../App.css';
import { useParams } from "react-router";
import { getDocs, collection, getFirestore } from 'firebase/firestore'



export default function ItemContainer() {

  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState([])

  const { category } = useParams()

  useEffect( () => {
    const db = getFirestore();
    const getProds = collection(db, "productos");
  
    getDocs(getProds).then((snap) => {

        if (category) {
          setProductos(snap.docs.map((item) => ({ id: item.id, ...item.data() })))
          
          let categorias = productos.filter(
            (item) => item.categoria === category
          );
          setProductos(categorias);
          setTitulo(category);
  
        } 
        else {
          setProductos(snap.docs.map((item) => ({ id: item.id, ...item.data() })))
          setTitulo("Productos");
        }
    }) 
  }, [category]);
  


  console.log( productos );


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
