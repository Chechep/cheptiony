import { Smartphone, Globe, Server, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "I create engaging mobile solutions from design to launch for both iOS and Android. With modern frameworks, I ensure smooth functionality, sleek interfaces, and reliable performance.",
      icon: <Smartphone className="w-10 h-10 text-sky-400" />,
    },
    {
      title: "Web Development",
      description:
        "I build fast, visually appealing websites that strengthen your online presence. From simple sites to full e-commerce systems, I provide responsive, SEO-friendly, and user-centered designs.",
      icon: <Globe className="w-10 h-10 text-purple-400" />,
    },
    {
      title: "Backend Development",
      description:
        "I design powerful backend systems that keep your applications running seamlessly. APIs, server setup, and database optimization — built secure, scalable, and efficient.",
      icon: <Server className="w-10 h-10 text-pink-400" />,
    },
    {
      title: "Database Management",
      description:
        "I structure and maintain databases for top performance and security. Skilled in PostgreSQL, I create optimized schemas, efficient queries, and safeguard data.",
      icon: <Database className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 max-w-6xl mx-auto relative z-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Services
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              p-6 rounded-xl transition transform hover:scale-105
              bg-white text-black shadow-md 
              dark:bg-black dark:text-white dark:shadow-lg
            "
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3 text-center">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
