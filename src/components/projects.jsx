import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Smile",
      description:
        "A modern dental clinic website providing appointment booking, services overview, and patient-friendly information to ensure a healthy, confident smile.",
      languages: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
      demo: "https://smile.vercel.app/",
      code: "https://github.com/Chechep/smile",
      preview: "/smile.png",
    },
    {
      title: "Castor Oil Ecommerce",
      description:
        "A modern ecommerce platform for selling premium castor oil products with secure checkout and smooth user experience.",
      languages: ["React", "Flask", "Firebase"],
      demo: "https://essense-of-risin.vercel.app/",
      code: "https://github.com/Chechep/castor",
      preview: "/castor.png",
    },
    {
      title: "Communication App",
      description:
        "A real-time messaging app with secure chat, channels, and collaboration features.",
      languages: ["React", "Firebase", "TailwindCSS"],
      demo: "https://comms-pro.vercel.app/",
      code: "https://github.com/Chechep/comms",
      preview: "/comms-pro.png",
    },
    {
      title: "Freit Logistics System",
      description:
        "A full logistics and freight management platform for tracking shipments, managing deliveries, and handling client orders in real time.",
      languages: ["React", "Node.js", "MongoDB"],
      demo: "https://freit.vercel.app/",
      code: "https://github.com/Chechep/freit",
      preview: "/freit.png",
    },
    {
      title: "Scribbly Blog",
      description:
        "A lightweight CRUD blogging platform built to create, read, update, and delete posts.",
      languages: ["React", "TailwindCSS", "Vite"],
      demo: "https://scribb-ly.vercel.app/",
      code: "https://github.com/Chechep/scribbly",
      preview: "/scribbly.png",
    },
    {
      title: "KejaLink",
      description:
        "A modern property management and rent payment platform connecting tenants and landlords with ease.",
      languages: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
      demo: "https://keja-link.vercel.app/",
      code: "https://github.com/Chechep/Kejani",
      preview: "/kejalink.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto relative z-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="
              p-6 rounded-xl transition transform hover:-translate-y-2
              bg-white text-black shadow-md border border-slate-300 shadow-black/30
              dark:bg-black dark:text-white dark:shadow-lg dark:border-slate-800 dark:shadow-white/20
            "
          >
            {/* Preview */}
            {project.preview && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-lg mb-4
                             transition-transform duration-300 hover:scale-105"
                />
              </a>
            )}

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-center mb-4 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.languages.map((lang, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-gray-200 text-gray-800
                    dark:bg-slate-700 dark:text-slate-200
                  "
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
                className="
                  flex items-center gap-2 px-4 py-2 rounded-lg transition
                  bg-sky-500/10 text-sky-600 hover:bg-sky-500/20
                  dark:bg-sky-500/20 dark:text-teal-400 dark:hover:bg-sky-500/30
                "
              >
                <ExternalLink className="w-4 h-4" />
                 Demo
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 px-4 py-2 rounded-lg transition
                  bg-gray-200 text-gray-900 hover:bg-gray-300
                  dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-black
                "
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
