import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const names = ["Brian", "Cheptiony"];
  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  /* Typing effect */
  useEffect(() => {
    const typingSpeed = 200;

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

  /* Cursor blink */
  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-20">
      {/* Name Typing */}
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 font-space">
        Get to know{" "}
        <span className="text-teal-500">
          {displayedText}
          <span
            className={`ml-1 inline-block transition-opacity ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          >
            |
          </span>
        </span>
      </h1>

      <p className="max-w-2xl text-lg sm:text-xl opacity-80 mb-4 font-space">
        Based in Nairobi, Kenya, I am a passionate and dedicated full-stack web
        developer with strong skills in both frontend and backend development.
      </p>

      <p className="max-w-2xl text-lg leading-relaxed mb-8 font-space">
        My focus is on crafting efficient, scalable and user-friendly
        applications <br />
        that merge creativity with functionality to solve real-world problems.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 mb-8">
        <a
          href="#projects"
          className="
            px-6 py-3 rounded-full font-medium transition transform hover:scale-105
            bg-teal-500 hover:bg-teal-700 text-white
            shadow-lg shadow-sky-500/30 backdrop-blur
          "
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download="BrianCheptiony-Resume.pdf"
          className="
            px-6 py-3 rounded-full font-medium transition transform hover:scale-105
            border border-teal-500/70 text-teal-500
            hover:bg-teal-300/10 backdrop-blur
          "
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center">
        <a
          href="https://wa.me/254790086093"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-3xl transition transform hover:scale-125
            text-teal-500 hover:text-teal-600
          "
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:cheptiony6@gmail.com"
          className="
            text-2xl transition transform hover:scale-125
            text-teal-500 hover:text-teal-600
          "
          aria-label="Email"
        >
          <Mail />
        </a>

        <a
          href="https://github.com/Chechep"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-2xl transition transform hover:scale-125
            text-teal-500 hover:text-teal-600
          "
          aria-label="GitHub"
        >
          <Github />
        </a>

        <a
          href="https://linkedin.com/in/cheptiony"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-2xl transition transform hover:scale-125
            text-teal-500 hover:text-teal-600
          "
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
