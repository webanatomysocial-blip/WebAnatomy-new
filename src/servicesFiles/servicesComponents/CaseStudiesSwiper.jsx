import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "../servicesCss/CaseStudiesSwiper.css";
import { worksMetadata } from "../../works/metadata";
import { Link } from "react-router-dom";

const CaseStudiesSwiper = ({ category }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="swiper-section-wrap">
      <div className="swiper-header-wrap">
        <h2 className="head-text">Our {category} Design Case Studies</h2>
        <div className="swiper-nav-wrap">
          <button ref={prevRef} className="nav-btn prev-btn">
            <BsArrowLeft />
          </button>
          <button ref={nextRef} className="nav-btn next-btn">
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="swiper-slider-wrap">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Give proper instances so navigation buttons work properly
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.2 },
          }}
          className="case-studies-swiper"
          grabCursor={true}
        >
          {worksMetadata
            .filter((work) => !work.hasPopup && work.category === category)
            .map((work, index) => {
              const CardContent = (
                <>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="swiper-card-image"
                    draggable="false"
                  />
                  <div className="swiper-card-overlay">
                    <h3 className="swiper-card-title">{work.title}</h3>
                  </div>
                </>
              );

              return (
                <SwiperSlide key={index}>
                  {work.hasPopup ? (
                    <div
                      className="swiper-card-item"
                      style={{ cursor: "pointer" }}
                    >
                      {CardContent}
                    </div>
                  ) : (
                    <Link
                      to={`/works/${work.slug}`}
                      className="swiper-card-item"
                      style={{ cursor: "pointer" }}
                    >
                      {CardContent}
                    </Link>
                  )}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudiesSwiper;
