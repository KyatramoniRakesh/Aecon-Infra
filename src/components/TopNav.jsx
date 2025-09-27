import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../CSS/TopNav.css";

const Topbar = () => {
  return (
    <div className="bar">
      <div className="topbar">
        <div className="topbar-left">
          <span>
            <FaEnvelope className="topbar-icon" /> aeconinfra@gmail.com
          </span>
          <span className="divider">|</span>
          <span>
            <FaPhone className="topbar-icon" /> +91 9840014721
          </span>
          <span className="divider">|</span>
         
        </div>

        <div className="topbar-right">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social twitter">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social linkedin">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social facebook">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social youtube">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919840014721" target="_blank" rel="noopener noreferrer" className="social whatsapp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>

  );
};

export default Topbar;
