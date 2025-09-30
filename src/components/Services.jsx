import React from "react";
import {
  Smartphone,
  Globe,
  Server,
  Database,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "I create engaging mobile solutions from design to launch for both iOS and Android. With modern frameworks, I ensure smooth functionality, sleek interfaces and reliable performance that support your goals. Delivering apps that are enjoyable to use and impactful for your business.",
      icon: <Smartphone className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Web Development",
      description:
        "I build fast, visually appealing websites that strengthen your online presence. Whether it’s a simple site or full complex e-commerce system, I use latest frameworks and technologies to provide responsive layouts, SEO-friendly structures and user friendly experiences across all devices.",
      icon: <Globe className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Backend Development",
      description:
        "I design powerful backend systems that keep your applications running seamlessly. From APIs and server setup to database optimization, I make sure your platforms remain secure, scalable and efficient under heavy demand.",
      icon: <Server className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Database Management",
      description:
        "I structure and maintain databases for top performance and security. Skilled in PostgreSQL, I create optimized schemas, write efficient queries and apply best practices to safeguard data, ensuring smooth, dependable access whenever it’s needed.",
      icon: <Database className="w-10 h-10 text-sky-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-6 flex flex-col items-center justify-center text-center relative z-20"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12">
        My <span className="text-sky-400">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 border border-sky-500/20 hover:bg-sky-500/10 transition text-left"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-sky-300">
              {service.title}
            </h3>
            <p className="text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
