import React from "react";
import { ExternalLink, Github } from "lucide-react";
import portfolioImg from "../assets/portfolio.png";
import commsImg from "../assets/comms-pro.png";
import castorImg from "../assets/castor.png";
import scribblyImg from "../assets/scribbly.png";
import inventoryImg from "../assets/inventory.png";
import kejalinkImg from "../assets/kejalink.png";
import freitImg from "../assets/freit.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal site showcasing my projects, skills, and experiences.",
      languages: ["React", "TailwindCSS", "Vite"],
      demo: "https://cheptiony.vercel.app/",
      code: "https://github.com/Chechep/cheptiony",
      preview: portfolioImg,
    },
    {
      title: "Communication App",
      description: "A real-time messaging app with secure chat, channels, and collaboration features.",
      languages: ["React", "Firebase", "TailwindCSS"],
      demo: "https://comms-pro.vercel.app/",
      code: "https://github.com/Chechep/comms",
      preview: commsImg,
    },
    {
      title: "Castor Oil Ecommerce",
      description: "A modern ecommerce platform for selling premium castor oil products with secure checkout and smooth user experience.",
      languages: ["React", "Flask", "Firebase"],
      demo: "https://essense-of-risin.vercel.app/",
      code: "https://github.com/Chechep/castor",
      preview: castorImg,
    },
    {
      title: "Scribbly Blog",
      description: "A lightweight CRUD blogging platform built to create, read, update, and delete posts.",
      languages: ["React", "TailwindCSS", "Vite"],
      demo: "https://scribb-ly.vercel.app/",
      code: "https://github.com/Chechep/scribbly",
      preview: scribblyImg,
    },
    {
      title: "Freit Logistics System",
      description: "A full logistics and freight management platform for tracking shipments, managing deliveries, and handling client orders in real time.",
      languages: ["React", "Node.js", "MongoDB"],
      demo: "https://freit.vercel.app/",
      code: "https://github.com/Chechep/freit",
      preview: freitImg,
    },
    {
      title: "Inventory Tracker Pro",
      description: "A web-based inventory management system for tracking stock levels, products, and transactions.",
      languages: ["React", "TailwindCSS", "Firebase"],
      demo: "https://inventory-tracker-pro.vercel.app/",
      code: "https://github.com/Chechep/inventory-tracker-pro",
      preview: inventoryImg,
    },
    {
      title: "KejaLink",
      description: "A modern property management and rent payment platform connecting tenants and landlords with ease.",
      languages: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
      demo: "https://keja-link.vercel.app/",
      code: "https://github.com/Chechep/Kejani",
      preview: kejalinkImg,
    },
  ];
  

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto relative z-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-800/50 rounded-xl shadow-lg hover:shadow-purple-500/20 transition transform hover:-translate-y-2"
          >
            {/* Project Preview */}
            {project.preview && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                />
              </a>
            )}

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>

            {/* Description */}
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
