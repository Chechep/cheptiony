import "./services.css";
import { FaMobileAlt, FaCode, FaDatabase, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "I create engaging mobile solutions from design to launch for both iOS and Android. With modern frameworks, I ensure smooth functionality, sleek interfaces, and reliable performance that support your goals. Delivering apps that are enjoyable to use and impactful for your business."
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "I build fast, visually appealing websites that strengthen your online presence. Whether it’s a simple site or full complex e-commerce system, I use latest frameworks and technologies to provide responsive layouts, SEO-friendly structures, and fluid user experiences across all devices."
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "I design powerful backend systems that keep your applications running seamlessly. From APIs and server setup to database optimization, I make sure your platforms remain secure, scalable and efficient under heavy demand."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "I structure and maintain databases for top performance and security. Skilled in both SQL and NoSQL systems, I create optimized schemas, write efficient queries, and apply best practices to safeguard data, ensuring smooth, dependable access whenever it’s needed."
  }
];

export default function Services() {
  return (
    <div className="services-wrapper">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
