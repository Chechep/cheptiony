import React, { useState } from "react";
import "./contact.css";
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
    // For now just log form data
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="contact-page">
      <h1>Contact Me</h1>
      <p>Let’s connect! You can reach me through the following platforms:</p>

      <div className="contact-methods">
        {/* Gmail */}
        <a href="mailto:cheptiony6@gmail.com" className="contact-card">
          <img
            src="/logos/gmail.svg"
            alt="Gmail"
            className="contact-icon gmail"
          />
          <p className="contact-detail">cheptiony6@gmail.com</p>
        </a>

        {/* Phone */}
        <a href="tel:+254790086093" className="contact-card">
          <FontAwesomeIcon icon={faPhone} className="contact-icon phone" />
          <p className="contact-detail">+254 790 086 093</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254790086093"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon whatsapp" />
          <p className="contact-detail">+254 790 086 093</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Chechep"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FontAwesomeIcon icon={faGithub} className="contact-icon github" />
          <p className="contact-detail">github.com/Chechep</p>
        </a>

        {/* Google Maps */}
        <a
          href="https://www.google.com/maps?q=Nairobi,+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img
            src="/logos/googlemaps.svg"
            alt="Google Maps"
            className="contact-icon"
          />
          <p className="contact-detail">Nairobi, Kenya</p>
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send me a message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
