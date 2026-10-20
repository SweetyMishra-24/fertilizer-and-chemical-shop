import React from "react";
import "./PopularProducts.css";
import poiSalt from '../assets/poiSalt.png';
const products = [
  {
    id: 1,
    name: "Organic Fertilizer",
    image: poiSalt,
  },
  {
    id: 2,
    name: "Pesticide Control",
    image: "https://images.unsplash.com/photo-1598533895113-6e4b6834e8b9",
  },
  {
    id: 3,
    name: "High Yield Seeds",
    image: "https://images.unsplash.com/photo-1586953208448-11b4c6f7024a",
  },
  {
    id: 4,
    name: "Soil Conditioner",
    image: "https://images.unsplash.com/photo-1551218372-99e1cdddf85e",
  },
  {
    id: 5,
    name: "Plant Booster",
    image: "https://images.unsplash.com/photo-1592833153216-e7ed7b8fd926",
  },
];

const PopularProducts = () => {
  return (
    <div className="popular-container">
  <h2>Popular Products</h2>
  <div className="slider-wrapper">
    <div className="slider">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <button className="show-btn">Show Me</button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default PopularProducts;
