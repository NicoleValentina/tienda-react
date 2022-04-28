import { doc, getDocs, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const productos = [
  {
    nombre: "Polerón",
    precio: "20.000",
    stock: "10",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906793/Productos/poleron_aadido.jpg",
    id: 1,
    categoria: "Mujer",
  },
  {
    nombre: "Pantalón",
    precio: "25.000",
    stock: "15",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906793/Productos/pantalon_rdv0sz.jpg",
    id: 2,
    categoria: "Mujer",
  },
  {
    nombre: "Beanie",
    precio: "10.000",
    stock: "8",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906792/Productos/beanie_sai2le.jpg",
    id: 3,
    categoria: "Accesorios",
  },
  {
    nombre: "Cortaviento",
    precio: "25.000",
    stock: "10",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906793/Productos/cortaviento_rqsbwz.webp",
    id: 4,
    categoria: "Mujer",
  },
  {
    nombre: "Banano",
    precio: "15.000",
    stock: "8",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906792/Productos/banano_sbzswr.jpg",
    id: 5,
    categoria: "Accesorios",
  },
  {
    nombre: "Polerón",
    precio: "30.000",
    stock: "12",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649907752/Productos/poleron-h_fxemso.webp",
    id: 6,
    categoria: "Hombre",
  },
  {
    nombre: "Shorts",
    precio: "22.000",
    stock: "10",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649907752/Productos/short-h_fkfoap.webp",
    id: 7,
    categoria: "Hombre",
  },
  {
    nombre: "Gorro Bucket",
    precio: "10.000",
    stock: "5",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906792/Productos/bucket_ghjnnd.webp",
    id: 8,
    categoria: "Accesorios",
  },
  {
    nombre: "Polera",
    precio: "15.000",
    stock: "20",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649907752/Productos/polera-h_vdu6kx.webp",
    id: 9,
    categoria: "Hombre",
  },
  {
    nombre: "Calcetines",
    precio: "7.500",
    stock: "10",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649908511/Productos/calcetines_baiayl.webp",
    id: 10,
    categoria: "Accesorios",
  },
  {
    nombre: "Peto",
    precio: "15.000",
    stock: "20",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649906792/Productos/peto_lxqq7u.webp",
    id: 11,
    categoria: "Mujer",
  },
  {
    nombre: "Pantalón",
    precio: "25.000",
    stock: "7",
    imagen:
      "https://res.cloudinary.com/test-store-nico/image/upload/v1649907752/Productos/jogger_kiwopo.webp",
    id: 12,
    categoria: "Hombre",
  },
];

//Exportar todos los productos
export const listaProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

//Exportar un producto para detalle
export const getItem = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos[n]);
    }, 2000);
  });
};

//Firebase
// export default function GetProductsFB() {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     const db = getFirestore();

//     const getProds = collection(db, "productos");

//     getDocs(getProds).then((snap) => {
//       setProductos(snap.docs.map((item) => ({ id: item.id, ...item.data() })));

//       if (category) {
//         let categorias = productos.filter(
//           (item) => item.categoria === category
//         );
//         setProductos(categorias);
//         setTitulo(category);
//       } else {
//         setProductos(productos);
//         setTitulo("Productos");
//       }
//     });
//   }, [category]);

//   console.log(productos);

//   return <></>;

