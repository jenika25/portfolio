import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about section bg-alt" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A little bit about who I am and what I do.
          </p>
        </div>

        <div className="about-content">
          <p>
            I'm Jenika, a freelance designer and frontend developer based in Paris with 5 years of experience shipping digital products for startups, agencies, and scale-ups across Europe.
          </p>
          <p>
            I believe great interfaces are invisible — they get out of the user's way. My work is fast, accessible, and built to last. When I'm not coding, you'll find me hiking or hunting for a good espresso.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;