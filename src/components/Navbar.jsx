import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change or link click
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

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
          <Link to="/" onClick={closeMenu}>
            AECON INFRA
          </Link>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className={`dropdown ${
              activeDropdown === "services" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("services")}
            aria-haspopup="true"
            aria-expanded={activeDropdown === "services" ? "true" : "false"}
          >
            <span>
              Services <RiArrowDropDownLine className="nav-drop-icons" />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services" onClick={closeMenu}>
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services/pre-bid" onClick={closeMenu}>
                  Pre-Bid
                </Link>
              </li>
              <li>
                <Link to="/services/execution" onClick={closeMenu}>
                  Contract Execution
                </Link>
              </li>
              <li>
                <Link to="/services/o-m" onClick={closeMenu}>
                  O&amp;M
                </Link>
              </li>
              <li>
                <Link to="/services/water" onClick={closeMenu}>
                  Water &amp; Wastewater
                </Link>
              </li>
              <li>
                <Link to="/services/power" onClick={closeMenu}>
                  Power Plants
                </Link>
              </li>
              <li>
                <Link to="/services/pharma" onClick={closeMenu}>
                  Pharma &amp; Biotech
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          role="button"
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
