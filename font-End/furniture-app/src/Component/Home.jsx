import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Chair.png";

import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
 
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Your Dream Furniture Delivered with Elegance & Reliability          
          </h1>
          <p className="primary-text">
          Our Furniture Comes Fully Assembled, Saving You Time and Effort for a Stress-Free Setup Experience.
          </p>
          <button className="secondary-button">
            Shop Now  <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;