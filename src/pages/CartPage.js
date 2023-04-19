import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";


function CartPage() {
  const [productList, setProductList] = useState(ProductData);
  
  

  
  return (
    <div className="container">
      <h2>Items in Your Cart</h2>
      <Products canSearch = {false}
      productList={productList}/>
    </div>
  );
}

export default CartPage;