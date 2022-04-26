import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeProvider, createTheme, Box } from "@mui/system";
import "../index.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  const count = cart.map((item) => item.count);

  const totalCount = count.reduce((ac, item) => ac + item, 0);

  const theme = createTheme({
    palette: {
      background: {
        main: "#000",
        light: "#fff",
        accent: "#0fd",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Link to={`/cart`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3>{totalCount}</h3>
          <ShoppingBagIcon
            sx={{
              color: "background.light",
              fontSize: 32,
              position: "relative",
              top: 15,
            }}
          />
        </Box>
      </Link>
    </ThemeProvider>
  );
}
