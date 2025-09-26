import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h3>AECON INFRA SOLUTIONS</h3>
          <p>
            Consultancy & EPC Contractors for Specialized Projects. <br />
            Delivering sustainable, reliable, and innovative solutions.
          </p>
        </div>

        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Pre-Bid Services</li>
            <li>Execution Services</li>
            <li>Post-Commissioning & O&M</li>
          </ul>
        </div>

        {/* Column 4: Industries */}
        <div className="footer-col">
          <h4>Industries</h4>
          <ul>
            <li>Water & Wastewater</li>
            <li>Marine Works</li>
            <li>Civil Infrastructure</li>
            <li>Power Plants</li>
            <li>Green Hydrogen</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AECON Infra Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
