import React from 'react';
import './Footer.css';
import ferti from '../assets/ferti.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section">
        <img src={ferti} alt="Logo" className="logo-img" />
          <p className="footer-subtitle">Fertilizer and Chemical Shop</p>
          <p>Providing quality products to empower farmers and agriculture.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3>Top Categories</h3>
          <ul>
            <li><a href="#">Fertilizers</a></li>
            <li><a href="#">Seeds</a></li>
            <li><a href="#">Chemicals</a></li>
            <li><a href="#">Tools</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +91-9999876567</p>
          <p>📧 hellosweety@gmail.com</p>
          <p>📍 Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shri Shivautar Fertilizer and Chemical Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
