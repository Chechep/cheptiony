import { useState } from "react";
import "./header.css"; // import css for this component

export default function HeaderNav() {
  const [active, setActive] = useState("user");

  const navItems = [
    { id: "profile", icon: "👤", name: "Profile" },
    { id: "services", icon: "💼", name: "Services" },
    { id: "skills", icon: "✨", name: "Skills" },
    { id: "projects", icon: "💻", name: "Projects" },
    { id: "contact", icon: "✉️", name: "Contact" },
  ];

  return (
    <div className="header-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${active === item.id ? "active" : ""}`}
          onClick={() => setActive(item.id)}
          title={item.name} // Add title attribute for hover text
        >
          <span className="profile">{item.icon}</span>
        </button>
      ))}
    </div>
  );
}
