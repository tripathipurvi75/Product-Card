import React from "react";

function ProductCard({
  name,
  price,
  discountPrice,
  inStock,
  image,
  rating,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h2 className="product-name">{name}</h2>

        <div className="rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        <div className="price-section">
          <span className="old-price">₹{price}</span>
          <span className="product-price"> ₹{discountPrice}</span>
        </div>

        <p className={`stock-status ${inStock ? "in" : "out"}`}>
          {inStock ? "In Stock" : "Out of Stock"}
        </p>

        <button className="cart-btn" disabled={!inStock}>
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;