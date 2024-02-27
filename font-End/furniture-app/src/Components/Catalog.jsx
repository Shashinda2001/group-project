import React from "react";
import ProfilePic from "../Assets/chair 3.png";



const Catalog = () => {
        const reviewerDetails=[
          {
            catagoryName:"Chairs",
            imgAddress:"../Assets/chair 3.png"
          },
          {
            catagoryName:"Tables",
            review:"this is a good product"
          },
          {
            catagoryName:"Beds",
            review:"this is a good product"
          },
          {
            catagoryName:"Racks",
            review:"this is a good product"
          }
      
      
        ];

    return (
        
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Products</p>
      <h1 className="primary-heading">Explore Our Products!</h1>

    </div>
    <div className="testimonial-section">
    {
        reviewerDetails.map((data)=>(
          <div className="catalog-section-bottom" key={data.catagoryName}>
          <img className="catalog-img" src={ProfilePic} alt="" />
         
          <h2>{data.catagoryName}</h2>
        </div>
        ))
      }
    </div>
    
   
  </div>
    );
};

export default Catalog;