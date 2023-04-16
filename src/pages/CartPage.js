import { useState } from "react";
import Products from "../components/Product/Products";
import ProductData from "../components/Product/ProductData";


function CartPage() {
  const [productList, setProductList] = useState(ProductData);
  
  

  const checkProduct = (id) => {
    setProductList(
      productList.map((product) =>
        product.inCart === id ? { ...product, inCart: product.inCart } : product
      )
    );
  };
  return (
    <div className="container">
      <h2>Items in Your Cart</h2>
      <Products canSearch = {false}
      productlist={productList}
      handleChecked={checkProduct}
        productList={productList}/>
    </div>
  );
}

export default CartPage;