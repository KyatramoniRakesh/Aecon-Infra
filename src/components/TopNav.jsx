import React from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../CSS/TopNav.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>
          <FaEnvelope className="topbar-icon" /> aeconinfra@gmail.com
        </span>
        <span className="divider">|</span>
        <span>
          <FaPhone className="topbar-icon" /> +91 9840014721
        </span>
      </div>

      <div className="topbar-right">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter  />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
