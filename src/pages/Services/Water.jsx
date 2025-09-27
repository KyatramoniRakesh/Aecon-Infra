import React, { useEffect } from "react";
import "../../CSS/Pages/ServiceDetail.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Water = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="service-detail">
      {/* ✅ Keep Original Hero Banner (from your first code) */}
      <section className="service-hero water-hero">
        <div className="overlay">
          <h1>Water & Wastewater Treatment</h1>
          <p>
            Innovative solutions for sustainable water management, treatment, and reuse.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="service-intro" data-aos="fade-up">
        <p>
          <strong>AECON Infra Solutions</strong> is a trusted partner in delivering
          modern water and wastewater projects. From <em>industrial treatment plants</em>
          to <em>municipal water supply</em>, we ensure safe, efficient, and
          eco-friendly operations across all scales.
        </p>
      </section>

      {/* Key Offerings */}
      <section className="service-offerings" data-aos="fade-up">
        <h2>Our Key Offerings</h2>
        <div className="offerings-columns">
          <ul>
            <li>Softener & Demineralization Plants</li>
            <li>Sewage Treatment Plants (STP)</li>
            <li>Effluent Treatment Plants (ETP)</li>
          </ul>
          <ul>
            <li>Desalination Plants</li>
            <li>Zero Liquid Discharge (ZLD)</li>
            <li>Industrial Water Management</li>
          </ul>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="service-gallery" data-aos="fade-up">
        <h2>Project Highlights</h2>
        <div className="gallery-grid">
          <figure>
            <img src="https://images.unsplash.com/photo-1581090700227-4c4c5c8d22a6?auto=format&fit=crop&w=800&q=600" alt="STP Plant" />
            <figcaption>STP Plant Installation</figcaption>
          </figure>
          <figure>
            <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=600" alt="Water Treatment" />
            <figcaption>Advanced Treatment Units</figcaption>
          </figure>
          <figure>
            <img src="https://images.unsplash.com/photo-1562087920-0e1f79f73d8a?auto=format&fit=crop&w=800&q=600" alt="Industrial Water Solutions" />
            <figcaption>Industrial Water Solutions</figcaption>
          </figure>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose" data-aos="fade-up">
        <h2>Why Choose Us?</h2>
        <div className="why-box">
          <ul>
            <li>✔ Customized designs for industries & municipalities</li>
            <li>✔ Sustainable and cost-effective solutions</li>
            <li>✔ Complete lifecycle support from design to O&M</li>
            <li>✔ Trusted by leading clients across India</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta" data-aos="zoom-in">
        <h2>Looking for Water & Wastewater Solutions?</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Water;
