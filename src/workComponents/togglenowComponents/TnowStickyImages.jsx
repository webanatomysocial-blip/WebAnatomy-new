import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/togglenowcss/TnowStickyImages.css";
import img1 from "../../WorkImages/Tnow/ipad.webp";
import img2 from "../../WorkImages/Tnow/phone-img.png";

gsap.registerPlugin(ScrollTrigger);

export default function TnowStickyImages() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".imgright", {
        x: "-10vw",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
          markers: false,
        },
      });

      gsap.to(".imgleft", {
        x: "-30vw",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
          markers: false,
        },
      });

      gsap.to(".imgcenter", {
        x: "30vw",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=600",
          scrub: 1,
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="tnow-sticky-images-wrapper" ref={containerRef}>
      <div className="triggertab">
        <img className="imgleft" src={img2} alt="" />
        <img className="imgcenter" src={img1} alt="" />
        <img className="imgright" src={img2} alt="" />
      </div>
    </section>
  );
}
