import React from "react";
import { Link } from "react-router-dom";
import "../CSS/CTASection.css";

const CTASection = () => {
  return (
    <section className="cta1">
      <div className="cta-container">
        <h2>Partner with AECON Infra Solutions</h2>
        <p className="cta-subtext">
          Build sustainable, innovative, and reliable infrastructure projects 
          with our expertise and proven track record.
        </p>
        <p className="cta-note">Delivering excellence across industries</p>
        <h3 className="cta-price">Let’s Start Your Project</h3>
        <Link to="/contact" className="cta-btn">
          <span>Contact Us</span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
