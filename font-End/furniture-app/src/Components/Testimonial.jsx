import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {

  const reviewerDetails=[
    {
      reviewerName:"Sevindu",
      review:"this is a good product"
    },
    {
      reviewerName:"Kamal",
      review:"this is a good product"
    },
    {
      reviewerName:"Nimal",
      review:"this is a good product"
    },
    {
      reviewerName:"Supun",
      review:"this is a good product"
    }


  ];


  return (

    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>

        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section">
      {
          reviewerDetails.map((data)=>(
            <div className="testimonial-section-bottom" key={data.reviewerName}>
            <img src={ProfilePic} alt="" />
            <p>
              {data.review}
            </p>
            <div className="testimonials-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>{data.reviewerName}</h2>
          </div>
          ))
        }
      </div>
      
     
    </div>
  );
};

export default Testimonial;