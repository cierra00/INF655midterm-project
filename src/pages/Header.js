import React from 'react'
import {NavLink} from 'react-router-dom';
import { BsCartFill, BsSearch } from "react-icons/bs";
import ProductData from '../components/Product/ProductData';

export default function Header(props) {
  const filteredData = ProductData.filter(product=> product.inCart == true);
  return (
    <>
    <header className="header">
      <h1>Welcome to My Online Shop</h1>
       
    </header>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/search"><BsSearch /></NavLink></li>
      </ul>
      
      <span>
      <NavLink to="/cart"><BsCartFill /> Cart Items {filteredData.length}</NavLink>
      </span>
    </nav>
   
    </>
  )
}
