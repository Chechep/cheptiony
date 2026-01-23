import React from "react";
import { THEMES } from "../theme";

import HtmlLogo from "../assets/logo/html5.png";
import CssLogo from "../assets/logo/css3.png";
import JsLogo from "../assets/logo/javascript.png";
import ReactLogo from "../assets/logo/react.png";
import NodeLogo from "../assets/logo/nodejs.png";
import PythonLogo from "../assets/logo/python.png";
import DjangoLogo from "../assets/logo/django.png";
import FlaskLogo from "../assets/logo/flask.png";
import TailwindLogo from "../assets/logo/tailwind.png";
import GitLogo from "../assets/logo/git.png";
import GraphQLLogo from "../assets/logo/graphql.png";
import SwaggerLogo from "../assets/logo/swagger.png";
import PostgreSQLLogo from "../assets/logo/postgresql.png";
import FirebaseLogo from "../assets/logo/firebase.png";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: HtmlLogo },
    { name: "CSS", icon: CssLogo },
    { name: "JavaScript", icon: JsLogo },
    { name: "React", icon: ReactLogo },
    { name: "Node.js", icon: NodeLogo },
    { name: "Python", icon: PythonLogo },
    { name: "Django", icon: DjangoLogo },
    { name: "Flask", icon: FlaskLogo },
    { name: "Tailwind CSS", icon: TailwindLogo },
    { name: "Git", icon: GitLogo },
    { name: "GraphQL", icon: GraphQLLogo },
    { name: "REST APIs", icon: SwaggerLogo },
    { name: "PostgreSQL", icon: PostgreSQLLogo },
    { name: "Firebase", icon: FirebaseLogo },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-5xl mx-auto relative z-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Expertise
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 flex items-center gap-3 rounded-xl
                       bg-white text-black shadow-md
                       dark:bg-gray-900 dark:text-white dark:shadow-lg
                       transition transform hover:scale-105"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

