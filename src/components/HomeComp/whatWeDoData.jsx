import React from "react";
import "../../css/HomeComponents/whatWeDoData.css";
import img1 from "../../assets/images/Our-services/service-1.webp";
import img2 from "../../assets/images/Our-services/service-2.webp";
import img3 from "../../assets/images/Our-services/service-3.webp";
import img4 from "../../assets/images/Our-services/service-4.webp";
import img5 from "../../assets/images/Our-services/service-5.webp";
import img6 from "../../assets/images/Our-services/service-6.webp";

const whatWeDoData = [
  {
    title: "Strategy + \n Customer Experience",
    alt: "Strategy + Customer Experience",
    img: img1,
  },
  {
    title: "Digital Product + \n Design",
    alt: "Digital Product Design",
    img: img2,
  },
  {
    title: "Brand + \n Identity",
    alt: "Brand Identity",
    img: img3,
  },
  {
    title: "Strategy + \n Customer Experience",
    alt: "Strategy + Customer Experience",
    img: img4,
  },
  {
    title: "Digital Product + \n Design",
    alt: "Digital Product Design",
    img: img5,
  },
  {
    title: "Brand + \n Identity",
    alt: "Brand Identity",
    img: img6,
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
