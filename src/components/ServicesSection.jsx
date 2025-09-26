import React from "react";
import "../CSS/ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Pre-Bid Services",
    description:
      "Feasibility studies, cost estimation, and project planning to support successful bids.",
    icon: "⚙️",
  },
  {
    id: 2,
    title: "Execution Services",
    description:
      "End-to-end EPC execution ensuring timely delivery, quality, and cost efficiency.",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Post-Commissioning & O&M",
    description:
      "Operations, maintenance, and long-term support for sustainable project performance.",
    icon: "🔧",
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
