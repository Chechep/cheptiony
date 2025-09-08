import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="py-16 px-6 text-center dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-3">Contact Me</h1>
      <p className="mb-8 text-lg">Let’s connect! You can reach me through the following platforms:</p>

      {/* Contact methods */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {/* Gmail */}
        <a
          href="mailto:cheptiony6@gmail.com"
          className="flex flex-col items-center px-6 py-4 rounded-full border border-gray-400 shadow-inner shadow-black hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
        >
          <img src="/logos/gmail.svg" alt="Gmail" className="w-8 h-8 mb-2" />
          <p className="text-sm hidden group-hover:block">cheptiony6@gmail.com</p>
        </a>

        {/* Phone */}
        <a
          href="tel:+254790086093"
          className="flex flex-col items-center px-6 py-4 rounded-full border border-gray-400 shadow-inner shadow-black hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
        >
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl mb-2" />
          <p className="text-sm hidden group-hover:block">+254 790 086 093</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254790086093"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center px-6 py-4 rounded-full border border-gray-400 shadow-inner shadow-black hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl mb-2" />
          <p className="text-sm hidden group-hover:block">+254 790 086 093</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Chechep"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center px-6 py-4 rounded-full border border-gray-400 shadow-inner shadow-black hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-black dark:text-white text-2xl mb-2" />
          <p className="text-sm hidden group-hover:block">github.com/Chechep</p>
        </a>

        {/* Google Maps */}
        <a
          href="https://www.google.com/maps?q=Nairobi,+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center px-6 py-4 rounded-full border border-gray-400 shadow-inner shadow-black hover:-translate-y-1 hover:shadow-lg transition transform duration-300"
        >
          <img src="/logos/googlemaps.svg" alt="Google Maps" className="w-8 h-8 mb-2" />
          <p className="text-sm hidden group-hover:block">Nairobi, Kenya</p>
        </a>
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-black transition transform hover:scale-105"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
