import React from "react";
import "./cart.css";

function Cart({ cart, removeFromCart, onCheckout, showCart }) {
  const total = cart.reduce(
    (acc, item) => acc + (item.productId?.price || 0) * item.quantity,
    0
  );

  return (
    <div className={`cart-container ${showCart ? "active" : ""}`}>
      <div className="cart">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="cart-item">
              <span>{item.productId?.name}</span>
              <span>
                ${item.productId?.price} × {item.quantity}
              </span>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))
        )}

        <h3>Total: ${total}</h3>

        {cart.length > 0 && (
          <button type="button" className="checkout-btn" onClick={onCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
