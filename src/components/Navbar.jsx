import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            AECON INFRA
          </Link>
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          {/* Desktop dropdown */}
          {!isMobile && (
            <li className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span>
                Services <RiArrowDropDownLine className="nav-drop-icons" />
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <li><Link to="/services" onClick={closeMenu}>All Services</Link></li>
                <li><Link to="/services/pre-bid" onClick={closeMenu}>Pre-Bid</Link></li>
                <li><Link to="/services/execution" onClick={closeMenu}>Contract Execution</Link></li>
                <li><Link to="/services/o-m" onClick={closeMenu}>O&M</Link></li>
                <li><Link to="/services/water" onClick={closeMenu}>Water & Wastewater</Link></li>
                <li><Link to="/services/power" onClick={closeMenu}>Power Plants</Link></li>
                <li><Link to="/services/pharma" onClick={closeMenu}>Pharma & Biotech</Link></li>
              </ul>
            </li>
          )}
          {/* Mobile tap dropdown */}
          {isMobile && (
            <li className="dropdown"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <span>
                Services <RiArrowDropDownLine className="nav-drop-icons" />
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <li><Link to="/services" onClick={closeMenu}>All Services</Link></li>
                <li><Link to="/services/pre-bid" onClick={closeMenu}>Pre-Bid</Link></li>
                <li><Link to="/services/execution" onClick={closeMenu}>Contract Execution</Link></li>
                <li><Link to="/services/o-m" onClick={closeMenu}>O&M</Link></li>
                <li><Link to="/services/water" onClick={closeMenu}>Water & Wastewater</Link></li>
                <li><Link to="/services/power" onClick={closeMenu}>Power Plants</Link></li>
                <li><Link to="/services/pharma" onClick={closeMenu}>Pharma & Biotech</Link></li>
              </ul>
            </li>
          )}
          <li>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
