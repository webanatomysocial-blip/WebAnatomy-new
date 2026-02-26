import React, { useLayoutEffect, useRef } from "react";
import "../../css/AboutComponents/AboutBanner.css";
import image1 from "../../assets/images/about-page/BANNER/1.png";
import image2 from "../../assets/images/about-page/BANNER/2.png";
import image3 from "../../assets/images/about-page/BANNER/3.png";
import image4 from "../../assets/images/about-page/BANNER/4.png";
import image5 from "../../assets/images/about-page/BANNER/5.png";
import image6 from "../../assets/images/about-page/BANNER/6.png";
import image7 from "../../assets/images/about-page/BANNER/7.png";
import image8 from "../../assets/images/about-page/BANNER/8.png";
import image9 from "../../assets/images/about-page/BANNER/9.png";
import image10 from "../../assets/images/about-page/BANNER/10.png";
import image11 from "../../assets/images/about-page/BANNER/11.png";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import scrollDown from "../../assets/images/about-page/scroll-down.gif";

const AboutBanner = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const headContainerRef = useRef(null);
  const scrollDownRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = imageContainerRef.current.querySelectorAll("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      // Animate images flipping and fading
      tl.to(images, {
        rotateX: 90,
        opacity: 0,
        stagger: {
          amount: 1,
        },
        ease: "power4.inOut",
      })
        .to(
          headContainerRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power4.out",
          },
          "-=0.6",
        )
        .to(
          scrollDownRef.current,
          {
            opacity: 0,
            ease: "power4.out",
          },
          "+=0.6",
        )
        .to(
          headContainerRef.current,
          {
            zIndex: 1000,
          },
          "-=0.01",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-page-banner">
      <div ref={imageContainerRef} className="image-flip-about-page-container">
        <img src={image1} alt="image1" />
        <img src={image1} alt="image1" />
        <img src={image1} alt="image1" />
        <img src={image1} alt="image1" />
        <img src={image1} alt="image1" />
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
        <img src={image5} alt="image5" />
        <img src={image6} alt="image6" />
        <img src={image7} alt="image7" />
        <img src={image8} alt="image8" />
        <img src={image9} alt="image9" />
        <img src={image10} alt="image10" />
        <img src={image11} alt="image11" />
      </div>

      <div ref={headContainerRef} className="about-page-banner-head-container">
        <p className="sub-head-text">About Us</p>
        <h1 className="head-text">
          A design-led, engineering-driven <br /> studio building sophisticated{" "}
          <br /> digital products.
        </h1>
        <Link to="/contact" className="black-bg-btn">
          Contact Us
          <span className="icon-btn">
            <BsArrowRight className="icon-inside-btn-1" />
            <BsArrowRight className="icon-inside-btn-2" />
          </span>
        </Link>
      </div>

      <img
        src={scrollDown}
        alt="scrollDown"
        className="scroll-down-img-about-page"
        ref={scrollDownRef}
      />
    </section>
  );
};

export default AboutBanner;
