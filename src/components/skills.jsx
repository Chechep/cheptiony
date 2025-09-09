import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Python",
  "Django", "Flask", "Tailwind CSS", "Git", "GraphQL",
  "RESTful APIs", "PostgreSQL", "Firebase"
];

const Skills = () => (
  <section id="skills" className="py-12 px-6 bg-gray-100 dark:bg-black">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      Skills
    </h1>
    <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-300 dark:bg-black dark:text-white text-gray-900 font-semibold px-6 py-2 rounded-full text-sm transition-transform transform hover:scale-105 hover:bg-gray-400 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
