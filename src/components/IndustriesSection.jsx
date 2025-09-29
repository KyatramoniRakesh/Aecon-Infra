import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/IndustriesSection.css";

const industries = [
  {
    id: 1,
    title: "Water & Wastewater",
    description: "Advanced water treatment & desalination solutions.",
    icon: "💧",
  },
  {
    id: 2,
    title: "Marine Works",
    description: "Ports, harbors, and offshore infrastructure projects.",
    icon: "⚓",
  },
  {
    id: 3,
    title: "Civil Infrastructure",
    description: "Bridges, tunnels, and large-scale civil works.",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Power Plants",
    description: "Conventional & renewable energy project execution.",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Green Hydrogen",
    description: "Sustainable hydrogen production & storage solutions.",
    icon: "🌱",
  },
];

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="industries">
      <div className="industries-container">
        <h2 className="section-title" data-aos="fade-up">
          Sectors We Serve
        </h2>
        <div className="industries-grid" data-aos="fade-down">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="industry-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}

            >
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
