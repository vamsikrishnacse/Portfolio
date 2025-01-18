import React from "react";
import Slider from "react-slick";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Certifications.css';
import shape from "../../assets/Testimonial/shape-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import awsImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";
import azureImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";
import googleImage from "../../assets/Certifications/AWS-Certified-Solutions-Architect.png";

export default function Certifications(props) {
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


  
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      description: "Certification for designing and deploying scalable systems on AWS.",
      skills: ["AWS", "Cloud Architecture", "Scalability"],
      image: awsImage,
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      description: "Certification for designing and implementing solutions on Microsoft Azure.",
      skills: ["Azure", "Cloud Solutions", "Security"],
      image: azureImage,
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      description: "Certification for designing and managing solutions on Google Cloud.",
      skills: ["Google Cloud", "Cloud Management", "Networking"],
      image: googleImage,
    },
    {
      title: "AWS Certified Solutions Architect",
      description: "Certification for designing and deploying scalable systems on AWS.",
      skills: ["AWS", "Cloud Architecture", "Scalability"],
      image: awsImage,
    },
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      description: "Certification for designing and implementing solutions on Microsoft Azure.",
      skills: ["Azure", "Cloud Solutions", "Security"],
      image: azureImage,
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      description: "Certification for designing and managing solutions on Google Cloud.",
      skills: ["Google Cloud", "Cloud Management", "Networking"],
      image: googleImage,
    },
  ];

  return (
    <div>
      <ScreenHeading title={"Certifications"} subHeading={"My Professional Certifications"} />
      <section className="certification-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Slider className="owl-carousel" id="certification-carousel" {...options}>
              {certifications.map((certification, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="certification-item">
                    <div className="certification-content">
                      <img 
                        src={certification.image} 
                        alt={certification.title} 
                        style={{ width: "40%", height: "auto", float: "left", marginRight: "20px" }} 
                      />
                      <div className="certification-details">
                        <h5>{certification.title}</h5>
                        <p>{certification.description}</p>
                        <ul className="skills list-unstyled">
                          {certification.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}