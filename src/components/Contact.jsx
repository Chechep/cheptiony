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
        setToast({ message: "Message sent successfully ✅", type: "success" });
        e.target.reset();
      })
      .catch(() => {
        setToast({ message: "Something went wrong ❌", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6"
    >
      {/* Orbiting Social Icons */}
      <div className="relative w-[300px] h-[300px] mb-8 flex items-center justify-center">
        <div className="absolute w-[320px] h-[320px]" />

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
              className="
                text-3xl transition hover:scale-125
                text-teal-500 hover:text-teal-700
                hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]
              "
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
          className="
            flex items-center gap-2 px-6 py-3 rounded-full font-medium
            bg-teal-500 hover:bg-teal-700 text-white
            shadow-[0_0_10px_rgba(56,189,248,0.6)]
          "
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
          className="
            inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium
            bg-teal-500 hover:bg-teal-700 text-white
            shadow-[0_0_10px_rgba(56,189,248,0.6)]
          "
        >
          <Phone /> +254 790 086 093
        </a>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl">
        <form
          onSubmit={sendEmail}
          className="
            p-6 rounded-xl space-y-4 backdrop-blur-md transition-all
            bg-white text-black shadow-md border border-slate-300
            dark:bg-black dark:text-white dark:border dark:border-slate-500 dark:shadow-lg
          "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="
              w-full p-3 rounded-md text-center
              bg-white text-black border border-slate-400
              dark:bg-black dark:text-teal-400 dark:border-slate-700
              placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="
              w-full p-3 rounded-md text-center
              bg-white text-black border border-slate-400
              dark:bg-black dark:text-teal-400 dark:border-slate-700
              placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full p-3 rounded-md text-center resize-none
              bg-white text-black border border-slate-400
              dark:bg-black dark:text-teal-400 dark:border-slate-700
              placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-400
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold
              bg-teal-500 hover:bg-teal-700 text-white
              shadow-[0_0_10px_rgba(56,189,248,0.6)]
            "
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
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
}
