import React from 'react';
import './BrandSection.css';
import VNR from '../assets/VNR.png';
import Upl from '../assets/Upl.jpeg';
import synge from '../assets/synge.jpeg';
import seminis from '../assets/seminis.avif';
import fmc from '../assets/fmc.avif';
import dhanuka from '../assets/dhanuka.avif';
import iffco from '../assets/iffco.jpeg';



const brands = [
  { name: 'VNR', image: VNR },
  { name: 'UPL', image: Upl },
  { name: 'Syngenta', image: synge },
  { name: 'Seminis', image: seminis },
  { name: 'FMC', image: fmc },
  { name: 'Dhanuka', image: dhanuka },
  { name: 'iffco', image: iffco } // agar Bayer ki image nahi hai toh temporary use
];


const BrandSection = () => {
  return (
    <div className="brand-section">
      <h2>Shop by Brands</h2>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <div className="brand-logo" key={index}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
