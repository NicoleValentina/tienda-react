import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import CartForm from "./CartForm";

//Imports iconos MUI
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

//Imports tabla MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "../App.css";

export default function Cart() {
  const { cart, removeFromCart, clear } = useContext(CartContext);

  //Total items
  function totalProd(a, b) {
    const total = a * b;
    return total;
  }

  const H1 = styled("h1")``;

  return (
    <>
      <H1 sx={{ mx: 5 }}>Carro</H1>

      {cart.length == 0 ? (
        <Box
          sx={{
            mx: 5,
            my: 5,
            textAlign: "center",
          }}
        >
          <h2>No tienes productos en tu carro</h2>
          <Link to={`/`}>
            <Button variant="contained"> Agregar productos</Button>
          </Link>
        </Box>
      ) : (
        <Box
          sx={{
            mx: 5,
            my: 5,
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell></TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Eliminar</TableCell>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow className="itemCart" key={item.id}>
                    <TableCell>
                      <img src={item.imagen} />
                    </TableCell>
                    <TableCell>
                      <h3>{item.nombre}</h3>
                      <p className="itemCat">{item.categoria}</p>
                    </TableCell>
                    <TableCell>
                      <p>{item.count}</p>
                    </TableCell>
                    <TableCell>
                      <p>${item.precio}</p>
                    </TableCell>
                    <TableCell>
                      <p>${totalProd(item.count, item.precio)}</p>
                    </TableCell>
                    <TableCell>
                      <RemoveCircleOutlineIcon
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            className="vaciarCarro"
            endIcon={<DeleteIcon />}
            onClick={() => {
              clear();
            }}
          >
            Vaciar carro
          </Button>

          <Box>
            <CartForm />
          </Box>
        </Box>
      )}
    </>
  );
}
