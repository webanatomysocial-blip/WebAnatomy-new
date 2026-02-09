"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import "@/css/HomeComponents/FlipboxCarsoule.css";

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
  const trackRef = useRef(null); // Ref for the sliding track
  const [navVisible, setNavVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".flip-card-inner");
    // Target only the first 4 cards for the initial animation
    const initialCards = cards.slice(0, 4);

    const ctx = gsap.context(() => {
      // Set initial state: Front facing (0deg)
      gsap.set(initialCards, { rotateY: 0 });

      // Animate to Back facing (180deg) on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        onComplete: () => {
          setNavVisible(true);
        },
      });

      tl.to(initialCards, {
        rotateY: 180,
        duration: 0.8,
        stagger: 0.1, // Staggered flip
        ease: "power4.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    // We have 8 items, showing 4. Max index = 8 - 4 = 4.
    if (currentIndex < CAROUSEL_DATA.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section ref={sectionRef} className="wa-flipbox-carsoule-section">
      <div className="flipbox-header">
        <h2 className="head-text">Case Studies</h2>
        {/* Navigation Arrows */}
        <div className={`flipbox-nav ${navVisible ? "visible" : ""}`}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="nav-btn"
          >
            <IoArrowBackCircleOutline size={40} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= CAROUSEL_DATA.length - 4}
            className="nav-btn"
          >
            <IoArrowForwardCircleOutline size={40} />
          </button>
        </div>
      </div>

      <div className="flipbox-viewport">
        <div
          className="flipbox-track"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          ref={trackRef}
        >
          {CAROUSEL_DATA.map((item, index) => (
            <div className="flip-card" key={index}>
              <div className={`flip-card-inner ${index >= 4 ? "flipped" : ""}`}>
                {/* Front Face: Logo/Color */}
                <div className="flip-card-front">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="card-bg-img"
                  />
                </div>

                {/* Back Face: Content & Image */}
                <div className="flip-card-back">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="card-bg-img"
                  />
                  <div className="card-content-overlay">
                    <h3 className="sub-head-text-white">{item.title}</h3>
                    <p className="para-text-white">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
