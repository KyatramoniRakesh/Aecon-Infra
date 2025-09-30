import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/IndustriesSection.css";

// SVG icons with gradient strokes
const icons = {
  water: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff3d3d" />
          <stop offset="100%" stopColor="#0044ff" />
        </linearGradient>
      </defs>
      <path d="M12 3C12 3 6 10 6 15a6 6 0 0012 0c0-5-6-12-6-12z" />
    </svg>
  ),
  marine: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  ),
  civil: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M12 4v6" />
    </svg>
  ),
  power: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M13 2L3 14h9v8l9-12h-9z" />
    </svg>
  ),
  hydrogen: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="8" cy="12" r="3" />
      <circle cx="16" cy="12" r="3" />
      <path d="M8 12h8" />
    </svg>
  ),
};

const industries = [
  {
    id: 1,
    title: "Water & Wastewater",
    description: "Advanced water treatment & desalination solutions.",
    icon: icons.water,
  },
  {
    id: 2,
    title: "Marine Works",
    description: "Ports, harbors, and offshore infrastructure projects.",
    icon: icons.marine,
  },
  {
    id: 3,
    title: "Civil Infrastructure",
    description: "Bridges, tunnels, and large-scale civil works.",
    icon: icons.civil,
  },
  {
    id: 4,
    title: "Power Plants",
    description: "Conventional & renewable energy project execution.",
    icon: icons.power,
  },
  {
    id: 5,
    title: "Green Hydrogen",
    description: "Sustainable hydrogen production & storage solutions.",
    icon: icons.hydrogen,
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
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="industry-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="industry-header">
                <h3>{industry.title}</h3>
                <span className="industry-icon">{industry.icon}</span>
              </div>
              <p>{industry.description}</p>
              <div className="card-underline"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
