
import style from "./index.css"
// use ProductContextProvider for wrap 
import ProductContextProvider from "./context/ProductContextProvider"
import Store from "./components/Store"
import { Navigate, Route, Routes } from "react-router-dom"
import ProductsDtails from "./components/ProductsDtails";
import CartContextProvider, { CartContext } from "./context/CartContextProvider";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCarts";
import ShopCarts from "./components/ShopCarts";
import Fiture from "./components/Fiture";
import ModalOffer from "./components/ModalOffer";
import Footer from "../src/components/layout/Footer"
import { useEffect, useState } from "react";


function App() {




  return (

    <ProductContextProvider>
      <CartContextProvider>
        <div style={{minHeight:"85vh"}}>

          <Navbar />
          < ModalOffer />
          <Routes>
            <Route path="/products/:id" element={<ProductsDtails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/shopcart" element={<ShopCarts />} />
          </Routes>
        
        </div>
      </CartContextProvider>
      <Footer />
    </ProductContextProvider>


  );
}

export default App;
