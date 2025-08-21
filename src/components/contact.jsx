import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <h1>Contact Me</h1>
      <p>Let’s connect! You can reach me through the following platforms:</p>

      <div className="contact-methods">

        {/* Email with custom Google-colored M */}
        <a href="mailto:cheptiony6@gmail.com" className="contact-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
            className="contact-icon"
          >
            <path fill="#EA4335" d="M24 24L4 14v20h8V22l12 7 12-7v12h8V14z"/>
            <path fill="#FBBC05" d="M4 14l20 10 20-10H4z"/>
            <path fill="#34A853" d="M20 24l-8 4v6h-8V14l16 10z"/>
            <path fill="#4285F4" d="M28 24l8 4v6h8V14l-16 10z"/>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="contact-icon"
          >
            <path
              fill="#34A853"
              d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"
            />
            <circle cx="12" cy="9" r="2.5" fill="#4285F4" />
          </svg>
          <p className="contact-detail">Nairobi, Kenya</p>
        </a>

      </div>
    </div>
  );
};

export default Contact;
