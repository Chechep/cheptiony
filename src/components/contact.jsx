import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Let’s connect! You can reach me through the following platforms:</p>

      <div className="contact-methods">
        <a href="mailto:cheptiony6@gmail.com" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a href="https://wa.me/254790086093" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="contact-icon" />
          <span>WhatsApp</span>
        </a>

        <a href="https://github.com/Chechep" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
