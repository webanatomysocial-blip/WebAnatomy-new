import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/FlipboxCarsoule.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import "../../css/index.css";
import { worksMetadata } from "../../works/metadata";

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
    img: img4,
  },
  {
    id: 6,
    img: img4,
  },
  {
    id: 7,
    img: img4,
  },
  {
    id: 8,
    img: img4,
  },
];

import { useWorkPopup } from "../../context/WorkPopupContext";

export default function FlipboxCarsoule() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const { openWorkPopup } = useWorkPopup();

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
          end: "+=1500px", // Increased distance to prevent "stuck" feeling
          pin: true,
          scrub: 1,
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

      // 1. Flip Animation for first 4/5 cards
      tl.to(initialCards, {
        rotateY: 180,
        duration: 2,
        stagger: 0.2,
        ease: "power2.inOut",
      });

      tl.addLabel("flipped");

      // Smoothly expand the clip-path AFTER flipping is done
      tl.to(
        viewportRef.current,
        {
          clipPath: "inset(-20% -100% -20% -100%)",
          duration: 1,
          ease: "power2.inOut",
        },
        "flipped",
      );

      // 2. Slide to reveal 5th card (since we have 5 items and 4 visible)
      // Each card is 25% wide, so sliding -25% reveals the 5th card
      tl.to(trackRef.current, {
        xPercent: -25,
        ease: "none",
        duration: 1,
      })
        .to(trackRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 1,
        })
        .to(trackRef.current, {
          xPercent: -75,
          ease: "none",
          duration: 1,
        })
        .to(trackRef.current, {
          xPercent: -100,
          ease: "none",
          duration: 1,
        });

      tl.addLabel("end");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (e, work) => {
    if (work?.hasPopup) {
      e.preventDefault();
      openWorkPopup(work);
    }
  };

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

        <div className="flipbox-viewport" ref={viewportRef}>
          <div className="flipbox-track" ref={trackRef}>
            {CAROUSEL_DATA.map((item, index) => {
              const currentWork = worksMetadata[index % worksMetadata.length];
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

                    <div className="flip-card-back">
                      <Link
                        to={`/works/${currentWork?.slug}`}
                        key={currentWork?.id}
                        onClick={(e) => handleCardClick(e, currentWork)}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 20,
                        }}
                      >
                        <img
                          src={currentWork?.image || item.backimg}
                          alt={currentWork?.title || item.title}
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
                          <h3 className="sub-head-text-white">
                            {currentWork?.title || item.title}
                          </h3>
                        </div>
                      </Link>
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
