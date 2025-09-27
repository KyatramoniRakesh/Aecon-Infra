import React from "react";
import "../CSS/Pages/ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay">
                    <h1>Contact Us</h1>
                    <p>
                        We’re here to answer your questions and discuss how we can work
                        together to create impactful projects.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-container">
                    {/* Left Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>
                            Reach us by phone, email, or visit our office. We’d love to
                            connect with you.
                        </p>

                        <div className="info-card">
                            <span>📍</span>
                            <div>
                                <h3>Office</h3>
                                <p>
                                    AL-202, New No.10, Santosh Apartments,
                                    <br />
                                    14th Main Road, Shanti Colony,
                                    <br />
                                    Anna Nagar, Chennai – 600040
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span>📞</span>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 9840014721</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <span>✉️</span>
                            <div>
                                <h3>Email</h3>
                                <p>aeconinfra@gmail.com</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Form */}
                    <div className="contact-form">
                        <h2>Send Us a Message</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" required />
                                <label>Your Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" required />
                                <label>Your Email</label>
                            </div>
                            <div className="form-group">
                                <input type="text" />
                                <label>Subject</label>
                            </div>
                            <div className="form-group">
                                <textarea rows="5" required></textarea>
                                <label>Your Message</label>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="contact-map">
                <iframe
                    title="AECON Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9044155499746!2d80.20199107454825!3d13.079790212498095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265befc6085cd%3A0x88d7fbc9a8cccda3!2sSanthosh%20Apartments%2C%20AL%20block%2C%20Anna%20Nagar!5e1!3m2!1sen!2sin!4v1758957887598!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>


        </div>
    );
};

export default ContactUs;
