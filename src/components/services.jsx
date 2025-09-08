import { FaMobileAlt, FaCode, FaDatabase, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt className="text-3xl text-green-700 mb-3" />,
    title: "Mobile App Development",
    description:
      "I create engaging mobile solutions from design to launch for both iOS and Android. With modern frameworks, I ensure smooth functionality, sleek interfaces, and reliable performance that support your goals. Delivering apps that are enjoyable to use and impactful for your business."
  },
  {
    icon: <FaCode className="text-3xl text-green-700 mb-3" />,
    title: "Web Development",
    description:
      "I build fast, visually appealing websites that strengthen your online presence. Whether it’s a simple site or full complex e-commerce system, I use latest frameworks and technologies to provide responsive layouts, SEO-friendly structures, and fluid user experiences across all devices."
  },
  {
    icon: <FaServer className="text-3xl text-green-700 mb-3" />,
    title: "Backend Development",
    description:
      "I design powerful backend systems that keep your applications running seamlessly. From APIs and server setup to database optimization, I make sure your platforms remain secure, scalable and efficient under heavy demand."
  },
  {
    icon: <FaDatabase className="text-3xl text-green-700 mb-3" />,
    title: "Database Management",
    description:
      "I structure and maintain databases for top performance and security. Skilled in both SQL and NoSQL systems, I create optimized schemas, write efficient queries, and apply best practices to safeguard data, ensuring smooth, dependable access whenever it’s needed."
  }
];

export default function Services() {
  return (
    <div id="services" className="py-16 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Services
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-300 dark:bg-gray-800 p-6 rounded-xl border border-gray-400 dark:border-gray-600 shadow-md cursor-pointer transform transition hover:-translate-y-2 hover:shadow-[0_0_25px_#00ff00]"
            >
              <div>{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
