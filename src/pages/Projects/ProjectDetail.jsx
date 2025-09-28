import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../CSS/Pages/ProjectDetails.css";

const projectData = {
  1: {
    title: "Water Treatment Plant",
    client: "XYZ Industries",
    location: "Chennai, India",
    status: "Completed",
    value: "₹120 Cr",
    duration: "18 Months",
    sector: "Water Solutions",
    img: "../../../public/images/projects/a.jpg",
    description:
      "AECON Infra successfully implemented a state-of-the-art Water Treatment Plant ensuring sustainable water reuse and compliance with environmental norms. The project reduced freshwater consumption by 60% and achieved Zero Liquid Discharge (ZLD).",
    gallery: [
      "../../../public/images/projects/a.jpg",
      "../../../public/images/projects/b.jpg",
      "../../../public/images/projects/c.jpg",
    ],
  },
  2: {
    title: "Metro Rail Construction",
    client: "Govt. of India",
    location: "Hyderabad",
    status: "Ongoing",
    value: "₹500 Cr",
    duration: "3 Years",
    sector: "Infrastructure",
    img: "../../../public/images/projects/b.jpg",
    description:
      "A landmark metro infrastructure project aimed at transforming urban mobility with sustainable design and advanced engineering solutions.",
    gallery: [
      "../../../public/images/projects/b.jpg",
      "../../../public/images/projects/d.jpg",
    ],
  },
  3: {
    title: "Smart City Development",
    client: "Urban Development Authority",
    location: "Mumbai",
    status: "Major",
    value: "₹800 Cr",
    duration: "5 Years",
    sector: "Urban Infrastructure",
    img: "../../../public/images/projects/c.jpg",
    description:
      "AECON Infra played a pivotal role in Smart City initiatives including digital infrastructure, sustainable water systems, and renewable energy integration.",
    gallery: [
      "../../../public/images/projects/c.jpg",
      "../../../public/images/projects/a.jpg",
    ],
  },
  4: {
    title: "Highway Infrastructure",
    client: "NHAI",
    location: "Delhi – Jaipur",
    status: "Completed",
    value: "₹300 Cr",
    duration: "2 Years",
    sector: "Transportation",
    img: "../../../public/images/projects/d.jpg",
    description:
      "AECON successfully executed a highway expansion project ensuring reduced travel time, improved safety, and durable road quality.",
    gallery: [
      "../../../public/images/projects/d.jpg",
      "../../../public/images/projects/b.jpg",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h2 style={{ textAlign: "center" }}>Project not found</h2>;

  return (
    <div className="project-detail-page">
      {/* Hero Banner */}
      <div
        className="project-detail-hero"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className="overlay">
          <h1>{project.title}</h1>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="project-detail-overview">
        <div><strong>Client:</strong> {project.client}</div>
        <div><strong>Location:</strong> {project.location}</div>
        <div><strong>Status:</strong> {project.status}</div>
        <div><strong>Value:</strong> {project.value}</div>
        <div><strong>Duration:</strong> {project.duration}</div>
        <div><strong>Sector:</strong> {project.sector}</div>
      </div>

      {/* Description */}
      <div className="project-detail-content">
        <h2>About this Project</h2>
        <p>{project.description}</p>
      </div>

      {/* Gallery */}
      <div className="project-detail-gallery">
        {project.gallery.map((img, i) => (
          <img key={i} src={img} alt={`${project.title} ${i}`} />
        ))}
      </div>

      {/* Back Button */}
      <div className="project-detail-back">
        <Link to="/projects">← Back to Projects</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
