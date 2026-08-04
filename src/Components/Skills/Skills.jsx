import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Figma",
    "UI/UX Design",
    "Git",
    "Responsive Web Design"
  ];

  return (
    <section className="skills section bg-alt" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="skills-container">
          {skillsList.map((skill, index) => (
            <div className="skill-badge" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;