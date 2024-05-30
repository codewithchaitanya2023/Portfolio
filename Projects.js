import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Excess Food Distribution</h3>
            <p>
              Android app (2022) - A dynamic and user-friendly mobile
              application built using Java. It connects NGOs with marriage halls
              for better food management. Sign-up and login are handled using
              Firebase Authentication.
            </p>
          </div>
          <div className="project-card">
            <h3>Matrimony site</h3>
            <p>
              Web app (2023-2024) - Implemented client-side validations in
              registration and login forms using JSP and MySQL. Developed CRUD
              features and incorporated responsive design principles into the
              application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
