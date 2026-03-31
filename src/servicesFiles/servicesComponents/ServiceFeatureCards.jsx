import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../servicesCss/ServiceFeatureCards.css";

const ServiceFeatureCards = ({ services = [] }) => {
  return (
    <section className="service-feature-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="service-feature-swiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="service-feature-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="sub-small-head">{service.title}</h3>
              <p className="sub-small-para">{service.description}</p>
              <Link to={service.link} className="read-more-btn">
                Learn more
                <BsArrowRight className="arrow-icon" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceFeatureCards;
