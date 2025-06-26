// Projects.js
import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

import awsImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";
import azureImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";
import googleImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";

export default function Projects(props = {}) {
  let fadeInScreenHandler = (screen) => {
    const id = props.id || "defaultId";
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projects = [
    {
      title: "Beaver Rides",
      description:
        "Human Centric Redesign of the OSU Shuttle App, focusing on improved user experience and accessibility.",
      technologies: ["UX/UI Design", "Prototyping", "User Testing"],
      image: awsImage,
    },
    {
      title: "MELOSCRIBE",
      description:
        "Generating Music and Piano notes from Text Descriptions using Natural Language Processing techniques.",
      technologies: ["Python", "NLP", "AI/ML", "Music Generation"],
      image: awsImage,
    },
  ];

  return (
    <div>
      <ScreenHeading title={"My Projects"} subHeading={"Selected Work"} />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span className="tag" key={i}>{tech}</span>
                    ))}
                  </div>
                  <button className="view-button">View Project</button>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
