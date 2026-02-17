import React from "react";
import "../../css/AboutComponents/WhoWeAre.css";
import "../../css/header.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/about-page/f-left.png";
// Using existing images as requested
import largeCardBg from "../../assets/images/Our-services/service-3.webp";
import graphBg from "../../assets/images/Our-services/service-6.webp"; // Abstract curve/line
import cubeBg from "../../assets/images/Our-services/service-5.webp";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAre">
      <div className="firstContainer">
        <div className="col-1">
          <h2 className="sub-head-text section-title">Who we Are</h2>
          <div className="small-image-wrapper">
            <img src={img1} alt="Team collaboration" className="small-image" />
          </div>
        </div>

        <div className="col-2">
          <h1 className="sub-head-text">
            Web Anatomy exists at the intersection of precision and{" "}
            <span className="gradient-text">imagination.</span>
          </h1>
          <p className="para-text sub-text">
            We don&apos;t chase trends.
            <br />
            We build frameworks.
          </p>
          <Link to="/contact" className=" contact-btn">
            Contact Us
            <span className="icon-btn">
              <FaArrowRight className="icon-inside-btn-1" />
              <FaArrowRight className="icon-inside-btn-2" />
            </span>
          </Link>
        </div>

        <div className="col-3">
          <img src={img1} alt="Team meeting" className="large-image" />
        </div>
      </div>
      <div className="secondContainer">
        <div className="grid-large-card">
          <img
            src={largeCardBg}
            alt="Building With Intent"
            className="card-bg-image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="card-overlay">
            <div className="card-content-bottom">
              <h2 className="head-text card-headline">
                Building With Intent.
                <br />
                Scaling With Precision.
              </h2>
              <p className="para-text card-subtext">
                At Web Anatomy, our purpose is simple — engineer digital systems
                that combine clarity, performance, and longevity.
              </p>
              <Link to="/contact" className="contact-btn">
                Start a project
                <span className="icon-btn">
                  <FaArrowRight className="icon-inside-btn-1" />
                  <FaArrowRight className="icon-inside-btn-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-right-col">
          <div className="grid-card card-dark">
            <h3 className="sub-head-text-white card-title">Our Mission</h3>
            <p className="para-text-white card-desc">
              To bridge design and engineering into one continuous discipline
            </p>
          </div>

          <div className="grid-card card-white centered-content">
            <p className="para-text graph-text">
              our work grows with
              <br />
              your business
            </p>
            <div className="image-asset-container">
              <img src={graphBg} alt="Growth Graph" className="asset-image" />
            </div>
            <p className="sub-para-text graph-subtext">— not against it.</p>
          </div>

          <div className="grid-card card-gradient">
            <h3 className="sub-head-text card-title">Our Vision</h3>
            <p className="para-text card-desc">
              To become a globally respected digital studio known for
              engineering refined, intelligent digital ecosystems.
            </p>
            <div className="vision-overlay"></div>
          </div>

          <div className="grid-card card-black centered-content">
            <div className="image-asset-container">
              <img src={cubeBg} alt="Structure" className="asset-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
