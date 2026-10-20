// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          Seeds ▾
          <ul className="dropdown">
            <li>Vegetable Seeds</li>
            <li>Fruit Seeds</li>
            <li>Herbal Seeds</li>
          </ul>
        </li>
        <li className="nav-item">
          Crop Protection ▾
          <ul className="dropdown">
            <li>Pesticides</li>
            <li>Fungicides</li>
            <li>Herbicides</li>
          </ul>
        </li>
        <li className="nav-item">
          Crop Nutrition ▾
          <ul className="dropdown">
            <li>Fertilizers</li>
            <li>Micro Nutrients</li>
            <li>Bio Products</li>
          </ul>
        </li>
        <li className="nav-item">
          Farming Tools ▾
          <ul className="dropdown">
            <li>Sprayers</li>
            <li>Hand Tools</li>
            <li>Machinery</li>
          </ul>
        </li>
        <li className="nav-item">
          Plant ▾
          <ul className="dropdown">
            <li>Sprayers</li>
            <li>Hand Tools</li>
            <li>Machinery</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
