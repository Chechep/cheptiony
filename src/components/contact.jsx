// src/components/Contact.jsx
import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

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
      <div className="relative w-[450px] h-[450px] mb-16 flex items-center justify-center">
        {/* Faint orbit ring */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-sky-500/30"></div>

        {/* WhatsApp */}
        <div className="absolute top-1/2 left-1/2 animate-orbit">
          <a
            href="https://wa.me/254790086093"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 text-3xl hover:text-sky-400 transform hover:scale-125 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Email */}
        <div className="absolute top-1/2 left-1/2 animate-orbit [animation-delay:3s]">
          <a
            href="mailto:cheptiony6@gmail.com"
            className="text-sky-200 text-3xl hover:text-sky-400 transform hover:scale-125 transition"
          >
            <Mail />
          </a>
        </div>

        {/* GitHub */}
        <div className="absolute top-1/2 left-1/2 animate-orbit [animation-delay:6s]">
          <a
            href="https://github.com/Chechep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 text-3xl hover:text-sky-400 transform hover:scale-125 transition"
          >
            <Github />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="absolute top-1/2 left-1/2 animate-orbit [animation-delay:9s]">
          <a
            href="https://linkedin.com/in/cheptiony"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 text-3xl hover:text-sky-400 transform hover:scale-125 transition"
          >
            <Linkedin />
          </a>
        </div>
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
