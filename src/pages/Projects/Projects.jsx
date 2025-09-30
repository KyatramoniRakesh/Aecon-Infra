import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../CSS/Pages/Projects.css";
import ClientsSection from "../../components/ClientsSection";
import StatsSection from "../../components/StatsSection";

import Project1 from "../../Images/Projects/a.jpg";
import Project2 from "../../Images/Projects/b.jpg";
import Project3 from "../../Images/Projects/c.jpg";
import Project4 from "../../Images/Projects/d.jpg";
import Project5 from "../../Images/Projects/e.jpg";

import iws from "../../Images/Projects/iws.jpg";
import iws3 from "../../Images/Projects/iws3.jpg"
import temp from "../../Images/Projects/TEMP.jpg"
import tce from "../../Images/Projects/TCE.jpg"
import pcb from "../../Images/Projects/pcb.jpg"
import dp from "../../Images/Projects/dp.jpg"
import wd from "../../Images/Projects/wd.jpg"
import ba from "../../Images/Projects/ba.jpg"
import mld from "../../Images/Projects/mld.jpg"
import stp from "../../Images/Projects/stp.jpg"








const allProjects = [
  {
    id: 1,
    title: "Integrated Water Supply Projects – Maldives",
    category: "Completed",
    img: iws,
    location: "Maldives",
    badge: "Completed",
  },
  {
    id: 2,
    title: "Water Supply (6 Islands) – Maldives",
    category: "Completed",
    img: iws3,
    location: "Maldives",
    badge: "Completed",
  },
  {
    id: 3,
    title: "Treated Effluent Marine Piping – Ennore Creek",
    category: "Completed",
    img: temp,
    location: "Ennore, Chennai",
    badge: "Completed",
  },
  {
    id: 4,
    title: "Trenchless Crossings – Ennore",
    category: "Completed",
    img: tce,
    location: "Ennore, Chennai",
    badge: "Completed",
  },
  {
    id: 5,
    title: "PCB Construction – Buckingham Canal",
    category: "Completed",
    img: pcb,
    location: "Chennai",
    badge: "Completed",
  },
  {
    id: 6,
    title: "3x6.25 MLD SWRO Desalination Plant – Kakinada",
    category: "Ongoing",
    img: dp,
    location: "Kakinada, Andhra Pradesh",
    badge: "Ongoing",
  },
  {
    id: 7,
    title: "Water Distribution Network – Thiruvarur & Karur",
    category: "Ongoing",
    img: wd,
    location: "Tamil Nadu",
    badge: "Ongoing",
  },
  {
    id: 8,
    title: "Bhama Ashkhed Rising Main Project – PCMC",
    category: "Ongoing",
    img: ba,
    location: "Pune, Maharashtra",
    badge: "Ongoing",
  },
  {
    id: 9,
    title: "80 MLD STP Project – Tamil Nadu",
    category: "Ongoing",
    img: mld,
    location: "Tamil Nadu",
    badge: "Ongoing",
  },
  {
    id: 10,
    title: "127 MLD STP Civil Works – Pune",
    category: "Ongoing",
    img: stp,
    location: "Pune, Maharashtra",
    badge: "Ongoing",
  },
  {
    id: 11,
    title: "15 MLD SWRO Desalination Plants – Prefeasibility",
    category: "Ongoing",
    img: iws,
    location: "India (Coastal Regions)",
    badge: "Ongoing",
  },
];


const Projects = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <div className="proj-page">
      {/* Hero */}
      <section
        className="proj-hero"
        data-aos="fade-up"
        style={{ background: `url(${Project3}) no-repeat center/cover` }}
      >
        <div className="proj-overlay">
          <h1 data-aos="fade-down">Our Projects</h1>
          <p data-aos="zoom-in">Building tomorrow’s infrastructure today</p>
          <div className="proj-breadcrumb" data-aos="fade-up">
            <Link to="/">Home</Link> <span>›</span> Projects
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="proj-filters" data-aos="fade-up">
        {["All", "Ongoing", "Completed", "Major"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="proj-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="proj-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="proj-card-image">
              <img src={project.img} alt={project.title} />
              <span className={`proj-badge ${project.badge.toLowerCase()}`}>
                {project.badge}
              </span>
            </div>
            <div className="proj-info">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <Link to={`/projects/${project.id}`} className="proj-btn">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <StatsSection />

      {/* Featured Project */}
      <section className="proj-featured" data-aos="fade-right">
        <img src={Project3} alt="Featured Project" />
        <div className="proj-featured-info" data-aos="fade-left">
          <h2>Smart City Development – Visakhapatnam</h2>
          <p>
            A flagship urban infrastructure project integrating sustainable
            water management, waste treatment, and smart mobility solutions.
          </p>
          <Link to="/projects/3" className="proj-btn">
            View Details →
          </Link>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />
    </div>
  );
};

export default Projects;
