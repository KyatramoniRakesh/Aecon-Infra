import React from "react";
import "../CSS/WhyChooseUs.css";

const points = [
  {
    id: 1,
    title: "Experienced Team",
    description: "Decades of combined expertise in engineering & project management.",
    icon: "👷‍♂️",
  },
  {
    id: 2,
    title: "On-Time Delivery",
    description: "Commitment to delivering projects within schedule & budget.",
    icon: "⏱️",
  },
  {
    id: 3,
    title: "Quality & Safety",
    description: "Adhering to international standards with strong safety practices.",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "Sustainability",
    description: "Promoting eco-friendly solutions and green technologies.",
    icon: "🌱",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us">
      <div className="why-us-container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-us-grid">
          {points.map((point) => (
            <div key={point.id} className="why-us-card">
              <div className="why-us-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
