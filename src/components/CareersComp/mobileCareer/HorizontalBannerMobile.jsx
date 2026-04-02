import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../css/CareersComponents/HorizontalBannerMobile.css";

import bannerImg from "../../../assets/images/Careers-page/scroll-section/four.png";
import bannerImg1 from "../../../assets/images/Careers-page/scroll-section/one.png";
import bannerImg2 from "../../../assets/images/Careers-page/scroll-section/two.png";
import bannerImg3 from "../../../assets/images/Careers-page/scroll-section/three.png";
import bannerImg4 from "../../../assets/images/Careers-page/scroll-section/five.png";

const careersData = [
  {
    id: 1,
    title: "Build Your Career",
    desc: "Join a team of innovators and creators who are passionate about building world-class digital products.",
    img: bannerImg,
  },
  {
    id: 2,
    title: "Collaborative Culture",
    desc: "We foster an inclusive, collaborative environment where every voice is heard and every idea is valued.",
    img: bannerImg2,
  },
  {
    id: 3,
    title: "Grow With Us",
    desc: "We invest in your growth with mentorship, learning budgets, and opportunities to level up your skills.",
    img: bannerImg1,
  },
  {
    id: 4,
    title: "Innovate Every Day",
    desc: "Work on challenging problems that push you to think creatively and deliver meaningful impact.",
    img: bannerImg3,
  },
  {
    id: 5,
    title: "Be The Best",
    desc: "We're looking for exceptional talent who want to leave a mark and shape the future of digital experiences.",
    img: bannerImg4,
  },
];

export default function HorizontalBannerMobile() {
  return (
    <section className="career-mob-banner-section">
      {/* Hero heading */}
      <div className="career-mob-banner-hero">
        <h1 className="big-head-text career-mob-banner-heading">We're Hiring</h1>
        <p className="para-text career-mob-banner-subtext">
          We're looking for passionate individuals who want to make a difference.
          Join our team and be a part of something special.
        </p>
      </div>

      {/* Swiper cards */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        className="career-mob-banner-swiper"
      >
        {careersData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="career-mob-banner-card">
              <div className="career-mob-banner-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="career-mob-banner-card-body">
                <h2 className="sub-head-text career-mob-banner-card-title">
                  {item.title}
                </h2>
                <p className="sub-para-text career-mob-banner-card-desc">
                  {item.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
