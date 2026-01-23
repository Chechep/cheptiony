import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const names = ["Brian", "Cheptiony"];
  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  /* Typing Effect */
  useEffect(() => {
    const typingSpeed = 180;

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

  /* Cursor Blink */
  useEffect(() => {
    const cursorInterval = setInterval(
      () => setShowCursor((prev) => !prev),
      500
    );
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Floating Content */}
      <div className="relative z-20 flex flex-col items-center text-center animate-float [animation-duration:7s]">

        {/* Title */}
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

        {/* Description */}
        <p className="max-w-xl text-lg sm:text-xl opacity-80 mb-8 font-space">
          Based in Nairobi, Kenya, I am a passionate full-stack developer with
          skills equiped to build scalable, efficient and user-friendly applications
          that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-10">
          <a
            href="#projects"
            className="
              px-6 py-3 rounded-full font-medium
              bg-teal-500/90 text-white
              backdrop-blur-md
              shadow-xl shadow-teal-500/30
              transition transform hover:scale-105 hover:-translate-y-1
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download="BrianCheptiony-Resume.pdf"
            className="
              px-6 py-3 rounded-full font-medium
              border border-teal-500/70 text-teal-500
              backdrop-blur-md
              shadow-lg shadow-teal-500/10
              transition transform hover:scale-105 hover:-translate-y-1
            "
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 justify-center">
          <a
            href="https://wa.me/254790086093"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-teal-500 hover:text-teal-600 transition transform hover:scale-125 animate-float"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:cheptiony6@gmail.com"
            className="text-2xl text-teal-500 hover:text-teal-600 transition transform hover:scale-125 animate-float [animation-delay:1s]"
            aria-label="Email"
          >
            <Mail />
          </a>

          <a
            href="https://github.com/Chechep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-teal-500 hover:text-teal-600 transition transform hover:scale-125 animate-float [animation-delay:2s]"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://linkedin.com/in/cheptiony"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-teal-500 hover:text-teal-600 transition transform hover:scale-125 animate-float [animation-delay:3s]"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
