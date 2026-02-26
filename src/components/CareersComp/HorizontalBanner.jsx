import React, { useLayoutEffect, useRef } from "react";
import "../../css/CareersComponents/HorizontalBanner.css";
import bannerImg from "../../assets/images/Careers-page/scroll-section/alz.png";
import bannerImg1 from "../../assets/images/Careers-page/scroll-section/one.png";
import bannerImg2 from "../../assets/images/Careers-page/scroll-section/two.png";
import bannerImg3 from "../../assets/images/Careers-page/scroll-section/three.png";
// import bannerImg from "../../assets/images/Careers-page/scroll-section/four.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DiPerl } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalBanner() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const careere_data = [
    {
      id: 1,
      title: "Want this type of hair",
      desc: "We’re looking for passionate individuals who want to make a difference. Join our team and be a part of something special.",
      img: bannerImg,
    },
    {
      id: 2,
      title: "Want this type of hair",
      desc: "We’re looking for passionate individuals who want to make a difference. Join our team and be a part of something special.",
      img: bannerImg2,
    },
    {
      id: 3,
      title: "We’re Hiring",
      desc: "We’re looking for passionate individuals who want to make a difference. Join our team and be a part of something special.",
      img: bannerImg1,
    },
    {
      id: 4,
      title: "We’re Hiring",
      desc: "We’re looking for passionate individuals who want to make a difference. Join our team and be a part of something special.",
      img: bannerImg3,
    },
    {
      id: 5,
      title: "We’re Hiring",
      desc: "We’re looking for passionate individuals who want to make a difference. Join our team and be a part of something special.",
      img: bannerImg,
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollValue =
        containerRef.current.scrollWidth - window.innerWidth + 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollValue}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // SVG Path Length Logic
      const pathLength = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      tl.to(
        containerRef.current,
        {
          x: -scrollValue,
          ease: "none",
        },
        0,
      ).to(
        pathRef.current,
        {
          strokeDashoffset: 0,
          ease: "none",
        },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="HorizontalBanner-section" ref={sectionRef}>
        <div
          className="HorizontalBanner-scroll-sticky-container"
          ref={containerRef}
        >
          <div className="careers-start-circle-container">
            <svg viewBox="0 0 100 100" className="careers-start-circle-svg">
              <circle cx="50" cy="50" r="40" fill="black" />
            </svg>
          </div>
          <svg
            className="careers-zigzag-svg"
            viewBox="0 0 2000 500"
            preserveAspectRatio="none"
          >
            <defs>
              <mask id="careers-line-mask">
                <path
                  ref={pathRef}
                  d="M 167 250 Q 333 450, 500 250 T 833 250 T 1167 250 T 1500 250 T 1833 250 L 1870 250"
                />
              </mask>
            </defs>

            <path
              className="careers-zigzag-line"
              mask="url(#careers-line-mask)"
              d="M 167 250 Q 333 450, 500 250 T 833 250 T 1167 250 T 1500 250 T 1833 250 L 1870 250"
            />
          </svg>
          <div className="HorizontalBanner-scroll-sticky-content">
            <h1 className="big-head-text">We’re Hiring</h1>

            <p className="para-text">
              We’re looking for passionate individuals who want to make a
              difference. Join our team and be a part of something special.
            </p>
          </div>

          {careere_data.map((item) => (
            <div
              key={item.id}
              className="HorizontalBanner-scroll-sticky-content-right-outer"
            >
              <div className="HorizontalBanner-scroll-sticky-content-right">
                <div className="HorizontalBanner-scroll-sticky-content-right-top">
                  <img src={item.img} alt="" />
                </div>
                <div className="HorizontalBanner-scroll-sticky-content-right-bottom">
                  <DiPerl size={60} />
                  <h1 className="sub-head-text">{item.title}</h1>
                  <p className="sub-para-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
