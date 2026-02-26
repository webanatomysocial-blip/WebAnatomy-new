import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "../../css/ServicesComponents/ServicesImpact.css";

const ServicesImpact = () => {
  return (
    <section className="services-impact-section">
      <div className="impact-header">
        <h2 className="head-text">Our Impact</h2>
        <p className="para-text">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing. We deliver ideas that make a difference,
          create experiences that transform lives and build ecosystems that
          foster progress.
        </p>
      </div>

      <div className="impact-stats-grid">
        <div className="impact-stat-item">
          <h3 className="head-text">700+</h3>
          <p className="para-text">
            Projects launched successfully across the globe
          </p>
        </div>
        <div className="impact-stat-item">
          <h3 className="head-text">10M</h3>
          <p className="para-text">
            Daily customer engagement through our projects
          </p>
        </div>
        <div className="impact-stat-item">
          <h3 className="head-text">100+</h3>
          <p className="para-text">
            Digital transformation stories that made a difference
          </p>
        </div>
      </div>

      <Link to="/contact" className="black-bg-btn">
        Our Impact
        <span className="icon-btn">
          <BsArrowRight className="icon-inside-btn-1" />
          <BsArrowRight className="icon-inside-btn-2" />
        </span>
      </Link>
    </section>
  );
};

export default ServicesImpact;
