import React from "react";
import { Link } from "react-router-dom";
//import products from "./productsData"; // Your product array

const products = [
  {
    id: 1,
    name: "Saaho TO-3251 Tomato Seeds",
    brand: "Syngenta",
    image: "image-url",
    price: 1049,
    oldPrice: 1525,
    discount: "31%",
    save: 476,
    sizeOptions: ["3500 seeds"],
    description: "High Yield Hybrid tomato seeds for better growth.",
    stock: 50,
    rating: 4.5
  },

];



function ProductList() {
    
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              ₹{product.price} <span className="old-price">₹{product.oldPrice}</span>
            </p>
            <p className="discount">{product.discount} OFF</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
