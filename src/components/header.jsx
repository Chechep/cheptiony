import { useState } from "react";
import "./header.css";

export default function HeaderNav() {
  const [active, setActive] = useState("profile");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const navItems = [
    { id: "profile", icon: "👤", name: "Profile" },
    { id: "services", icon: "💼", name: "Services" },
    { id: "skills", icon: "✨", name: "Skills" },
    { id: "projects", icon: "💻", name: "Projects" },
    { id: "contact", icon: "✉️", name: "Contact" },
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
    <div>
      <div className="header-title">
        <h1>
          Hello, I'm Brian <span role="img" aria-label="wave">👋</span>
        </h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="header-nav">
        {navItems.map((item) => (
          <div key={item.id} className="nav-wrapper">
            <button
              className={`nav-btn ${active === item.id ? "active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
              {item.icon}
            </button>
            <span className="tooltip">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
