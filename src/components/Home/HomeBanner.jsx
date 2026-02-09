"use client";

import "@/css/HomeComponents/HomeBanner.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeBanner() {
  const textRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const videoContainer = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-banner",
        start: "2% top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
    videoContainer
      .fromTo(
        ".home-banner-video-container",
        {
          top: "200px",
          right: "260px",
          width: "130px",
          x: "0%",
          y: "0%",
        },
        {
          top: "50%",
          right: "50%",
          x: "50%",
          borderRadius: "20px",
          duration: 1,
          width: "90%",
          height: "700px",
        },
      )
      .to(
        ".background-overlay-banner",
        {
          opacity: 1,
        },
        "<",
      )
      .to(
        ".home-banner-video-container .para-text-white",
        {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            if (textRef.current) containerTextChange();
          },
        },
        "<",
      )
      .to(
        ".home-banner-video-container .para-text-white",
        {
          opacity: 1,

          color: "var(--black-color)",
          duration: 0.2,
          marginLeft: "20px",
          onReverseComplete: () => {
            if (textRef.current) {
              textRef.current.innerText = "( Show Reel )";
              textRef.current.style.color = "var(--white-color)";
              textRef.current.style.marginLeft = "0px";
            }
          },
        },
        ">",
      );
  }, []);

  const containerTextChange = () => {
    if (textRef.current) {
      textRef.current.innerText =
        "Design-led, engineering-driven digital agency building high‑performance";
    }
  };
  return (
    <>
      <section className="home-banner">
        <div className="background-overlay-banner"></div>
        <p className="para-text-white home-absolute-text">
          UI/UX Design Web Development Brand Identity Design Ongoing support
        </p>
        <div className="home-banner-video-container">
          <p ref={textRef} className="para-text-white">
            ( Show Reel )
          </p>
          <video
            src="/assets/videos/banner-video/Web-anatomy-showreel.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="banner-video"
          />
        </div>
        <div className="home-banner-top">
          <h1 className="big-head-text-white">
            Engineering <br /> Digital Sophistication
          </h1>
          <p className="para-text-white">
            Design-led, engineering-driven digital agency building
            high‑performance digital products <br /> and experiences.
          </p>
        </div>
      </section>
    </>
  );
}
