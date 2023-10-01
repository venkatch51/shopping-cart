import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  console.log(PRODUCTS);
  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>ShopPage</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            id={product.id}
            productName={product.productName}
            price={product.price}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
