import React, { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import { CartContext } from "../../context/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateCheckoutHandler = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={navigateCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
