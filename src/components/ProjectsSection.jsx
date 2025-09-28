import React from "react";
import "../CSS/ProjectsSection.css";

const projects = [
  {
    id: 1,
    title: "Maldives Water Supply",
    description: "Sustainable water infrastructure for island communities.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", 
  },
  {
    id: 2,
    title: "Ennore Port Expansion",
    description: "Marine works and port development for heavy cargo handling.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", 
  },
  {
    id: 3,
    title: "Hydrogen Pilot Plant",
    description: "Green hydrogen production for future energy needs.",
    image: "../../public/Images/Hydrogen Pilot Plant.jpg", 
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-btn">
          <button>View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
