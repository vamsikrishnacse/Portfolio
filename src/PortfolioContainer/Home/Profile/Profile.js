// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';

// export default function Profile() {
//     return (
//         <div container="profile-container">
//             <div container="profile-parent">
//                 <div container="profile-details">
//                     <div container="colz">
//                     <div className="colz-icon">
//                     <a href="#">
//                             <i className='fa fa-facebook-square'></i>

//                         </a>
//                         <a href="#">
//                             <i className='fa fa-google-plus-square'></i>

//                         </a>
//                         <a href="#">
//                             <i className='fa fa-instagram'></i>

//                         </a>
//                         <a href="#">
//                             <i className='fa fa-youtube-square'></i>

//                         </a>
//                         <a href="#">
//                             <i className='fa fa-twitter'></i>

//                         </a>
//                         <a href="#">
//                             <i className='fa fa-linkedin'></i>
//                         </a>
//                         </div>

//                         <div className='profile-details-name' >
//                             <span>
//                                 {""}
//                                 Hello, I'm <span className='hilighted-text'>Vamsi</span>
//                             </span>

//                         </div>
//                         <div className='profile-details-role' >
//                             <span className='primary-text'>
//                                 {""}
//                                 <h1>
//                                 {""}
//                                 <Typewriter
//                                     words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
//                                     loop={0}
//                                     cursor
//                                     cursorStyle='_'
//                                     typeSpeed={70}
//                                     deleteSpeed={50}
//                                     delaySpeed={1000}
//                                 />
//                                 </h1>
//                                 <span className='profile-role-tagline'>
//                                     kack of building things that work according to the requirements

//                                 </span>
//                             </span>


//                         </div>
//                         <div className='profile-options' >
//                             <button className='btn primary-btn'>
//                                {""}
//                                 Hire Me
//                             </button>
//                         <a href='Vamsi.pdf' download='Vamsi Krishna.pdf'>
//                             <button className = 'btn highlighted-btn'> Get Resume</button>

//                              </a>

//                         </div>
//                     </div>

//                 </div>
//                 <div className="profile-picture">
//           <div className="profile-picture-background"></div>
//         </div>
//             </div>
//         </div>
//     );
// };



import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            {/* chnage the links to your social media links */}
                            <a href="https://web.facebook.com/?_rdc=1&_rdr">
                                <i className="fa fa-facebook-square" />
                            </a>
                            {/* <a href="#">
                                <i className="fa fa-google-plus-square" />
                            </a> */}
                            <a href="https://www.instagram.com/instructor_ehizeex/">
                                <i className="fa fa-instagram" />
                            </a>
                            {/* <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                                <i className="fa fa-youtube-square" />
                            </a>
                            <a href="https://twitter.com/Ehiedu_baba">
                                <i className="fa fa-twitter" />
                            </a> */}
                            <a href="https://twitter.com/Ehiedu_baba">
                                <i className="fa fa-linkedin" />
                            </a>
                            <a href="https://github.com/your-github-profile">
                    <i className="fa fa-github" />
                </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Vamsi Krishna</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {""}
                                <Typewriter
                                    words={['Full Stack Developer 💻', 'Data Engineer', 'Cloud Engineer','Big Data Engineer','Mobile Development 📱']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={35}
                                    delaySpeed={1000}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                        Knack for crafting scalable solutions across Full-Stack Development, Mobile Applications, <br />
                        Cloud Systems, and Big Data Pipelines.
                        </span>
                    </div>

                    <div className="profile-options">
                        <a 
        href="https://www.linkedin.com/in/vamsi-krishna-chitturi" 
        target="_blank" 
        rel="noopener noreferrer"
    >
        <button className="btn primary-btn">
            Hire Me
        </button>
    </a>
                        <a href="Vamsi.pdf" download="Vamsi Krishna.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
