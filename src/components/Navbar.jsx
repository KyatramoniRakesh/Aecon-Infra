import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">AECON INFRA</Link>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            <span>
              Services <RiArrowDropDownLine className="nav-drop-icons" />
            </span>
            <ul className="dropdown-menu">
              <li><Link to="/services" onClick={() => setIsOpen(false)}>All Services</Link></li>
              <li><Link to="/services/pre-bid" onClick={() => setIsOpen(false)}>Pre-Bid</Link></li>
              <li><Link to="/services/execution" onClick={() => setIsOpen(false)}>Contract Execution</Link></li>
              <li><Link to="/services/o-m" onClick={() => setIsOpen(false)}>O&M</Link></li>
              <li><Link to="/services/water" onClick={() => setIsOpen(false)}>Water & Wastewater</Link></li>
              <li><Link to="/services/power" onClick={() => setIsOpen(false)}>Power Plants</Link></li>
              <li><Link to="/services/pharma" onClick={() => setIsOpen(false)}>Pharma & Biotech</Link></li>
            </ul>
          </li>

          {/* Projects Link */}
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>


          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
