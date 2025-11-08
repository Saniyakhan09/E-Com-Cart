import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data || data))
      .catch((err) => console.error("Error fetching products:", err));

    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/cart");
      const data = await res.json();
      setCart(data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };
  
  const addToCart = async (product) => {
  try {
    await fetch("http://localhost:3000/api/cart/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product._id, quantity: 1 }),
    });

    await fetchCart(); 
    setShowCart(true);

    setTimeout(() => setShowCart(false),10000);
 

  } catch (err) {
    console.error("Error adding to cart:", err);
  }
};


  const removeFromCart = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/delete/cart/${id}`, {
        method: "DELETE",
      });
      await fetchCart(); 
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  //  Checkout
  const handleCheckout = async (userData) => {
    try {
      const res = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userData),  

      });
      const data = await res.json();
      setReceipt(data.receipt);
      setShowCheckout(true);
    } catch (err) {
      console.error("Error during checkout:", err);
    }
  };

  return (
    <div className="app">
      <h1 className="gradient-text">Vibe Commerce — Mock E-Com Cart</h1>

      {!showCheckout ? (
        <>
          <Product products={products} addToCart={addToCart} />
         <Cart
  cart={cart}
  removeFromCart={removeFromCart}
  onCheckout={() => setShowCheckout(true)}
  showCart={showCart}
/>
        </>
      ) : (
        <Checkout onSubmit={handleCheckout} receipt={receipt} cart={cart} />
      )}
    </div>
  );
}

export default App;
