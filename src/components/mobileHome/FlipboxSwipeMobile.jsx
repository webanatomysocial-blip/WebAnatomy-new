import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { worksMetadata } from "../../works/metadata";
import { useWorkPopup } from "../../context/WorkPopupContext";

import "swiper/css";
import "swiper/css/pagination";
import "../../css/MobileCssHome/FlipboxSwipeMobile.css";

// Fallback images (same as FlipboxCarsoule)
import img1 from "../../assets/images/Home-images/flipbox/flip-1.png";
import img2 from "../../assets/images/Home-images/flipbox/flip-2.png";
import img3 from "../../assets/images/Home-images/flipbox/flip-3.png";
import img4 from "../../assets/images/Home-images/flipbox/flip-4.png";

const FALLBACK_IMAGES = [img1, img2, img3, img4];

export default function FlipboxSwipeMobile() {
  const { openWorkPopup } = useWorkPopup();

  const filteredWorks = worksMetadata.filter((work) => !work.hasPopup);

  const handleCardClick = (e, work) => {
    if (work?.hasPopup) {
      e.preventDefault();
      openWorkPopup(work);
    }
  };

  return (
    <div className="mobile-casestudies-section">
      {/* Header */}
      <div className="mobile-casestudies-header">
        <h2 className="head-text">Case Studies</h2>
        <a href="/contact" className="read-more-btn">
          Read More
          <BsArrowRight className="arrow-icon" />
        </a>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.15}
        spaceBetween={14}
        centeredSlides={false}
        pagination={{ clickable: true }}
        className="mobile-casestudies-swiper"
      >
        {filteredWorks.map((work, index) => {
          const fallbackImg = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
          const cardImg = work?.image || fallbackImg;

          return (
            <SwiperSlide key={work?.id || index}>
              <Link
                to={`/works/${work?.slug}`}
                target="_blank"
                className="mobile-case-card"
                onClick={(e) => handleCardClick(e, work)}
              >
                <img src={cardImg} alt={work?.title || "Case Study"} />
                <div className="mobile-case-overlay">
                  <h3>{work?.title || "Case Study"}</h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
