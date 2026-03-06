import React, { useRef } from "react";
import img from "../../WorkImages/ToggleNow/testing-dummy.webp";
import "../../workCss/ToggleNowCss/TwoImagesScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TwoImagesScroll() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(".TwoImagesScroll-work-section img:nth-child(1)", {
        y: "50px",
        ease: "none",
      }).to(
        ".TwoImagesScroll-work-section img:nth-child(2)",
        {
          y: "-50px",

          ease: "none",
        },
        "<",
      );
    },
    { scope: containerRef },
  );

  return (
    <section className="TwoImagesScroll-work-section" ref={containerRef}>
      <img src={img} alt="" />
      <img src={img} alt="" />
    </section>
  );
}
