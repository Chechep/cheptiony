import React from "react";
import "./profile.css"; // Import CSS for styling

const Profile = () => {

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>About Me</h1>
      </div>

      <div className="profile-content">
        <p>
          I am a passionate and dedicated full-stack web developer with strong
          skills in both frontend and backend development. I enjoy creating
          efficient, scalable, and user-friendly applications that solve
          real-world problems. Based in Nairobi, Kenya, I am passionate about
          continuous learning and technological innovation.
        </p>
        <p>
          I am open to freelancing or full-time opportunities where I can
          contribute, grow, and make meaningful impact through technology.
        </p>
      </div>
    </div>
  );
};

export default Profile;
