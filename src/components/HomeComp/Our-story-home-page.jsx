"use client";

import React, { useState } from "react";
import "../../css/HomeComponents/OurStoryHome.css";
import { BsArrowRight } from "react-icons/bs";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const successStoriesData = [
  { number: "80+", title: "Success Stories", desc: "Success Stories Success" },
  { number: "17+", title: "Global Clients", desc: "Trusted by top brands" },
  { number: "7+", title: "Expertise", desc: "Design + Dev Excellence" },
];

export default function OurStoryHomePage() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  return (
    <div className="our-story-home">
      <div className="our-story-main">
        {/* Left Section */}
        <div className="left-section">
          {/* Vertical Carousel Card - Now using Swiper */}
          <div className="success-stories-card">
            <div style={{ width: "80%", height: "100%" }}>
              <Swiper
                direction={"vertical"}
                modules={[Autoplay, Pagination, Mousewheel]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                mousewheel={false}
                loop={true}
                className="success-stories-swiper"
                onAutoplayTimeLeft={(s, time, progress) => {
                  const indicators =
                    document.querySelectorAll(".indicator-fill");
                  indicators.forEach((ind, i) => {
                    if (i < s.realIndex) {
                      ind.style.height = "100%";
                      ind.style.transition = "none";
                    } else if (i > s.realIndex) {
                      ind.style.height = "0%";
                      ind.style.transition = "none";
                    } else {
                      ind.style.height = `${(1 - progress) * 100}%`;
                      ind.style.transition = "height 0.1s linear";
                    }
                  });
                }}
                onSlideChange={(swiper) =>
                  setCurrentStoryIndex(swiper.realIndex)
                }
              >
                {successStoriesData.map((story, index) => (
                  <SwiperSlide key={index}>
                    <div className="story-content">
                      <p className="head-text">{story.title}</p>
                      <h2 className="story-number">{story.number}</h2>
                      <p className="story-desc">{story.desc}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="carousel-indicators">
              {successStoriesData.map((_, index) => (
                <div className="indicator-track" key={index}>
                  <div className="indicator-fill"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section">
            <video
              src="/assets/videos/work-page/banner.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="right-section">
          <h2 className="head-text-white">Our Story</h2>
          <p className="para-text-white">
            We&apos;re a purpose-led crew of dreamers and doers — driven by
            design, obsessed with building what actually matters. Born into a
            world full of digital noise, we chose clarity.
          </p>
          <p className="para-text-white">
            We craft meaningful experiences, digital products, and partnerships
            that don&apos;t just look good; they move the needle.
          </p>

          <Link to="/about" className="white-bg-btn">
            About US{" "}
            <span className="icon-btn">
              <BsArrowRight className="icon-inside-btn-1" />
              <BsArrowRight className="icon-inside-btn-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
