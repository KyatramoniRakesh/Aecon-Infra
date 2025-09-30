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

     

 
    </div>
  );
};

export default ServiceDetail;
