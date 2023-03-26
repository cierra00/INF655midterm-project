import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";


function HomePage() {
  const [productList, setProductList] = useState(ProductData);
  
  

  const checkProduct = (id) => {
    setProductList(
      productList.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };
  return (
    <div className="container">
      <h1>Welcome to Item Manager</h1>
      <Products
        productList={productList}/>
    </div>
  );
}

export default HomePage;