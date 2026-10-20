import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";  // ✅ Add this
import "./CropProducts.css";
import Footer from "./Footer";

const cropProducts = [
  { id: 1, name: "Fungicide", image: "https://tse2.mm.bing.net/th/id/OIP.USCXV3XvW8Ey2Cgu3sP0JgHaHa", price: "₹350" },
  { id: 2, name: "Insecticide", image: "https://tse3.mm.bing.net/th/id/OIP.yD2nZ4MP9luWkQmzfP3nFQHaHa", price: "₹420" },
  { id: 3, name: "Herbicide", image: "https://th.bing.com/th/id/OIP.ICzXiHkKNlKvyWPkU-1vnwHaHa", price: "₹390" },
  { id: 4, name: "Plant Protector", image: "https://th.bing.com/th/id/OIP.0q95IEETLXZjCgA69Q6dDwHaEl", price: "₹299" },
  { id: 5, name: "Organic Spray", image: "https://ts2.mm.bing.net/th?id=OIP.doknBU6U26ocu87fb5I7vQHaGq", price: "₹460" },
  { id: 6, name: "Neem Extract", image: "https://www.bing.com/th?id=OPAC.zuMDlxJoGQi9bw474C474", price: "₹310" },
  { id: 7, name: "Biopesticide", image: "https://tse3.mm.bing.net/th/id/OIP._NijAiEXdiOXlzovmokmZwHaFj", price: "₹385" },
  { id: 8, name: "Crop Booster", image: "https://th.bing.com/th/id/OIP._bkWcA_XAlHHYW0dKgz4KwHaGq", price: "₹440" },
];

const CropProducts = () => {
  const sliderRef = useRef(null);
  const location = useLocation(); // ✅ Current URL path milega yaha se
  const isCropPage = location.pathname === "/CropProducts"; // ✅ Agar path CropProducts page hai

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <div className="crop-section">
      <div className="crop-header">
        <h2>Crop Products</h2>
        <a href="/CropProducts" className="show-all">Show All</a>
      </div>

      <div className="slider-container">
        <button className="nav-btn left" onClick={scrollLeft}><FaArrowLeft /></button>

        <div className="product-slider" ref={sliderRef}>
          {cropProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}><FaArrowRight /></button>
      </div>

      {isCropPage && <Footer />} {/* ✅ Footer sirf /CropProducts par */}
    </div>
  );
};

export default CropProducts;
