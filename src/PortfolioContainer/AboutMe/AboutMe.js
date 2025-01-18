import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "As a versatile professional, I bring expertise across multiple domains, including Full Stack Development , where I build dynamic and responsive web applications; Mobile Development, creating seamless and user-friendly mobile experiences; Data Engineering, ensuring efficient data pipelines and processing workflows; Cloud Engineering, leveraging scalable and secure cloud solutions; and Big Data Engineering, handling vast datasets with precision to derive actionable insights.",
    highlights: {
      bullets: [
       "Full Stack Web and Mobile Development 📱",
  "Interactive Front End with cutting-edge designs 💻",
  "Proficient in React, React Native, and Redux for state management",
  "Building and scaling RESTful APIs",
  " Designing efficient ETL pipelines and workflows",
  " Leveraging scalable and secure cloud solutions",
  " Managing and processing vast datasets for insights",
  " Ensuring reliable and optimized storage solutions",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="vamsi.pdf" download="Vamsi Krishna.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function AboutMe(props) {
//   return (
//     <div className="about-me-container screen-container">
//       <div className="about-me-parent">
//         <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
//         </div>
//       </div>
//   );
// }