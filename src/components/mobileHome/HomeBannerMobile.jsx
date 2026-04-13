import React, { useState, useEffect } from "react";
import "../../css/MobileCssHome/HomeBannerMobile.css";
import bannerPoster from "../../assets/images/Home-images/banner-images/home-banner.jpg";

const HomeBannerMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="mobile-home-banner">
      {/* Background Overlay to ensure readability */}
      <div className="mobile-banner-overlay"></div>

      {/* Top Right Container for Video Button and Services */}
      <div className="mobile-top-right-content">
        <div className="mobile-video-preview-wrapper" onClick={toggleModal}>
          <video
            src="/assets/videos/banner-video/Web-anatomy-showreel.mp4"
            muted
            loop
            playsInline
            autoPlay
            poster={bannerPoster}
            className="mobile-preview-video"
          />
          <div className="preview-overlay-content">
            <div className="preview-play-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 6L17 12L7 18V6Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>

        <p className="mobile-services-list">
          UI/UX Design
          <br />
          Web Development
          <br />
          Brand Identity Design
          <br />
          Ongoing support
        </p>
      </div>

      {/* Main Bottom Left Content */}
      <div className="mobile-banner-main-content">
        <h1 className="mobile-banner-title">
          Engineeringss <br /> Digital Sophistication
        </h1>
        <p className="mobile-banner-description">
          Design-led, engineering-driven digital agency building
          high-performance digital products and experiences.
        </p>
      </div>

      {/* Video Modal Popup */}
      <div
        className={`video-modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div
          className="banner-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-modal-btn" onClick={toggleModal}>
            &times;
          </button>
          {isModalOpen && (
            <video
              src="/assets/videos/banner-video/Web-anatomy-showreel.mp4"
              autoPlay
              loop
              controls
              playsInline
              className="modal-video"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBannerMobile;
