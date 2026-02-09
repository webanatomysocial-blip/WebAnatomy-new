"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import one from "../../assets/images/GoalsOurPriority/one.png";
import three from "../../assets/images/GoalsOurPriority/three.png";

import car1 from "../../assets/images/GoalsOurPriority/car1.png";

import "swiper/css";
import "swiper/css/pagination";
import "@/css/HomeComponents/GoalsOurPriority.css";
import { BsArrowRight } from "react-icons/bs";

export default function GoalsOurPriority() {
  const carimg = [
    {
      img: car1,
    },
    {
      img: car1,
    },
    {
      img: car1,
    },
    {
      img: car1,
    },
    {
      img: car1,
    },
    {
      img: car1,
    },
  ];
  return (
    <section className="goals-container">
      <div className="goals-head-text">
        <h5 className="head-text">Your Goals Our Priority</h5>
      </div>

      <div className="goals-cards-container">
        <div className="goal-card light">
          <div className="goal-card-content">
            <div className="goal-card-header">
              <h2 className="sub-head-text">24/7 Priority care</h2>
              <p className="sub-para-text">
                receive priority treatment for urgent tasks, with an average
                response time of 24 hours for high-priority clients
              </p>
              <Link href="/services" className="gradient-bg-btn">
                Explore opportunities{" "}
                <span className="icon-btn">
                  <BsArrowRight className="icon-inside-btn-1" />
                  <BsArrowRight className="icon-inside-btn-2" />
                </span>
              </Link>
            </div>
          </div>

          <div className="gradient-overlay-top"></div>

          <div className="goal-card-image-bottom">
            <Image
              src={one}
              alt="Priority care"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="goal-card dark">
          <div className="goal-swiper-container">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1} // This controls the "one at a time" logic
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="mySwiper"
              style={{ height: "100%", borderRadius: "20px" }}
            >
              {carimg.map((slide, index) => (
                <SwiperSlide key={index}>
                  {/* Ensure the parent div fills the slide */}
                  <div className="goal-swiper-slide">
                    <Image
                      src={slide.img}
                      alt={`Slide ${index + 1}`}
                      className="goal-slide-img"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="goal-card-details">
            <h2 className="sub-head-text-white">You Will Like It Here!</h2>
            <Link href="/services" className="gradient-bg-btn">
              Explore opportunities{" "}
              <span className="icon-btn">
                <BsArrowRight className="icon-inside-btn-1" />
                <BsArrowRight className="icon-inside-btn-2" />
              </span>
            </Link>
          </div>
        </div>

        <div className="goal-card light">
          <div className="goal-card-content">
            <div className="goal-card-header">
              <h2 className="sub-head-text">Brandkit at your fingertips</h2>
              <p className="sub-para-text">
                Receive a full branding toolkit, from logos to color schemes and
                typography
              </p>
            </div>
          </div>

          <div className="gradient-overlay-top"></div>

          <div className="goal-card-image-bottom">
            <Image
              src={three}
              alt="Brandkit"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
