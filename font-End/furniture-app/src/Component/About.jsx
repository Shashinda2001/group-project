import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/chair-2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Where Style and Comfort Unite to Define Your Space
        </h1>
        <p className="primary-text">
        Discover how our furniture merges style with comfort, creating spaces that reflect your unique lifestyle.
        </p>
        <p className="primary-text">
        Elevate your living experience with furniture that harmonizes elegance and functionality.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>


       
       
    </div>
  );
};

export default About;


// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
 


// export default function About() {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     // Retrieve the token from localStorage
//     const token = localStorage.getItem("token");

//     // Decode the token to extract email
//     if (token) {
//       const decoded = jwtDecode(token);
//       setEmail(decoded.sub);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Email: {email}</h1>
//       {/* Other components or logic */}
//     </div>
//   );
// }

