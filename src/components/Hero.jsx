import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp logo

export default function Hero() {
  const names = ["Brian", "Cheptiony"];
  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    const typingSpeed = 150; // ms per letter

    const interval = setInterval(() => {
      const currentName = names[nameIndex];

      if (!deleting) {
        setDisplayedText(currentName.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentName.length) {
          setDeleting(true);
        }
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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-20">
      {/* Name Typing */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
        Get to know{" "}
        <span className="text-sky-400">
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

      {/* Description */}
      <p className="max-w-2xl text-lg sm:text-xl text-slate-300 mb-8">
        Based in Nairobi, Kenya, I am a passionate and dedicated full-stack web
        developer with strong skills in both frontend and backend development.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 mb-8">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-sky-600/80 hover:bg-sky-700/90 text-white font-medium transition backdrop-blur"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-sky-400/70 text-sky-300 hover:bg-sky-500/10 font-medium transition backdrop-blur"
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
          className="text-sky-400 hover:text-sky-600 transition text-3xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp /> {/* ✅ WhatsApp logo */}
        </a>
        <a
          href="mailto:cheptiony6@gmail.com"
          className="text-sky-400 hover:text-sky-600 transition text-2xl"
          aria-label="Email"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/Chechep"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-600 transition text-2xl"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/cheptiony"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-600 transition text-2xl"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
