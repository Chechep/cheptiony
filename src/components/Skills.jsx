import React from "react";
import { Code, Database, GitBranch, Server, Cloud, Globe } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <Globe className="w-5 h-5 text-orange-400" /> },
    { name: "CSS", icon: <Globe className="w-5 h-5 text-blue-400" /> },
    { name: "JavaScript", icon: <Code className="w-5 h-5 text-yellow-400" /> },
    { name: "React", icon: <Code className="w-5 h-5 text-cyan-400" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5 text-green-500" /> },
    { name: "Python", icon: <Code className="w-5 h-5 text-yellow-300" /> },
    { name: "Django", icon: <Server className="w-5 h-5 text-green-400" /> },
    { name: "Flask", icon: <Server className="w-5 h-5 text-gray-300" /> },
    { name: "Tailwind CSS", icon: <Globe className="w-5 h-5 text-sky-400" /> },
    { name: "Git", icon: <GitBranch className="w-5 h-5 text-red-500" /> },
    { name: "GraphQL", icon: <Database className="w-5 h-5 text-pink-500" /> },
    { name: "RESTful APIs", icon: <Cloud className="w-5 h-5 text-indigo-400" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-500" /> },
    { name: "Firebase", icon: <Cloud className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto relative z-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 flex items-center gap-3 bg-slate-800/50 rounded-xl shadow hover:shadow-lg transition"
          >
            {skill.icon}
            <p className="text-lg font-medium text-slate-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
