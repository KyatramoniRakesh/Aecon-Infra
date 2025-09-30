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
                <li><Link to="/services/feasibility" onClick={closeMenu}>Feasibility & DPR Studies</Link></li>
                <li><Link to="/services/pretender" onClick={closeMenu}>Pre-Tender Services</Link></li>
                <li><Link to="/services/posttender" onClick={closeMenu}>Post-Tender Services</Link></li>
                <li><Link to="/services/consultancy" onClick={closeMenu}>Consultancy Services</Link></li>
                <li><Link to="/services/epc" onClick={closeMenu}>EPC of Specialized Projects</Link></li>
                <li><Link to="/services/swro" onClick={closeMenu}>Specialized SWRO Studies</Link></li>
                <li><Link to="/services/pmc" onClick={closeMenu}>Project Management Consultancy</Link></li>
                <li><Link to="/services/business" onClick={closeMenu}>Profitability & Business Studies</Link></li>

              </ul>
            </li>
          )}
          {/* Mobile tap dropdown */}
          {isMobile && (
            <li
              className={`dropdown ${dropdownOpen ? "active" : ""}`}
              onClick={() => setDropdownOpen((open) => !open)}
            >
              <span>
                Services <RiArrowDropDownLine className="nav-drop-icons" />
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <li><Link to="/services" onClick={closeMenu}>All Services</Link></li>
                <li><Link to="/services/feasibility" onClick={closeMenu}>Feasibility & DPR Studies</Link></li>
                <li><Link to="/services/pretender" onClick={closeMenu}>Pre-Tender Services</Link></li>
                <li><Link to="/services/posttender" onClick={closeMenu}>Post-Tender Services</Link></li>
                <li><Link to="/services/consultancy" onClick={closeMenu}>Consultancy Services</Link></li>
                <li><Link to="/services/epc" onClick={closeMenu}>EPC of Specialized Projects</Link></li>
                <li><Link to="/services/swro" onClick={closeMenu}>Specialized SWRO Studies</Link></li>
                <li><Link to="/services/pmc" onClick={closeMenu}>Project Management Consultancy</Link></li>
                <li><Link to="/services/business" onClick={closeMenu}>Profitability & Business Studies</Link></li>
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
