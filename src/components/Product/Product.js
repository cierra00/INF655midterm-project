import React,{useEffect, useState} from "react";
import Card from '../shared/Card';
import { NavLink } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import ProductData from "./ProductData";




export default function Product({
  id,
  name,
  description,
  price,
  imageSRC,
  imgAlt,
  inCart,
  result,
  productList
  
}) {

const [addCart, setAddCart] = useState(ProductData);

 const location = useLocation();
  
  function handleAdd(e) {
    e.preventDefault()
   
   const filteredData = ProductData.filter(product=> e.target.id == product.id);
   setAddCart( filteredData[0].inCart = true)
 
}

function handleDel(e) {
  e.preventDefault()
 
 const filteredData = ProductData.filter(product=> e.target.id == product.id);
 console.log( filteredData[0].inCart)
//console.log(data.inCart)

}
  

  return (
   <>
   
   <Card>
   
      <div className="product">
        <img src={imageSRC} alt={imgAlt} />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
      <div
        className="text-display">
        {description}
      </div>
      <div
        className="text-display">
        ${price}.00 USD
      </div>
      
     {id}

      {location.pathname=== "/cart" ? 
      <form onSubmit={handleDel} >
        <button type="submit" id={id} className="btn">Delete Item</button></form> 
      
      :<form onSubmit={handleAdd} id={id}><button type="submit" className="btn">Add to Cart</button></form>}
      
    </Card>
    
    </>
  );
}
