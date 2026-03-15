import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

import laptop from "./assets/laptop.jpg";
import headphones from "./assets/headphones.jpg";
import smartwatch from "./assets/smartwatch.jpg";

function App() {
  return (
    <div className="app">
      <h1 className="heading">Product Card Component</h1>

      <div className="card-container">
        <ProductCard
          name="Laptop"
          price={60000}
          discountPrice={55000}
          inStock={true}
          image={laptop}
          rating={5}
        />

        <ProductCard
          name="Headphones"
          price={2500}
          discountPrice={2000}
          inStock={false}
          image={headphones}
          rating={4}
        />

        <ProductCard
          name="Smart Watch"
          price={5000}
          discountPrice={4500}
          inStock={true}
          image={smartwatch}
          rating={4}
        />
      </div>
    </div>
  );
}

export default App;