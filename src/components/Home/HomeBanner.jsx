"use client";

import "@/css/HomeComponents/HomeBanner.css";
import { gsap } from "gsap";

import { useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeBanner() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const videoContainer = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-banner",
        start: "2% top",
        end: "bottom bottom",
        scrub: 0.1,
        markers: true,
      },
    });
    videoContainer
      .fromTo(
        ".home-banner-video-container",
        {
          top: "200px",
          right: "260px",
          width: "100px",
          x: "0%",
          y: "0%",
        },
        {
          top: "560px",
          right: "50%",
          x: "50%",
          duration: 1,
          width: "90%",
          height: "200px",
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
          color: "var(--black-color)",
        },
        "<",
      );
  }, []);
  return (
    <>
      <div className="home-banner">
        <p className="para-text-white home-absolute-text">
          UI/UX Design Web Development Brand Identity Design Ongoing support
        </p>
        <div className="home-banner-video-container">
          <p
            className="para-text-white"
            style={{
              fontSize: "10px",
            }}
          >
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
          <div className="background-overlay-banner"></div>
          <h1 className="big-head-text-white">
            Engineering <br /> Digital Sophistication
          </h1>
          <p className="para-text-white">
            Design-led, engineering-driven digital agency building
            high‑performance digital products <br /> and experiences.
          </p>
        </div>
      </div>
    </>
  );
}
