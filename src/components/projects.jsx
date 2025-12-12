import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { THEMES } from "../theme";
import commsImg from "../assets/comms-pro.png";
import castorImg from "../assets/castor.png";
import scribblyImg from "../assets/scribbly.png";
import inventoryImg from "../assets/inventory.png";
import kejalinkImg from "../assets/kejalink.png";
import freitImg from "../assets/freit.png";
import smileImg from "../assets/smile.png";

export default function Projects({ theme }) {
  const projects = [
    {
      title: "Smile",
      description:
        "A modern dental clinic website providing appointment booking, services overview, and patient-friendly information to ensure a healthy, confident smile.",
      languages: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
      demo: "https://smile.vercel.app/",
      code: "https://github.com/Chechep/smile",
      preview: smileImg,
    },
    {
      title: "Castor Oil Ecommerce",
      description:
        "A modern ecommerce platform for selling premium castor oil products with secure checkout and smooth user experience.",
      languages: ["React", "Flask", "Firebase"],
      demo: "https://essense-of-risin.vercel.app/",
      code: "https://github.com/Chechep/castor",
      preview: castorImg,
    },
    {
      title: "Communication App",
      description:
        "A real-time messaging app with secure chat, channels, and collaboration features.",
      languages: ["React", "Firebase", "TailwindCSS"],
      demo: "https://comms-pro.vercel.app/",
      code: "https://github.com/Chechep/comms",
      preview: commsImg,
    },
    {
      title: "Freit Logistics System",
      description:
        "A full logistics and freight management platform for tracking shipments, managing deliveries, and handling client orders in real time.",
      languages: ["React", "Node.js", "MongoDB"],
      demo: "https://freit.vercel.app/",
      code: "https://github.com/Chechep/freit",
      preview: freitImg,
    },
    {
      title: "Scribbly Blog",
      description:
        "A lightweight CRUD blogging platform built to create, read, update, and delete posts.",
      languages: ["React", "TailwindCSS", "Vite"],
      demo: "https://scribb-ly.vercel.app/",
      code: "https://github.com/Chechep/scribbly",
      preview: scribblyImg,
    },
    {
      title: "Inventory Tracker Pro",
      description:
        "A web-based inventory management system for tracking stock levels, products, and transactions.",
      languages: ["React", "TailwindCSS", "Firebase"],
      demo: "https://inventory-tracker-pro.vercel.app/",
      code: "https://github.com/Chechep/inventory-tracker-pro",
      preview: inventoryImg,
    },
    {
      title: "KejaLink",
      description:
        "A modern property management and rent payment platform connecting tenants and landlords with ease.",
      languages: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
      demo: "https://keja-link.vercel.app/",
      code: "https://github.com/Chechep/Kejani",
      preview: kejalinkImg,
    },
  ];

  const isWhite = theme === THEMES.WHITE;
  const cardBg = isWhite ? "bg-white" : "bg-white";
  const titleColor = isWhite ? "text-black" : "text-black";
  const descColor = isWhite ? "text-gray-800" : "text-gray-800";
  const badgeBg = isWhite ? "bg-gray-500 text-black" : "bg-slate-700 text-slate-200";
  const cardShadow = isWhite ? "shadow-md" : "shadow-lg";

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto relative z-20 animate-float"
    >
      <h2 className={`text-4xl font-bold text-center mb-10 ${titleColor}`}>
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl transition transform hover:-translate-y-2 ${cardBg} ${cardShadow}`}
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
            <h3 className={`text-2xl font-semibold mb-3 text-center ${titleColor}`}>
              {project.title}
            </h3>

            {/* Description */}
            <p className={`text-center mb-4 ${descColor}`}>{project.description}</p>

            {/* Languages */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full ${badgeBg}`}
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 justify-center">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isWhite
                    ? "bg-sky-500/10 text-gray-500 hover:bg-gray-500/20"
                    : "bg-sky-500/20 text-teal-400 hover:bg-sky-500/30"
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isWhite
                    ? "bg-gray-200 text-black hover:bg-gray-300"
                    : "bg-slate-700 text-slate-400 hover:bg-slate-600"
                }`}
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
