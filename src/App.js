import React from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemRoutes from "./routes/ItemRoutes";
import ProductPage from "./pages/ProductPage";
import SearchPage from "./pages/SearchPage";
import SingleProduct from "./pages/SingleProduct";


export default function App() {
  return(
    
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/single" element={< SingleProduct/>} />
    
    <Route path="*" element={<NotFound />} />
    </Routes>
   <Footer />
   </BrowserRouter>
   </>
  )
}

