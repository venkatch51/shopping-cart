import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItemList = (props) => {
  let { id, productName, price, productImage } = props.data;
  let { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <h1>CartItems</h1>
      <div className="cartItem" key={id}>
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
          <div className="countHandler">
            <button onClick={() => addToCart(id)}>+</button>
            <input type="text" value={cartItems[id]} />
            <button onClick={() => removeFromCart(id)}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemList;
