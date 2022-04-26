import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../App.css";

export default function Cart() {
  const { cart, removeFromCart, clear } = useContext(CartContext);

  const H1 = styled("h1")``;

  return (
    <>
      <H1 sx={{ mx: 5, }} >
        Carro
      </H1>

      {cart.length == 0 ? (
        <Box
          sx={{
            mx: 5,
            my: 5,
          }}
        >
          <h2>Tu carrito está vacío</h2>
          <Link to={`/`}>
            <Button variant="contained"> Agrega productos a tu carro</Button>
          </Link>
        </Box>
      ) : (
        <Box
          sx={{
            mx: 5,
            my: 5,
          }}
        >
          <Box
            className="itemHeader"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Imagen</p>
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Total</p>
          </Box>

          {cart.map((item) => (
            <Box
              className="itemCart"
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={item.imagen} />
              <h2>{item.nombre}</h2>
              <p>{item.count}</p>
              <p>{item.precio}</p>
              <p>{item.precio * item.count}</p>
              <RemoveCircleOutlineIcon
                onClick={() => {
                  removeFromCart(item.id);
                }}
              />
            </Box>
          ))}

          <Button
            onClick={() => {
              clear();
            }}
          >
            Vaciar carrito
          </Button>
        </Box>
      )}
    </>
  );
}
