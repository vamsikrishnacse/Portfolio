import React from "react";
import Slider from "react-slick";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import shape from "../../assets/Testimonial/shape-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    const id = props.id || "defaultId";
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


const projects = [
    {
        title: "E-commerce Website",
        description: "A fully functional e-commerce website with payment integration.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        title: "Social Media App",
        description: "A social media application with real-time chat and notifications.",
        technologies: ["React", "Firebase", "Redux"],
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase projects and skills.",
        technologies: ["React", "CSS", "JavaScript"],
    },
    {
        title: "Blog Platform",
        description: "A blog platform with markdown support and user authentication.",
        technologies: ["Gatsby", "GraphQL", "Firebase"],
    },
    {
        title: "Task Management Tool",
        description: "A task management tool with drag-and-drop functionality.",
        technologies: ["Vue", "Vuex", "Vuetify"],
    },
    {
        title: "Weather App",
        description: "A weather forecasting app with geolocation support.",
        technologies: ["Angular", "TypeScript", "RxJS"],
    },
    {
        title: "Chat Application",
        description: "A real-time chat application with WebSocket integration.",
        technologies: ["React", "Socket.io", "Node.js"],
    },
];



  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"My Recent Works"} />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="project-item">
                  <h5 >{project.title}</h5>
                  <p>{project.description}</p>
                  <ul className="technologies list-unstyled">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}