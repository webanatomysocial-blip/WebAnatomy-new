import React from "react";
import { Link } from "react-router-dom";
import "../servicesCss/ServicesHover.css";
import searchimg from "../servicesImages/UIUXDesignImages/search-img.jpg";
import { BsArrowRight } from "react-icons/bs";


const ServicesHover = () => {
  const services = [
    {
      title: "WEB DESIGN",
      image: searchimg,
      link:"/web-design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "BRANDING",
       link:"/web-design",
      image: searchimg,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "SOCIAL MEDIA",
       link:"/web-design",
      image: searchimg,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "CAMPAIGN",
       link:"/web-design",
      image: searchimg,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "SEARCH MARKETING",
       link:"/web-design",
      image: searchimg,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "VIDEO CONTENT",
       link:"/web-design",
      image: searchimg,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="hover-section">

      <h2 className="head-text">
        Our Services
      </h2>

      <div className="hover-section-inner">
        {services.map((service, index) => (
          <div
            key={index}
            className="every-hover-containers"
            style={index === 0 ? { borderTop: "solid black 2px" } : {}}
          >
            <div className="service-section-inner-container"> <div className="service-text">{service.title}</div>

           
              <p className="para-text">{service.description}</p>

              <Link to={service.link} className="white-bg-btn " style={{
                border : "1px solid black", marginBottom : "30px"
              }}> Read More
               <span className="icon-btn">
                          <BsArrowRight className="icon-inside-btn-1" />
                          <BsArrowRight className="icon-inside-btn-2" />
                        </span></Link>
           
</div>

           
            <div className="image-hover-display">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHover;
