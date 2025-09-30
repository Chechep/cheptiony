// src/components/Contact.jsx
import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const icons = [
  {
    name: "WhatsApp",
    component: <FaWhatsapp />,
    href: "https://wa.me/254790086093",
    delay: "0s",
  },
  {
    name: "Email",
    component: <Mail />,
    href: "mailto:cheptiony6@gmail.com",
    delay: "3s",
  },
  {
    name: "GitHub",
    component: <Github />,
    href: "https://github.com/Chechep",
    delay: "6s",
  },
  {
    name: "LinkedIn",
    component: <Linkedin />,
    href: "https://linkedin.com/in/cheptiony",
    delay: "9s",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [activeIcon, setActiveIcon] = useState(icons[0]); // default WhatsApp

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_qlo57hg", "template_wrgr2gl", e.target, "9ecYH6LPP5bIj5OMT")
      .then(
        () => {
          alert("Message sent successfully ✅");
          setLoading(false);
        },
        (error) => {
          alert("Something went wrong ❌");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Orbiting Social Icons with Ring */}
      <div className="relative w-[300px] h-[300px] mb-8 flex items-center justify-center">
        {/* Orbit ring */}
        <div className="absolute w-[220px] h-[220px] rounded-full border border-sky-500/30"></div>

        {icons.map((icon, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className={`absolute top-1/2 left-1/2 animate-orbit`}
            style={{ animationDelay: icon.delay }}
            onAnimationIteration={() => setActiveIcon(icon)}
          >
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-200 text-3xl hover:text-sky-400 transform hover:scale-125 transition"
            >
              {icon.component}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Active Button Below Ring */}
      <div className="mb-12">
        <a
          href={activeIcon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-medium transition"
        >
          {activeIcon.component}
        </a>
      </div>

      {/* Call Button */}
      <div className="text-center mb-12">
        <p className="text-sky-200 mb-4">Give me a quick call</p>
        <a
          href="tel:+254700000000"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-medium transition"
        >
          <Phone /> +254 790 086 093
        </a>
      </div>

      {/* Contact Form */}
      <h2 className="text-4xl font-bold text-center text-sky-200 mb-10">
        Contact Me
      </h2>
      <div className="w-full max-w-3xl">
        <form
          onSubmit={sendEmail}
          className="p-6 rounded-xl bg-slate-900/40 backdrop-blur-md shadow-lg space-y-4 animate-float"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 text-center focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 text-center focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 text-center focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-black font-semibold py-3 px-6 rounded-md transition"
          >
            {loading ? <Loader2 className="animate-spin-slow" /> : <Send />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
