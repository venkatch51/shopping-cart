import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = ({ id, productName, price, productImage }) => {
  let { addToCart, cartItems } = useContext(ShopContext);
  console.log(cartItems)
  const cartItemCount = cartItems[id];
  return (
    <div className="product" key={id}>
      <img src={productImage} alt={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <button
          className="addToCartBttn"
          onClick={() => 
            addToCart(id)
          }
        >
          Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
