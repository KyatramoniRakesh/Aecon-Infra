import React, { useState, useEffect } from "react";
import "../CSS/Pages/Services.css";
import { FaChevronDown, FaChevronUp, FaIndustry, FaWater, FaCogs, FaLeaf, FaBolt, FaFlask, FaRecycle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" data-aos="zoom-in">
        <div className="overlay">
          <h1>Our Services</h1>
          <p>Delivering End-to-End Project Solutions Across Industries</p>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro" data-aos="fade-up">
        <p>
          At AECON Infra Solutions, we specialize in providing comprehensive lifecycle 
          services that span Pre-Bid Consultancy, Project Execution, and Post-Commissioning 
          Support. With decades of expertise, we serve diverse industries including 
          Water, Power, Oil & Gas, Marine, Food, Pharma, Biotech, and more.
        </p>
        <div className="stats">
          <div><h2>50+</h2><p>Projects Completed</p></div>
          <div><h2>20+</h2><p>Years of Expertise</p></div>
          <div><h2>15+</h2><p>Industries Served</p></div>
        </div>
      </section>

      {/* Core Lifecycle Services */}
      <section className="service-block" data-aos="fade-right">
        <div className="service-text">
          <h2>Pre-Bid Services</h2>
          <p>
            We provide critical pre-bid support, including opportunity identification, 
            partnerships, cost estimation, and risk analysis.
          </p>
          <button onClick={() => toggleAccordion(1)}>
            Sub-Services {activeAccordion === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeAccordion === 1 && (
            <ul className="accordion-list">
              <li>Opportunity Identification & Marketing</li>
              <li>Liaison & JV Partnership Support</li>
              <li>Site Visits & Reporting</li>
              <li>Project Risk Analysis & Mitigation</li>
              <li>Site Route Studies</li>
              <li>Costing & Estimation</li>
            </ul>
          )}
        </div>
        <div className="service-image">
          <img src="../../../public/Images/Pre-Bid Services.jpg" alt="Pre-Bid Services" />
        </div>
      </section>

      <section className="service-block reverse" data-aos="fade-left">
        <div className="service-text">
          <h2>Contract Execution</h2>
          <p>
            From engineering to vendor management and legal support, we execute 
            projects with quality and precision.
          </p>
          <button onClick={() => toggleAccordion(2)}>
            Sub-Services {activeAccordion === 2 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeAccordion === 2 && (
            <ul className="accordion-list">
              <li>Engineering & Design</li>
              <li>Supply Chain & Vendor Management</li>
              <li>Contract Management</li>
              <li>Risk & Safety Management</li>
              <li>Automation Philosophy</li>
              <li>Commissioning & Testing</li>
              <li>Legal & Arbitration Support</li>
              <li>Civil Works Execution</li>
            </ul>
          )}
        </div>
        <div className="service-image">
          <img src="../../../public/Images/Contract Execution.jpg" alt="Contract Execution" />
        </div>
      </section>

      <section className="service-block" data-aos="fade-up">
        <div className="service-text">
          <h2>Post-Commissioning & O&M</h2>
          <p>
            We ensure smooth operations with spare management, logistics, and 
            operations & maintenance execution.
          </p>
          <button onClick={() => toggleAccordion(3)}>
            Sub-Services {activeAccordion === 3 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeAccordion === 3 && (
            <ul className="accordion-list">
              <li>O&M Manual Consolidation</li>
              <li>Spare Parts Management</li>
              <li>O&M Execution & Support</li>
              <li>Stores & Logistics Management</li>
            </ul>
          )}
        </div>
        <div className="service-image">
          <img src="../../../public/Images/Post-Commissioning & O&M.jpg" alt="O&M Services" />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-section" data-aos="fade-up">
        <h2>Industries & Sectors We Serve</h2>
        <div className="industries-grid">
          <div className="industry-card"><FaWater /><h3>Water & Wastewater</h3><p>Softener, DM, STP, ETP, Desalination, ZLD</p></div>
          <div className="industry-card"><FaIndustry /><h3>Marine & Civil Works</h3><p>Offshore pipelines, harbors, dams, infrastructure</p></div>
          <div className="industry-card"><FaBolt /><h3>Power Plants</h3><p>Diesel, Thermal, CHP/AHP, Electrical BOP</p></div>
          <div className="industry-card"><FaFlask /><h3>Refineries & Chemicals</h3><p>Maintenance, revamps, sulfuric/phosphoric plants</p></div>
          <div className="industry-card"><FaLeaf /><h3>Food & Biotech</h3><p>Starch, Glucose, Spirulina, Chlorella culture</p></div>
          <div className="industry-card"><FaCogs /><h3>Pharma</h3><p>API plants, fermentation-based projects</p></div>
        </div>
      </section>

      {/* Specialized Solutions */}
      <section className="specialized-section" data-aos="fade-up">
        <h2>Specialized Solutions</h2>
        <div className="specialized-grid">
          <div><FaLeaf /><p>Green Hydrogen</p></div>
          <div><FaRecycle /><p>Waste-to-Energy</p></div>
          <div><FaCogs /><p>Automation & Control</p></div>
          <div><FaIndustry /><p>Cross-Country Pipelines</p></div>
          <div><FaBolt /><p>Pelletization & Briquetting</p></div>
        </div>
      </section>


    </div>
  );
};

export default Services;
