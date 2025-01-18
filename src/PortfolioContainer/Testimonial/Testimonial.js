import React from "react";
import Slider from "react-slick";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../assets/Testimonial/lady.png";
import daisy from "../../assets/Testimonial/daisy.jpg";
import mike from "../../assets/Testimonial/mike.png";
import man from "../../assets/Testimonial/man.png";
import shape from "../../assets/Testimonial/shape-bg.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    const id = props.id || "defaultId";
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  }

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

  const testimonials = [
    {
      comment: "I patronized Ehizeex and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime.",
      stars: 4.5,
      img: daisy,
      name: "Daisy Dominic",
      title: "CEO InansGlobal"
    },
    {
      comment: "It was nice hiring this guy for my e-commerce project.He delivered even more than i can imagine. I recommend him for you.",
      stars: 4.5,
      img: mike,
      name: "Mikel",
      title: "CEO MikeTech"
    },
    {
      comment: "When he delivered my job, my head spinned, it was so nice and he implemented every functionality i requested for. Thank you.",
      stars: 4.5,
      img: lady,
      name: "Daisy Dominic",
      title: "CEO InansGlobal"
    },
    {
      comment: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
      stars: 4.5,
      img: man,
      name: "John Smith",
      title: "Banker"
    },
    {
      comment: "This guy is incredibly awesome, I hired him and when He delivered, I honestly fell in love with the project. He is indeed a great guy.",
      stars: 4.5,
      img: man,
      name: "John Smith",
      title: "Banker"
    }

  ];

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Slider
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              {testimonials.map((testimonial, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="testi-item">
                    <div className="testi-comment">
                      <p>
                        <i className="fa fa-quote-left" />
                        {testimonial.comment}
                        <i className="fa fa-quote-right" />
                      </p>
                      <ul className="stars list-unstyled">
                        {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                          <li key={i}>
                            <i className="fa fa-star" />
                          </li>
                        ))}
                        {testimonial.stars % 1 !== 0 && (
                          <li>
                            <i className="fa fa-star-half-alt" />
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="client-info">
                      <img src={testimonial.img} alt="no internet connection"></img>
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.title}</p>
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
