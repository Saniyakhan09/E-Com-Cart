import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ onSubmit, cart, receipt }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [localReceipt, setLocalReceipt] = useState(receipt);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReceipt = {
      items: cart.map((item) => ({
        name: item.productId?.name,
        price: item.productId?.price,
        quantity: item.quantity,
      })),
      timestamp: Date.now(),
    };

    setLocalReceipt(newReceipt);
    onSubmit?.({ ...form, cart }); 
  };

  const total = localReceipt
    ? localReceipt.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    : 0;

  return (
    <div className="checkout-wrapper">
      {/* LEFT SIDE */}
      <form className="checkout-left" onSubmit={handleSubmit}>
        <h3 className="title">Contact</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* RIGHT SIDE */}
      <div className="checkout-right">
        {!localReceipt ? (
          <div className="summary-box">
            <h3 className="summary-title">Order Summary</h3>
            <p className="summary-line">
              Please fill your details to proceed.
            </p>
            <div className="total-box">
              <span>Total</span>
              <span className="total-amount">$0.00</span>
            </div>
          </div>
        ) : (
          <div className="summary-box">
            <h3 className="summary-title">Receipt</h3>

            <ul>
              {localReceipt.items.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {item.name} × {item.quantity} = ${item.price * item.quantity}
                </li>
              ))}
            </ul>

            <div className="total-box">
              <span>Total</span>
              <span className="total-amount">${total}</span>
            </div>

            <p style={{ marginTop: "15px", color: "#666" }}>
              Time: {new Date(localReceipt.timestamp).toLocaleString()}
            </p>
            <p style={{ marginTop: "10px" }}>
              Thank you, <strong>{form.name}</strong>!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
