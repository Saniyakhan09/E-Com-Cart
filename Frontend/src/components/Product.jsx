import React, { useState, useRef } from "react";
import "./Product.css";

function ProductList({ products, addToCart }) {
  const scrollRef = useRef(null);

  const [added, setAdded] = useState({});

  const scroll = (dir) => {
    if (dir === "right") {
      scrollRef.current.scrollLeft += 300;
    } else {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",//laptop
    "img4.jpg",
    "mouse.jpg",
    "headphone.jpg",
    "chain.jpg",
    "watch.jpg",
    "phone.jpg",
    "tab.jpg",
    
  ];

  const handleAdd = (p) => {
  addToCart(p);

  setAdded((prev) => ({ ...prev, [p._id]: true }));
  setTimeout(() => {
    setAdded((prev) => ({ ...prev, [p._id]: false }));
  }, 1000);
};


  return (
    <div className="slider-container">

      <button className="slider-btn left" onClick={() => scroll("left")}>
        <span>‹</span>
      </button>

      <div className="product-slider" ref={scrollRef}>
        {products.map((p, index) => (
          <div className="product-card" key={p._id}>
            <img
              src={images[index % images.length]}
              alt={p.name}
              className="product-img"
            />
            <h3>{p.name}</h3>
            <p>${p.price}</p>

            <button
  className={`add-btn ${added[p._id] ? "added" : ""}`}
  onClick={() => handleAdd(p)}
>
  {added[p._id] ? "Added" : "Add to Cart"}
</button>


          </div>
        ))}
      </div>

      <button className="slider-btn right" onClick={() => scroll("right")}>
        <span>›</span>
      </button>

    </div>
  );
}

export default ProductList;
