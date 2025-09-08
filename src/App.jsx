import React from "react";
import "./index.css";
import Header from "./components/header";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact";
import Projects from "./components/projects";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <section id="profile">
        <Profile />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
