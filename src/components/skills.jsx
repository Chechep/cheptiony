import React from "react";
import "./skills.css"; // Import CSS for styling

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", 
    "Django", "Flask", "Tailwind CSS", "Git", "GraphQL", 
    "RESTful APIs", "PostgreSQL", "Firebase"
  ];

const Skills = () => (
  <>
    <h1>Skills</h1>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </>
);

export default Skills;