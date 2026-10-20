import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

import poiSalt from '../assets/poiSalt.png';
import grass from '../assets/grass.png';
import chemical from '../assets/chemical.png';

const slides = [
  {
    image: poiSalt,
    heading: 'Upto 60% Off',
    subheading: 'Premium Kitchen Garden Seeds',
    btnText: 'Order Now',
  },
  {
    image: grass,
    heading: 'Fresh Fertilizers',
    subheading: 'For Healthy Crops',
    btnText: 'Shop Fertilizers',
  },
  {
    image: chemical,
    heading: 'Organic Seeds',
    subheading: 'Boost Your Yield',
    btnText: 'Explore Seeds',
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 4000); // auto slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <h2>{slide.heading}</h2>
            <h1>{slide.subheading}</h1>
            <button className="cta-button">{slide.btnText}</button>
          </div>
        </div>
      ))}

      <button className="nav-button left" onClick={goToPrev}>&#10094;</button>
      <button className="nav-button right" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default HeroSlider;
