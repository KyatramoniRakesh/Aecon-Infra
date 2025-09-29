import React from "react";
import "../CSS/AboutUsSection.css";
import aeconImg from "../Images/AECON Infra Solutions.jpg";
const AboutUsSection = () => {
  return (
    <section className="about-us-preview">
        <h2 className="section-title">About Us</h2>
      <div className="about-us-container">
        <div className="about-us-image">
          <img 
            src= {aeconImg}
            alt="About AECON Infra"
          />
        </div>
        <div className="about-us-text">
          <h2>About AECON Infra Solutions</h2>
          <p>
            Founded in 2018, AECON Infra Solutions is a leading Consultancy & EPC contractor 
            specializing in water, marine, civil infrastructure, and green energy projects. We 
            believe in delivering sustainable, reliable, and innovative solutions to meet the  
            evolving needs of our clients.
          </p>
          <p>
            Our team brings together years of expertise, commitment to quality, and a passion  
            for engineering excellence. From project inception to commissioning & operation,  
            we manage every phase with transparency, safety, and technical rigor.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
