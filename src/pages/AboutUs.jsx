import React from "react";
import "../CSS/Pages/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Engineering sustainable solutions for tomorrow’s infrastructure.</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="about-intro">
        <div className="about-intro-container">
          <div className="about-intro-text">
            <h2>Who We Are</h2>
            <p>
              Founded in 2018, <strong>AECON Infra Solutions</strong> is a leading
              consultancy and EPC contractor with expertise in water, marine, civil,
              power, and renewable energy projects. We combine <em>innovation</em>,
              <em> sustainability</em>, and <em>engineering excellence</em> to deliver
              projects that create long-lasting impact.
            </p>
            <p>
              Our multidisciplinary team brings years of experience in project
              management, technical consultancy, and end-to-end execution, ensuring
              we consistently deliver quality infrastructure solutions worldwide.
            </p>
          </div>
          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="Company Infrastructure"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
            To deliver world-class infrastructure solutions through sustainable
            engineering, technical innovation, and client-focused values.
          </p>
        </div>
        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
            To be recognized globally as a trusted partner in engineering &
            project execution, creating a positive impact on society and the
            environment.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <span>🌍</span>
            <h4>Sustainability</h4>
            <p>Promoting eco-friendly & future-ready solutions.</p>
          </div>
          <div className="value-item">
            <span>🤝</span>
            <h4>Integrity</h4>
            <p>Ethical, transparent, and reliable practices.</p>
          </div>
          <div className="value-item">
            <span>⚡</span>
            <h4>Innovation</h4>
            <p>Constantly pushing boundaries of technology & design.</p>
          </div>
          <div className="value-item">
            <span>🛡️</span>
            <h4>Safety</h4>
            <p>Ensuring safe practices for people and communities.</p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="about-timeline">
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>2018</h4>
              <p>Founded AECON Infra Solutions with a focus on water projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>2020</h4>
              <p>Expanded into marine works & civil infrastructure projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>2022</h4>
              <p>Ventured into renewable energy & green hydrogen solutions.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>2025</h4>
              <p>Recognized as a trusted partner across 10+ industries worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <h2 className="section-title">Our Leadership</h2>
        <div className="leaders-grid">
          <div className="leader-card">
            <img
              src="https://dummyimage.com/220x220/0A1F44/fff&text=CEO"
              alt="CEO"
            />
            <h4>Amit Upagade</h4>
            <p>Founder</p>
          </div>
          <div className="leader-card">
            <img
              src="https://dummyimage.com/220x220/FFB400/fff&text=CTO"
              alt="CTO"
            />
            <h4>Name</h4>
            <p>Chief Technical Officer</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <h2>Want to collaborate with us?</h2>
        <p>
          Let’s build sustainable infrastructure together. Explore our services or
          get in touch with us today.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
