import React from "react";
import "../../css/HomeComponents/whatWeDoData.css";
import img1 from "../../assets/images/Our-services/service-1.jpeg";
import img2 from "../../assets/images/Our-services/service-2.jpeg";
import img3 from "../../assets/images/Our-services/service-3.jpeg";
import img4 from "../../assets/images/Our-services/service-4.jpeg";
import img5 from "../../assets/images/Our-services/service-5.jpeg";
import img6 from "../../assets/images/Our-services/service-6.jpg";

const whatWeDoData = [
  {
    title: "Strategy + \n Customer Experience",
    alt: "Strategy + Customer Experience",
    img: img1,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
  {
    title: "Digital Product + \n Design",
    alt: "Digital Product Design",
    img: img2,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
  {
    title: "Brand + \n Identity",
    alt: "Brand Identity",
    img: img3,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
  {
    title: "Strategy + \n Customer Experience",
    alt: "Strategy + Customer Experience",
    img: img4,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
  {
    title: "Digital Product + \n Design",
    alt: "Digital Product Design",
    img: img5,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
  {
    title: "Brand + \n Identity",
    alt: "Brand Identity",
    img: img6,
    description:
      "We help businesses define their unique value proposition and create seamless, intuitive customer journeys that drive loyalty and growth.",
  },
];

export default function WhatWeDoData() {
  return (
    <div className="what-we-do-container">
      <div className="what-we-do-heading">
        <h1 className="head-text">What We Do</h1>
      </div>

      <div className="what-we-do-content">
        {whatWeDoData.map((item, index) => (
          <div className="what-we-do-box" key={index}>
            <div className="what-we-do-image">
              <img src={item.img} alt={item.alt} width="400" height="225" />
            </div>

            <div className="what-we-do-details">
              <h3 className="head-text">
                {item.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <p className="sub-para-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
