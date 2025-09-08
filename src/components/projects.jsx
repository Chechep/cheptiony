import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Tailwind CSS, and Vite. Includes dark mode, responsive design, and smooth navigation.",
    image: "/images/cheptiony.png",
    link: "https://cheptiony.vercel.app/",
    github: "https://github.com/Chechep/cheptiony",
  },
  {
    title: "Ticketing App",
    description:
      "An event ticketing platform that allows users to browse events, book tickets, and manage reservations. Built using React, Firebase, and Tailwind CSS, with responsive UI and smooth navigation.",
    image: "/images/maticko.png",
    link: "https://maticko-psi.vercel.app/",
    github: "https://github.com/Chechep/maticko",
  },
];

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Hover Preview (iframe) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full border-none"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 relative z-10 bg-gray-200 dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Buttons Below */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
