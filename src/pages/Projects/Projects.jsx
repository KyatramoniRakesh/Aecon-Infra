import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../CSS/Pages/Projects.css";
import ClientsSection from "../../components/ClientsSection";
import StatsSection from "../../components/StatsSection";


import ProjectsBanner from "../../Images/projects/a.jpg";
import Project1 from "../../Images/projects/a.jpg";
import Project2 from "../../Images/projects/b.jpg";
import Project3 from "../../Images/projects/c.jpg";
import Project4 from "../../Images/projects/d.jpg";
import Project5 from "../../Images/projects/e.jpg";




const allProjects = [
  {
    id: 1,
    title: "60 MLD Sewage Treatment Plant – Chennai",
    category: "Completed",
    img: Project1,
    location: "Chennai, Tamil Nadu",
    badge: "Completed",
  },
  {
    id: 2,
    title: "Metro Rail Elevated Viaduct – Hyderabad",
    category: "Ongoing",
    img: Project2,
    location: "Hyderabad, Telangana",
    badge: "Ongoing",
  },
  {
    id: 3,
    title: "Smart City Development – Visakhapatnam",
    category: "Major",
    img: Project3,
    location: "Visakhapatnam, AP",
    badge: "Major",
  },
  {
    id: 4,
    title: "National Highway Expansion – NH16",
    category: "Completed",
    img: Project4,
    location: "Andhra Pradesh",
    badge: "Completed",
  },
  {
    id: 5,
    title: "Industrial Effluent Treatment Plant – Gujarat",
    category: "Completed",
    img: Project5,
    location: "Vadodara, Gujarat",
    badge: "Completed",
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
    <div className="projects-page">
      {/* Hero */}
      <section className="projects-hero" data-aos="fade-up"
        style={{ background: `url(${ProjectsBanner}) no-repeat center/cover` }}>

        <div className="overlay">
          <h1 data-aos="fade-down">Our Projects</h1>
          <p data-aos="zoom-in">Building tomorrow’s infrastructure today</p>
          <div className="breadcrumb" data-aos="fade-up">
            <Link to="/">Home</Link> <span>›</span> Projects
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="projects-filters" data-aos="fade-up">
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
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // staggered animation
          >
            <div className="card-image">
              <img src={project.img} alt={project.title} />
              <span className={`badge ${project.badge.toLowerCase()}`}>
                {project.badge}
              </span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <Link to={`/projects/${project.id}`} className="view-btn">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <StatsSection />

      {/* Featured Project */}
      <section className="featured-project" data-aos="fade-right">
        <img
          src={Project3}
          alt="Featured Project"
        />
        <div className="featured-info" data-aos="fade-left">
          <h2>Smart City Development – Visakhapatnam</h2>
          <p>
            A flagship urban infrastructure project integrating sustainable
            water management, waste treatment, and smart mobility solutions.
          </p>
          <Link to="/projects/3" className="view-btn">
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
