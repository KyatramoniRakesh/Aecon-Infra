import React from "react";
import { Link } from "react-router-dom";
import "../CSS/CTASection.css";

const CTASection = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2>Ready to start your project?</h2>
        <p>
          Partner with AECON Infra Solutions for sustainable, innovative, and
          reliable infrastructure projects.
        </p>
        <Link to="/contact" className="cta-btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
