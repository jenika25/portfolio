import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            What I can help you build.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.
            </p>
          </div>

          <div className="service-card">
            <h3>Frontend Dev</h3>
            <p>
              Production-grade code with React and CSS. Pixel-perfect, fully responsive, SEO-friendly, and blazing fast.
            </p>
          </div>

          <div className="service-card">
            <h3>Landing Pages</h3>
            <p>
              High-converting pages for SaaS, apps, and personal brands. Designed to communicate value instantly and drive action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;