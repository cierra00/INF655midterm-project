import React from "react";
import Card from '../shared/Card';
import { NavLink } from "react-router-dom";




export default function Product({
  id,
  name,
  description,
  price,
  imageSRC,
  imgAlt,
  inCart
  
}) {



  return (
   <>
   <NavLink to="/single">
   <Card>

      <div className="product">
        <img src={imageSRC} alt={imgAlt} />
      </div>

      <div
        >
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
      {inCart}
      <button   className="btn">Add To Cart</button>
    </Card>
    </NavLink>
    </>
  );
}
