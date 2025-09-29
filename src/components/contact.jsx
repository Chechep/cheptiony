// src/components/Contact.jsx
import React, { useState } from "react";
import { Phone, Github, Mail, Linkedin, MapPin, Send, Loader2, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id", 
        "your_template_id", 
        e.target, 
        "your_public_key"
      )
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
    <section id="contact" className="relative z-20 py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-sky-200 mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6 text-sky-200">
          <p className="flex items-center gap-3">
            <Phone className="text-sky-200" /> +254 700 000 000
          </p>
          <p className="flex items-center gap-3">
            <Mail className="text-sky-200" /> your@email.com
          </p>
          <p className="flex items-center gap-3">
            <MessageCircle className="text-sky-200" /> WhatsApp: +254 700 000 000
          </p>
          <p className="flex items-center gap-3">
            <Github className="text-sky-200" /> github.com/yourprofile
          </p>
          <p className="flex items-center gap-3">
            <Linkedin className="text-sky-200" /> linkedin.com/in/cheptiony
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="text-sky-200" /> Nairobi, Kenya
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="p-6 rounded-xl bg-slate-900/40 backdrop-blur-md shadow-lg space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-slate-800/50 text-sky-200 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-black font-semibold py-3 px-6 rounded-md transition"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
