import React from 'react';
import './CategorySection.css'; // custom styling

const categories = [
  {
    name: "Fertilizers",
    image: "https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg",
  },
  {
    name: "Seeds",
    image :"https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg"
  },
  {
    name: "Pesticides",
    image: "https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg",
  },
  {
    name: "Tools",
    image: "https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg",
  },
  {
    name: "Seeds",
    image :"https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg"
  },
  {
    name: "Pesticides",
    image: "https://stardesign.in/wp-content/uploads/2024/07/Fertilizer-Packaging-Design-CDR-File-1-700x700.jpg",
  },
  
];

const CategorySection = () => {
  return (
    <div>
        <h1> Top Categories To Expolore </h1>
         <div className="category-container">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="category-card"
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <div className="category-overlay">
            <h3>{cat.name}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default CategorySection;
