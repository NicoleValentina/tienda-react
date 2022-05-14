import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderComplete from "./components/OrderComplete";


export default function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/finish-order" element={<OrderComplete />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}
