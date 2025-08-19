import React from "react";
import "./projects.css"; // Import CSS for styling

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>

            <div className="projects-content">
                <p>
                    Here are some of the projects I have worked on. Each project showcases my skills in full-stack development, 
                    including frontend and backend technologies.
                </p>

                {/* Project List */}
                <ul className="project-list">
                    <li>
                        <strong>Project 1:</strong> Description of project 1.
                    </li>
                    <li>
                        <strong>Project 2:</strong> Description of project 2.
                    </li>
                    <li>
                        <strong>Project 3:</strong> Description of project 3.
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Projects;