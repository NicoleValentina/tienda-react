import React, {useEffect, useState} from "react";
import ItemCount from './ItemCount'
import { Box } from '@mui/system';
import ItemList from './ItemList'
import '../App.css';


export default function ItemContainer({ stock }) {

  const [productos, setProductos] = useState([])

    useEffect (() => {

        const productos = new Promise ((resolve, reject) => {

                setTimeout(() => {
                    resolve(
                        [{
                            nombre: "Polerón",
                            precio: "20.0",
                            stock: "10",
                            imagen: "media/poleron.jpg",
                            id: "01",
                          },
                          {
                            nombre: "Pantalón",
                            precio: "25.0",
                            stock: "15",
                            imagen: "media/pantalon.jpg",
                            id: "02",
                          },
                          {
                            nombre: "Beanie",
                            precio: "10.0",
                            stock: "8",
                            imagen: "media/beanie.jpg",
                            id: "03",
                          },
                          {
                            nombre: "Cortaviento",
                            precio: "25.0",
                            stock: "10",
                            imagen: "media/cortaviento.jpg",
                            id: "08",
                          }
                        ]
                    )
                }, 2000)
        })

      
        productos.then((res) => {
            setProductos(res)
        })
        .catch((err) =>{
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

        <ItemList productos = {productos}/>
      </Box>
    </>
  );
}
