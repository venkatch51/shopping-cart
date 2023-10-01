import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItemList from "./CartItemList";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();
  let { cartItems, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  console.log(cartItems);
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="cart">
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItemList data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={handleNavigate}>continue Shopping</button>
          <button> Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Your cart is Empty</h1>
          <button onClick={handleNavigate}>Continue Shopping!</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
