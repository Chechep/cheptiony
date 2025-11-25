import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { THEMES } from "../theme";

export default function Hero({ theme }) {
  const names = ["Brian", "Cheptiony"];
  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    const typingSpeed = 200;
    const interval = setInterval(() => {
      const currentName = names[nameIndex];
      if (!deleting) {
        setDisplayedText(currentName.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
        if (letterIndex + 1 === currentName.length) setDeleting(true);
      } else {
        setDisplayedText(currentName.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);
        if (letterIndex - 1 === 0) {
          setDeleting(false);
          setNameIndex((prev) => (prev + 1) % names.length);
        }
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [letterIndex, deleting, nameIndex]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const accent = "text-teal-500 hover:text-teal-600";
  const buttonPrimary =
    "bg-teal-500 text-white hover:bg-teal-700 shadow-lg shadow-sky-500/30";
  const buttonSecondary =
    "border border-teal-500/70 text-teal-500 hover:bg-teal-300/10";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-20 animate-float">
      {/* Name Typing */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
        Get to know{" "}
        <span className="text-teal-500">
          {displayedText}
          <span
            className={`ml-1 inline-block ${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            |
          </span>
        </span>
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl opacity-80 mb-4">
        Based in Nairobi, Kenya, I am a passionate and dedicated full-stack web
        developer with strong skills in both frontend and backend development.
      </p>
      <p className="max-w-2xl text-lg  leading-relaxed mb-8">
        My focus is on crafting efficient, scalable and user-friendly applications <br />
        that merge creativity with functionality that solve world problems.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 mb-8">
        <a
          href="#projects"
          className={`px-6 py-3 rounded-full font-medium transition transform hover:scale-105 backdrop-blur ${buttonPrimary}`}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className={`px-6 py-3 rounded-full font-medium transition transform hover:scale-105 backdrop-blur ${buttonSecondary}`}
        >
          Let's Connect
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a
          href="https://wa.me/254790086093"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition text-3xl transform hover:scale-125 ${accent}`}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:cheptiony6@gmail.com"
          className={`transition text-2xl transform hover:scale-125 ${accent}`}
          aria-label="Email"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/Chechep"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition text-2xl transform hover:scale-125 ${accent}`}
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/cheptiony"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition text-2xl transform hover:scale-125 ${accent}`}
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
