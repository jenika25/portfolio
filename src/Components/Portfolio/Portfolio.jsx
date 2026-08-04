import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project 1 - SaaS Dashboard",
      description: "A clean dashboard interface for monitoring analytics and managing data.",
      tag: "React & CSS"
    },
    {
      id: 2,
      title: "Project 2 - Mobile UI Concept",
      description: "A modern mobile app layout focused on clean typography and smooth flow.",
      tag: "Figma UI/UX"
    },
    {
      id: 3,
      title: "Project 3 - Landing Page",
      description: "A fast, responsive landing page designed to communicate key product features.",
      tag: "Frontend Dev"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Some of my recent work.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-placeholder">
                <span>{project.title}</span>
              </div>
              <div className="project-info">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;