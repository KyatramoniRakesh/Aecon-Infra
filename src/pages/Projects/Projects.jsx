import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../CSS/Pages/Projects.css";

const allProjects = [
  {
    id: 1,
    title: "60 MLD Sewage Treatment Plant – Chennai",
    category: "Completed",
    img: "../../../public/images/projects/a.jpg",
    location: "Chennai, Tamil Nadu",
    badge: "Completed",
  },
  {
    id: 2,
    title: "Metro Rail Elevated Viaduct – Hyderabad",
    category: "Ongoing",
    img: "../../../public/images/projects/b.jpg",
    location: "Hyderabad, Telangana",
    badge: "Ongoing",
  },
  {
    id: 3,
    title: "Smart City Development – Visakhapatnam",
    category: "Major",
    img: "../../../public/images/projects/c.jpg",
    location: "Visakhapatnam, AP",
    badge: "Major",
  },
  {
    id: 4,
    title: "National Highway Expansion – NH16",
    category: "Completed",
    img: "../../../public/images/projects/d.jpg",
    location: "Andhra Pradesh",
    badge: "Completed",
  },
  {
    id: 5,
    title: "Industrial Effluent Treatment Plant – Gujarat",
    category: "Completed",
    img: "../../../public/images/projects/e.jpg",
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
      <section className="projects-hero" data-aos="fade-up">
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

      {/* Featured Project */}
      <section className="featured-project" data-aos="fade-right">
        <img
          src="../../../public/images/projects/c.jpg"
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

      {/* Statistics */}
      <section className="project-stats" data-aos="fade-up">
        <div>
          <h2>50+</h2>
          <p>Completed Projects</p>
        </div>
        <div>
          <h2>20+</h2>
          <p>Ongoing Projects</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Major Smart City Works</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Trusted Clients</p>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section" data-aos="zoom-in-up">
        <h2>Our Clients</h2>
        <div className="clients-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/L%26T_logo.png" alt="L&T" />
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Adani-logo.png" alt="Adani" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/GMR_Group_logo.png" alt="GMR" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/NHAI_logo.png" alt="NHAI" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Hyderabad_Metro_logo.png" alt="Hyderabad Metro" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
