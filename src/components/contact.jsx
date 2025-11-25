import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Toast from "./Toast";
import { THEMES } from "../theme";

const icons = [
  { name: "WhatsApp", component: <FaWhatsapp />, href: "https://wa.me/254790086093", delay: "0s" },
  { name: "Email", component: <Mail />, href: "mailto:cheptiony6@gmail.com", delay: "3s" },
  { name: "GitHub", component: <Github />, href: "https://github.com/Chechep", delay: "6s" },
  { name: "LinkedIn", component: <Linkedin />, href: "https://linkedin.com/in/cheptiony", delay: "9s" },
];

const Contact = ({ theme }) => {
  const [loading, setLoading] = useState(false);
  const [activeIcon, setActiveIcon] = useState(icons[0]);
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qlo57hg",
        "template_wrgr2gl",
        e.target,
        "9ecYH6LPP5bIj5OMT"
      )
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setToast({ message: "Message sent successfully ✅", type: "success" });
        e.target.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setToast({ message: "Something went wrong ❌", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  const cardClasses =
  theme === THEMES.DARK
    ? "bg-white text-white border-teal-700"
    : "bg-black text-black border-teal-700";

const inputClasses = (isTextarea = false) =>
`w-full p-3 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-teal-400 ${
  theme === THEMES.DARK
    ? "bg-black text-teal-500 border border-slate-700 placeholder-gray-500"
    : "bg-white text-black border border-slate-300 placeholder-gray-500"
} ${isTextarea ? "resize-none" : ""}`;


  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 animate-float"
    >
      {/* Orbiting Social Icons */}
      <div className="relative w-[300px] h-[300px] mb-8 flex items-center justify-center">
        <div className="absolute w-[220px] h-[220px] rounded-full border border-teal-500/30"></div>
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className="absolute top-1/2 left-1/2 animate-orbit"
            style={{ animationDelay: icon.delay }}
            onAnimationIteration={() => setActiveIcon(icon)}
          >
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl hover:scale-125 transition hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] ${
                theme === THEMES.DARK ? "text-teal-500 hover:text-teal-700" : "text-teal-500 hover:text-teal-700"
              }`}
            >
              {icon.component}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Active Button */}
      <div className="mb-12">
        <a
          href={activeIcon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-teal-500 hover:bg-teal-700 text-white shadow-[0_0_10px_rgba(56,189,248,0.6)]"
        >
          {activeIcon.component}
          <span>{activeIcon.name}</span>
        </a>
      </div>

      {/* Call Button */}
      <div className="text-center mb-12">
        <p className="mb-4">Give me a quick call</p>
        <a
          href="tel:+254790086093"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium bg-teal-500 hover:bg-teal-700 text-white shadow-[0_0_10px_rgba(56,189,248,0.6)]"
        >
          <Phone /> +254 790 086 093
        </a>
      </div>

      {/* Contact Form */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>
      <div className="w-full max-w-3xl">
        <form
          onSubmit={sendEmail}
          className={`p-6 rounded-xl backdrop-blur-md space-y-4 animate-float transition-all duration-500 ${cardClasses}`}
        >
          <input type="text" name="user_name" placeholder="Your Name" required className={inputClasses()} />
          <input type="email" name="user_email" placeholder="Your Email" required className={inputClasses()} />
          <textarea name="message" placeholder="Your Message" rows="5" required className={inputClasses(true)} />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold bg-teal-500 hover:bg-teal-700 text-white shadow-[0_0_10px_rgba(56,189,248,0.6)]"
          >
            {loading ? <Loader2 className="animate-spin-slow" /> : <Send />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
