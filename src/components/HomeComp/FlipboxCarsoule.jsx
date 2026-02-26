import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/FlipboxCarsoule.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import "../../css/index.css";

// Placeholder images - using repeats for 8 items
import img1 from "../../assets/images/Home-images/flipbox/flip-1.png";
import img2 from "../../assets/images/Home-images/flipbox/flip-2.png";
import img3 from "../../assets/images/Home-images/flipbox/flip-3.png";
import img4 from "../../assets/images/Home-images/flipbox/flip-4.png";

const CAROUSEL_DATA = [
  {
    id: 1,
    img: img1,
    backimg: img1,
    title: "Branding eco root",
    desc: "Crafting a sustainable identity",
  },
  {
    id: 2,
    img: img2,
    backimg: img2,
    title: "Building vision",
    desc: "Mudra Yoga Studio UAE",
  },
  {
    id: 3,
    img: img3,
    backimg: img3,
    title: "Redefining user exp",
    desc: "Extrika's political insights",
  },
  {
    id: 4,
    img: img4,
    backimg: img4,
    title: "Building vision",
    desc: "Mudra Yoga Studio UAE",
  },
  {
    id: 5,
    img: img1,
    backimg: img1,
    title: "Branding eco root",
    desc: "Crafting a sustainable identity",
  },
  {
    id: 6,
    img: img2,
    backimg: img2,

    title: "Building vision",
    desc: "Mudra Yoga Studio UAE",
  },
  {
    id: 7,
    img: img3,
    backimg: img3,
    title: "Redefining user exp",
    desc: "Extrika's political insights",
  },
  {
    id: 8,
    img: img4,
    backimg: img4,
    title: "Building vision",
    desc: "Mudra Yoga Studio UAE",
  },
];

export default function FlipboxCarsoule() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scope selector to the section
    const q = gsap.utils.selector(sectionRef);
    const cards = q(".flip-card-inner");
    // Target only the first 4 cards for the initial animation
    const initialCards = cards.slice(0, 5);

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(initialCards, { rotateY: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: "labels",
            duration: { min: 0.1, max: 0.3 },
            delay: 0.1,
            ease: "power1.inOut",
          },
        },
      });

      // Label: Start
      tl.addLabel("start");

      // 1. Flip Animation for first 4 cards
      tl.to(initialCards, {
        rotateY: 180,
        duration: 1, // Faster flip
        stagger: 0.1,
        ease: "power2.inOut",
      });

      tl.addLabel("flipped");

      // 2. Slide Carousel Step-by-Step
      // Slide 1: Show Item 5
      tl.to(trackRef.current, {
        xPercent: -25,
        ease: "none",
        duration: 1,
      });
      tl.addLabel("slide1");

      // Slide 2: Show Item 6
      tl.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 1,
      });
      tl.addLabel("slide2");

      // Slide 3: Show Item 7
      tl.to(trackRef.current, {
        xPercent: -75,
        ease: "none",
        duration: 1,
      });
      tl.addLabel("slide3");

      // Slide 4: Show Item 8 (End)
      tl.to(trackRef.current, {
        xPercent: -100,
        ease: "none",
        duration: 1,
      });
      tl.addLabel("end");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wa-flipbox-wrapper">
      <section ref={sectionRef} className="wa-flipbox-carsoule-section">
        <div className="flipbox-header">
          <h2 className="head-text" style={{ pointerEvents: "auto" }}>
            Case Studies
          </h2>
          <a href="/contact" className="read-more-btn">
            Read More
            <BsArrowRight className="arrow-icon" />
          </a>
        </div>

        <div className="flipbox-viewport">
          <div className="flipbox-track" ref={trackRef}>
            {CAROUSEL_DATA.map((item, index) => {
              return (
                <div className="flip-card" key={index}>
                  <div
                    className={`flip-card-inner ${index >= 4 ? "flipped" : ""}`}
                  >
                    {/* Front Face: Logo/Color */}
                    <div className="flip-card-front">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="card-bg-img"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Back Face: Content & Image */}
                    <div className="flip-card-back">
                      <img
                        src={item.backimg}
                        alt={item.title}
                        className="card-bg-img"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-content-overlay">
                        <h3 className="sub-head-text-white">{item.title}</h3>
                        <p className="para-text-white">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
