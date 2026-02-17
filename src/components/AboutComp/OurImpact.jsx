import React from "react";
import "../../css/AboutComponents/OurImpact.css";

const OurImpact = () => {
  return (
    <section className="OurImpact" suppressHydrationWarning>
      <div className="impact-head-container">
        <h2 className="head-text impact-title">Our Impact</h2>
        <p className="para-text impact-subtext">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing.
        </p>
      </div>
      <div className="impact-cards-container">
        {/* Card 1 - Orange */}
        <div className="impact-card card-orange">
          <h3 className="sub-head-text card-label">Projects</h3>
          <div className="card-bottom">
            <h2 className="head-text card-number">700+</h2>
            <div className="impact-divider"></div>
            <p className="para-text card-desc">
              Projects launched successfully across the globe
            </p>
          </div>
        </div>

        {/* Card 2 - Green */}
        <div className="impact-card card-green">
          <h3 className="sub-head-text card-label">Clients</h3>
          <div className="card-bottom">
            <h2 className="head-text card-number">10M</h2>
            <div className="impact-divider"></div>
            <p className="para-text card-desc">
              Projects launched successfully across the globe
            </p>
          </div>
        </div>

        {/* Card 3 - Blue */}
        <div className="impact-card card-blue">
          <h3 className="sub-head-text card-label">Projects</h3>
          <div className="card-bottom">
            <h2 className="head-text card-number">700+</h2>
            <div className="impact-divider"></div>
            <p className="para-text card-desc">
              Projects launched successfully across the globe
            </p>
          </div>
        </div>

        {/* Card 4 - Purple */}
        <div className="impact-card card-purple">
          <h3 className="sub-head-text card-label">Projects</h3>
          <div className="card-bottom">
            <h2 className="head-text card-number">700+</h2>
            <div className="impact-divider"></div>
            <p className="para-text card-desc">
              Projects launched successfully across the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
