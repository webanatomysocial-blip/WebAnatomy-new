import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaHome,
  FaPhone,
  FaUser,
  FaBell,
  FaEnvelope,
  FaCog,
  FaSearch,
  FaLock,
  FaHeart,
  FaShareAlt,
  FaCamera,
  FaMicrophone,
} from "react-icons/fa";
import "../../workCss/theSaseCss/IconScrollAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const IconScrollAnimation = () => {
  const containerRef = useRef(null);
  const mainIconRef = useRef(null);
  const clusterRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000", // Extends the scroll duration
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      tl.to(mainIconRef.current, {
        x: 780,
        y: 15,
        color: "#5555ff",
        ease: "power2.inOut",
      });
      tl.to(mainIconRef.current, {
        scale: 0.2,

        ease: "power2.inOut",
      });
      tl.to(
        ".icon-scroll-cluster-item",
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.5", // Start slightly before main icon completes movement
      );
    },
    { scope: containerRef },
  );

  const clusterIcons = [
    FaHome,
    FaPhone,
    FaUser,
    FaBell,
    FaEnvelope,
    FaCog,
    FaSearch,
    FaLock,
    FaHeart,
    FaShareAlt,
    FaCamera,
    FaMicrophone,
  ];

  return (
    <section className="icon-scroll-main-section" ref={containerRef}>
      <div className="icon-scroll-left">
        <div className="icon-scroll-center-icon" ref={mainIconRef}>
          <FaUser />
        </div>
      </div>
      <div className="icon-scroll-right">
        <div className="icon-scroll-cluster" ref={clusterRef}>
          {clusterIcons.map((Icon, index) => (
            <div
              key={index}
              className={`icon-scroll-cluster-item item-${index + 1}`}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconScrollAnimation;
