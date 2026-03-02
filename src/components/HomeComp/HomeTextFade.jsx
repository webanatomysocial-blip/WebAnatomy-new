// src/components/HomeComp/HomeTextFade.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/HomeTextFade.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lines = containerRef.current.querySelectorAll(".line");

    lines.forEach((line) => {
      const imgSpan = line.querySelector(".img-span");

      if (imgSpan) {
        // Set initial state
        gsap.set(imgSpan, { width: 0 });

        gsap.to(imgSpan, {
          width: 300,
          ease: "none",
          force3D: true,
          overwrite: "auto",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="reveal-container" ref={containerRef}>
        <div className="line">
          <span className="big-head-text-white">We craft</span>
          <span className="img-span">
            <img
              src="https://i.pinimg.com/1200x/93/27/65/932765c7cd00055218ba7398119d7d4d.jpg"
              alt=""
            />
          </span>
          <span className="big-head-text-white">digital</span>
        </div>
        <div className="line">
          <span className="big-head-text-white">experiences</span>
          <span className="img-span">
            <img
              src="https://i.pinimg.com/736x/a9/f1/19/a9f11909a9644d7bfd5102fabcd8310c.jpg"
              alt=""
            />
          </span>
          <span className="big-head-text-white">that</span>
        </div>
        <div className="line">
          <span className="big-head-text-white">inspire</span>
          <span className="img-span">
            <img
              src="https://i.pinimg.com/1200x/48/09/77/480977567d6b4503c8f642728f266b72.jpg"
              alt=""
            />
          </span>
        </div>
        <div className="line">
          <span className="big-head-text-white">and move</span>
        </div>
        <div className="line">
          <span className="big-head-text-white">people</span>
          <span className="img-span">
            <img
              src="https://i.pinimg.com/1200x/9e/f2/b7/9ef2b73b1e2ff489f99bc0a90196fbea.jpg"
              alt=""
            />
          </span>
          <span className="big-head-text-white">forward.</span>
        </div>
      </section>
    </>
  );
};

export default HomeTextFade;
