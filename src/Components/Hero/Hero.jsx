import React from "react";
import "./Hero.css";
import primg from "../../assets/pimage.jpg";

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Hi, I'm Eliott</h1>
          <h2>Freelance UI/UX Designer & Frontend Developer</h2>
          <p>
            I design and build clean, simple, and fast websites.
            Focused on clear layout, great user experience, and accessible design.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>34+</strong>
              <span>Projects</span>
            </div>
            <div className="stat">
              <strong>21+</strong>
              <span>Clients</span>
            </div>
            <div className="stat">
              <strong>5 Years</strong>
              <span>Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-image-box">
          <img src={primg} alt="Eliott" />
        </div>
      </div>
    </section>
  );
}

export default Hero;