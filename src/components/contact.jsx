import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormData({ name: "", email: "", message: "" });
          setStatus("success");
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <div id="contact" className="py-16 px-6 bg-white dark:bg-black dark:text-white">
      <h1 className="text-3xl font-bold mb-3 text-center">Contact Me</h1>
      <p className="mb-12 text-lg text-center">
        Let’s connect! Reach me through the platforms below or send a message.
      </p>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <ContactCard
          href="mailto:cheptiony6@gmail.com"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="text-red-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 13.065L1.8 6.75v12.75h20.4V6.75L12 13.065z" />
              <path d="M12 11.064L0 4.5h24l-12 6.564z" />
            </svg>
          }
          label="cheptiony6@gmail.com"
        />
        <ContactCard
          href="tel:+254790086093"
          icon={<FontAwesomeIcon icon={faPhone} color="#34A853" size="2x" />}
          label="+254 790 086 093"
        />
        <ContactCard
          href="https://wa.me/254790086093"
          icon={<FontAwesomeIcon icon={faWhatsapp} color="#25D366" size="2x" />}
          label="+254 790 086 093"
        />
        <ContactCard
          href="https://github.com/Chechep"
          icon={<FontAwesomeIcon icon={faGithub} size="2x" className="text-[#181717] dark:text-white" />}
          label="github.com/Chechep"
        />
        <ContactCard
          href="https://www.google.com/maps?q=Nairobi,+Kenya"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
            </svg>
          }
          label="Nairobi, Kenya"
        />
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-black border border-gray-300 dark:border-gray-700 p-8 rounded-xl shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-700 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-black dark:border-gray-700 dark:text-white"
          ></textarea>
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg transition transform hover:scale-105 ${
              status === "sending" ? "cursor-not-allowed opacity-70" : "hover:bg-green-700"
            }`}
          >
            {status === "sending" && <FontAwesomeIcon icon={faSpinner} spin />}
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-500 text-center font-semibold">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 text-center font-semibold">❌ Failed to send message. Try again.</p>
        )}
      </div>
    </div>
  );
};

// Contact Card
const ContactCard = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center px-6 py-4 rounded-full hover:-translate-y-1 transition transform duration-300 group"
  >
    <div className="mb-2">{icon}</div>
    <p className="text-sm hidden group-hover:block">{label}</p>
  </a>
);

export default Contact;
