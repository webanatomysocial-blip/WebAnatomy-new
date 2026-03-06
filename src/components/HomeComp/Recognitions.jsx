import React from "react";
import "../../css/HomeComponents/Recognitions.css";

// Images
import img1 from "../../assets/images/Recognitions/1.png";
import img2 from "../../assets/images/Recognitions/2.png";
import img3 from "../../assets/images/Recognitions/3.png";
import img4 from "../../assets/images/Recognitions/4.png";
import img6 from "../../assets/images/Recognitions/6.png";
import img9 from "../../assets/images/Recognitions/9.jpeg";

const partnersImages = [img1, img2, img3, img4, img9, img6];

export default function Recognitions() {
  return (
    <>
      <section className="recognitions-section partners-section">
        <div className="recognitions-container">
          <div className="recognitions-text-col">
            <h2 className="head-text">
              Your Goals Our <br /> Priority
            </h2>
            <p className="sub-para-text">
              receive priority treatment for urgent tasks, with an average
              response time of 24 hours for high-priority clients
            </p>
          </div>

          <div className="recognitions-marquee-col">
            <div className="recognitions-marquee-track">
              {partnersImages.map((img, index) => (
                <div key={`param-${index}`} className="recognition-item">
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="recognition-img"
                  />
                </div>
              ))}
              {partnersImages.map((img, index) => (
                <div key={`dup-${index}`} className="recognition-item">
                  <img
                    src={img}
                    alt={`Partner Duplicate ${index + 1}`}
                    className="recognition-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
