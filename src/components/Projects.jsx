import React from "react";
import { Globe, ShoppingCart, Wallet, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal site showcasing my projects and skills.",
      languages: ["React", "TailwindCSS", "Vite"],
      demo: "https://your-portfolio-demo.com",
      code: "https://github.com/yourusername/portfolio",
      icon: <Globe className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "E-Commerce App",
      description: "Full-stack app with product listings, cart, and checkout.",
      languages: ["React", "Firebase", "TailwindCSS"],
      demo: "https://your-ecommerce-demo.com",
      code: "https://github.com/yourusername/ecommerce-app",
      icon: <ShoppingCart className="w-10 h-10 text-pink-400" />,
    },
    {
      title: "Budget Tracker",
      description: "Track expenses, income, and visualize spending habits.",
      languages: ["React", "Flask", "PostgreSQL"],
      demo: "https://your-budget-demo.com",
      code: "https://github.com/yourusername/budget-tracker",
      icon: <Wallet className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto relative z-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-2"
          >
            <div className="mb-4 flex items-center justify-center">
              {project.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-4">{project.description}</p>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-slate-700 text-slate-200 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 text-sky-400 rounded-lg hover:bg-sky-500/30 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-200 rounded-lg hover:bg-slate-600 transition"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
