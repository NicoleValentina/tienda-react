import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import ItemList from "./ItemList";
import "../App.css";
import { useParams } from "react-router";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";

export default function ItemContainer() {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const getProds = collection(db, "products");
    getDocs(getProds).then((res) => {
      setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setTitulo("Productos");
    });

    if(category) {
      const getCat = query(collection(db, "products"), where('categoria', '==', category));
      getDocs(getCat).then((res) => {
        setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      setTitulo(category)
      }) 
    }
  }, [category]);


  return (
    <>
      <Box
        sx={{
          mx: 5,
          my: 5,
        }}
      >
        <h1>{titulo}</h1>

        <ItemList productos={productos} />
      </Box>
    </>
  );
}
