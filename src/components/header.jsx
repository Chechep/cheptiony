import { useState } from "react";
import "./header.css";

export default function HeaderNav() {
  const [active, setActive] = useState("profile");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const navItems = [
    { id: "profile", name: "Profile" },
    { id: "services", name: "Services" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Add/remove dark mode class on body
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-nav-wrapper">
          <div className="header-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-btn ${active === item.id ? "active" : ""}`}
                onClick={() => handleClick(item.id)}
              >
                {item.icon} {item.name}
              </button>
            ))}
          </div>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
}
