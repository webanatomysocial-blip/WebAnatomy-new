import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/CareersComponents/HorizontalBannerMobile.css";

import bannerImg from "../../assets/images/Careers-page/scroll-section/four.png";
import bannerImg1 from "../../assets/images/Careers-page/scroll-section/one.png";
import bannerImg2 from "../../assets/images/Careers-page/scroll-section/two.png";
import bannerImg3 from "../../assets/images/Careers-page/scroll-section/three.png";
import bannerImg4 from "../../assets/images/Careers-page/scroll-section/five.png";

export default function HorizontalBannerMobile() {
  const careere_data = [
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

  return (
    <section className="HorizontalBannerMobile-section">
      <div className="HorizontalBannerMobile-header">
        <h1 className="head-text">We’re Hiring</h1>
        <p className="para-text">
          We’re looking for passionate individuals who want to make a
          difference. Join our team and be a part of something special.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1.15}
        spaceBetween={20}
        centeredSlides={false}
        pagination={{ clickable: true }}
        className="careers-mobile-swiper"
      >
        {careere_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="careers-mobile-card">
              <div className="careers-mobile-card-top">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="careers-mobile-card-bottom">
                <h3 className="sub-head-text">{item.title}</h3>
                <p className="sub-para-text">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
