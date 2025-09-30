import "../../CSS/Pages/ServiceDetail.css";
import serviceData from "./ServicesData";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!service) {
    return (
      <div className="service-detail not-found">
        <h2>Service not found</h2>
        <Link to="/services" className="back-btn">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail">
      {/* HERO */}
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="overlay">
          <h1 data-aos="fade-up">{service.title}</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            {service.subtitle}
          </p>
          <nav className="breadcrumb" data-aos="fade-up" data-aos-delay="400">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> /{" "}
            {service.title}
          </nav>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="overview">
        <div className="overview-text" data-aos="fade-right">
          <h2>Overview</h2>
          <p>{service.overview}</p>
        </div>
        <div className="overview-img" data-aos="fade-left">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="offerings">
        <h2 data-aos="fade-up">What We Offer</h2>
        <div className="offering-cards">
          {service.offerings.map((item, index) => (
            <div
              key={index}
              className="offering-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="offering-icon">✨</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      {service.stats && (
        <section className="stats">
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className="stat-box"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>
      )}

      {/* PROJECTS */}
      {service.projects && (
        <section className="projects">
          <h2 data-aos="fade-up">Highlighted Projects</h2>
          <div className="project-grid">
            {service.projects.map((proj, index) => (
              <div
                key={index}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h3>{proj.name}</h3>
                <p>
                  📍 {proj.location} <br /> 👤 {proj.client}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta" data-aos="zoom-in">
        <h2>Looking for {service.title} expertise?</h2>
        <p>Let’s collaborate and bring your project to life.</p>
        <Link to="/contact" className="cta-btn">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetail;
