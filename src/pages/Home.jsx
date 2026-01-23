import React from "react";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skills.jsx";
import Services from "../components/Services.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}