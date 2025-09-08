import React from "react";

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-300 dark:bg-gray-900 rounded-xl mt-20 text-gray-900 dark:text-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Get to know Brian</h1>
      </div>

      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          Based in Nairobi, Kenya, I am a passionate and dedicated full-stack web developer with strong
          skills in both frontend and backend development. I enjoy creating
          efficient, scalable and user-friendly applications that solve
          real-world problems.
        </p>
        <p>
          I am open to freelancing or full-time opportunities where I can
          contribute, grow and make meaningful impact through technology.
        </p>

        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white text-lg rounded-xl transition transform hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
