import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ferti from '../assets/ferti.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ferti} alt="Logo" className="logo-img" />
        {/* <span className="brand-name">Shri Shivautar Chemical & Fertilizer</span> */}
      </div>
      <div className="nav-links">
      <Link to="/">Home</Link>
       <Link to="/CropProducts">CropProducts</Link>
        <Link to="/SeedsPage">SeedsPage</Link>
        <Link to="/chemicals">Chemicals</Link> 
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
