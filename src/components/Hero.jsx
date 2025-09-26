import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Hero.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    title: "Building Sustainable Infrastructure",
    subtitle: "Innovative solutions for tomorrow's world",
    cta: "Explore Services",
    link: "/services",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    title: "Trusted EPC Contractors",
    subtitle: "Delivering excellence across industries",
    cta: "View Projects",
    link: "/projects",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "End-to-End Consultancy",
    subtitle: "From Pre-Bid to Commissioning & O&M",
    cta: "Get in Touch",
    link: "/contact",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle dot click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <Link to={slide.link} className="hero-btn">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
