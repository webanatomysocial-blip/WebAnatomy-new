import React from "react";
import "../../css/AboutComponents/WhoWeAre.css";
import "../../css/header.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/images/about-page/f-left.png";


const WhoWeAre = () => {
  return (
    <section className="WhoWeAre">
      <h2 className="sub-small-head">Who we Are</h2>
      <div className="firstContainer">
        <div className="who-we-are-col-1">
          
          <div className="small-image-wrapper">
            {/* <img src={img1} alt="Team collaboration" className="small-image" /> */}
          </div>
        </div>

        <div className="col-2">
          <h1 className="sub-head-text">
            Web Anatomy exists at the intersection of precision and{" "}
            <span className="gradient-text">imagination.</span>
          </h1>
          <p className="para-text sub-text">
            We don't chase trends.
            <br />
            We build frameworks.
          </p>
          <Link to="/contact" className="black-bg-btn who-contact-btn">
            Contact Us
            <span className="icon-btn">
              <BsArrowRight className="icon-inside-btn-1" />
              <BsArrowRight className="icon-inside-btn-2" />
            </span>
          </Link>
        </div>

        <div className="who-we-are-col-3">
          <img src={img1} alt="Team meeting" className="large-image" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
