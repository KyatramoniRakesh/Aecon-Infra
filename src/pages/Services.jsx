import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Pages/Services.css";
import {
  FaProjectDiagram,
  FaClipboardList,
  FaCogs,
  FaWater,
  FaIndustry,
  FaSearch,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

const servicesData = [
  {
    id: "feasibility",
    title: "Feasibility & DPR Studies",
    icon: <FaSearch />,
    desc: "Comprehensive feasibility analysis and DPRs for water, wastewater, and desalination projects.",
    image:
      "https://plus.unsplash.com/premium_photo-1661610778702-371e7bd35cac?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pretender",
    title: "Pre-Tender Services",
    icon: <FaClipboardList />,
    desc: "Strategic pre-bid planning, partner identification, and proposal support.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "posttender",
    title: "Post-Tender Services",
    icon: <FaProjectDiagram />,
    desc: "Full project management consultancy after award of contract.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "consultancy",
    title: "Consultancy Services",
    icon: <FaCogs />,
    desc: "Specialized consultancy for marine works, trenchless crossings, and desal plants.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "epc",
    title: "EPC of Specialized Projects",
    icon: <FaIndustry />,
    desc: "Engineering, procurement, and construction of desalination and treatment plants.",
    image:
      "https://images.unsplash.com/photo-1665564807063-d306ea1d7876?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEVQQyUyMG9mJTIwU3BlY2lhbGl6ZWQlMjBQcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: "swro",
    title: "Specialized SWRO Studies",
    icon: <FaWater />,
    desc: "Detailed studies and designs for seawater reverse osmosis projects.",
    image:
      "https://plus.unsplash.com/premium_photo-1745056197520-50c8a6bb9f64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pmc",
    title: "Project Management Consultancy",
    icon: <FaTools />,
    desc: "Monitoring, review, and optimization of projects from start to finish.",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "business",
    title: "Profitability & Business Studies",
    icon: <FaChartLine />,
    desc: "Business case development, compliance, costing, and project viability analysis.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero" >
        <h1>Our Services</h1>
        <p>
          With decades of expertise, we deliver consulting, EPC, and project
          management solutions for large-scale water and infrastructure
          projects.
        </p>
      </section>

      {/* Grid */}
      <section className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/services/${service.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
