import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Toast from "./Toast";

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

export default function Contact() {
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
      .then(() => {
        setToast({ message: "Message sent successfully", type: "success" });
        e.target.reset();
      })
      .catch(() => {
        setToast({ message: "Something went wrong", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Orbiting Social Icons */}
      <div className="relative w-[300px] h-[300px] mb-10 flex items-center justify-center animate-float">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
            className="absolute top-1/2 left-1/2 animate-orbit"
            style={{ animationDelay: icon.delay }}
            onAnimationIteration={() => setActiveIcon(icon)}
          >
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-3xl text-teal-500 hover:text-teal-600
                transition transform hover:scale-125
              "
            >
              {icon.component}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Active Button */}
      <div className="mb-12 animate-float [animation-delay:1s]">
        <a
          href={activeIcon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 px-6 py-3 rounded-full font-medium
            bg-teal-500/90 text-white
            backdrop-blur-md
            shadow-xl shadow-teal-500/30
            transition transform hover:scale-105 hover:-translate-y-1
          "
        >
          {activeIcon.component}
          <span>{activeIcon.name}</span>
        </a>
      </div>

      {/* Call Button */}
      <div className="text-center mb-14 animate-float [animation-delay:2s]">
        <p className="mb-4 opacity-80">Give me a quick call</p>
        <a
          href="tel:+254790086093"
          className="
            inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium
            bg-teal-500/90 text-white
            backdrop-blur-md
            shadow-xl shadow-teal-500/30
            transition transform hover:scale-105 hover:-translate-y-1
          "
        >
          <Phone /> +254 790 086 093
        </a>
      </div>

      {/* Floating Contact Form */}
      <div className="w-full max-w-3xl animate-float [animation-duration:8s]">
        <form
          onSubmit={sendEmail}
          className="
            p-8 rounded-2xl space-y-4
            backdrop-blur-xl
            bg-white/80 text-black
            dark:bg-black/70 dark:text-white
            border border-white/30 dark:border-slate-600
            shadow-2xl shadow-teal-500/10
            transition transform hover:-translate-y-1
          "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="
              w-full p-3 rounded-md text-center
              bg-white/90 dark:bg-black/70
              border border-slate-300 dark:border-slate-700
              focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="
              w-full p-3 rounded-md text-center
              bg-white/90 dark:bg-black/70
              border border-slate-300 dark:border-slate-700
              focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full p-3 rounded-md text-center resize-none
              bg-white/90 dark:bg-black/70
              border border-slate-300 dark:border-slate-700
              focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold
              bg-teal-500 text-white
              shadow-xl shadow-teal-500/30
              transition transform hover:scale-105
            "
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
