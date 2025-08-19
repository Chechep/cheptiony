import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <h1>Contact Me</h1>
      <p>Let’s connect! You can reach me through the following platforms:</p>

      <div className="contact-methods">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p className="contact-detail">cheptiony6@gmail.com</p>
          <a href="mailto:cheptiony6@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <p className="contact-detail">+254 790 086 093</p>
          <a href="tel:+254790086093">
            Call
          </a>
        </div>

        <div className="contact-card">
          <FaWhatsapp className="contact-icon" />
          <p className="contact-detail">+254 790 086 093</p>
          <a href="https://wa.me/254790086093" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p className="contact-detail">github.com/Chechep</p>
          <a href="https://github.com/Chechep" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-detail">Nairobi, Kenya</p>
          <span>Location</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
