import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/theSaseCss/UpImageAnimation.css";
import imageSrc from "../../WorkImages/Thesase/upanimation.webp";

gsap.registerPlugin(ScrollTrigger);

const UpImageAnimation = () => {
  const containerRef = useRef(null);
  const images = [imageSrc, imageSrc, imageSrc];

  useGSAP(
    () => {
      // Columns 1 and 3 (Left and Right)
      // Moving from 0% to -50%
      gsap.to(".UpImageAnimation-col-1, .UpImageAnimation-col-3", {
        yPercent: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".UpImageAnimation-col-2",
        { yPercent: 10 },
        {
          yPercent: 30,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="UpImageAnimation-main-section" ref={containerRef}>
      <div className="UpImageAnimation-container">
        <div className="UpImageAnimation-column UpImageAnimation-col-1">
          {images.map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 1-${index}`} />
            </div>
          ))}
        </div>
        <div className="UpImageAnimation-column UpImageAnimation-col-2">
          {images.map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 2-${index}`} />
            </div>
          ))}
        </div>
        <div className="UpImageAnimation-column UpImageAnimation-col-3">
          {images.map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 3-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpImageAnimation;
