import React, { useState, useEffect } from 'react'
import { listaProductos } from '../utils/Productos';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {

    //Llamar a los productos
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        listaProductos()
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    //Seleccionar un producto para detalle
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos[0])
            }, 2000)
        })
    }

    const [item, setItem] = useState([])

    useEffect(() => {
        getItem()
            .then((res) => {
                setItem(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (

        <>
            <ItemDetail item = {item} />
        </>
    )
}