import React from "react";
import "../../css/AboutComponents/OurProcess.css";
import ellipse from "../../assets/images/about-page/Ellipse 134.png";
import group from "../../assets/images/about-page/Group 434.png";
import groupBg from "../../assets/images/about-page/Group 423 1.png";

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "1",
    },
    {
      id: 2,
      title: "Define",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "2",
    },
    {
      id: 3,
      title: "Design",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "3",
    },
    {
      id: 4,
      title: "Engineer",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "4",
    },
    {
      id: 5,
      title: "Refine",
      desc: "We align on business goals, audience, constraints, and opportunities.",
      number: "5",
    },
  ];

  return (
    <section className="OurProcess">
      <div className="process-side-bg left">
        <img src={ellipse} alt="bg-left" className="side-bg-img" />
      </div>
      <div className="process-side-bg right">
        <img src={groupBg} alt="bg-right" className="side-bg-img" />
      </div>

      <div className="process-head">
        <h2 className="head-text process-title">Our Process</h2>
        <p className="para-text process-desc">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing.
        </p>
      </div>

      <div className="process-steps-container">
        <svg
          className="process-lines-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M100,125 L300,300 L500,125 L700,300 L900,125"
            vectorEffect="non-scaling-stroke"
            className="zigzag-line"
          />
        </svg>

        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`process-card step-${index + 1} ${
              index % 2 === 0 ? "step-top" : "step-bottom"
            } ${index === 0 ? "glass-start" : index === steps.length - 1 ? "glass-end" : ""}`}
          >
            <div className="card-icon-wrapper">
              <img src={group} alt="icon" className="card-icon-bg" />
            </div>

            <h3 className="sub-head-text card-title">{step.title}</h3>
            <p className="para-text card-desc">{step.desc}</p>

            <span className="card-bg-number">{step.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
