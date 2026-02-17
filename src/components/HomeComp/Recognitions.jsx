import React from "react";
import "../../css/HomeComponents/Recognitions.css"; // adjustments for path

// Images
import img1 from "../../assets/images/Recognitions/1.png";
import img2 from "../../assets/images/Recognitions/2.png";
import img3 from "../../assets/images/Recognitions/3.png";
import img4 from "../../assets/images/Recognitions/4.png";
import img5 from "../../assets/images/Recognitions/5.png";
import img6 from "../../assets/images/Recognitions/6.png";
import img7 from "../../assets/images/Recognitions/7.webp";
import img8 from "../../assets/images/Recognitions/8.png";
import img9 from "../../assets/images/Recognitions/9.jpeg";
import img10 from "../../assets/images/Recognitions/10.png";
// import img11 from "../../assets/images/Recognitions/11.png";

const partnersImages = [img1, img2, img3, img4, img5, img6];
const awardsImages = [img7, img8, img9, img10];

export default function Recognitions() {
  return (
    <>
      {/* Partners Section (White Background) */}
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

          <div className="recognitions-grid-col">
            {partnersImages.map((img, index) => (
              <div key={index} className="recognition-item">
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section (Black Background) */}
      <section className="recognitions-section awards-section">
        <div className="recognitions-container">
          <div className="recognitions-text-col">
            <h2 className="head-text-white">
              Your Goals Our <br /> Priority
            </h2>
          </div>

          <div className="recognitions-grid-col">
            {awardsImages.map((img, index) => (
              <div key={index} className="recognition-item">
                <img
                  src={img}
                  alt={`Award ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
