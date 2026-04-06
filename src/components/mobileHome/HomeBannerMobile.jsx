import React, { useState, useEffect } from "react";
import "../../css/MobileCssHome/HomeBannerMobile.css";

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
      {/* Play Video Button - Top Right */}
      <div className="mobile-video-btn-container">
        <button className="play-reel-btn" onClick={toggleModal}>
          <svg
            className="play-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6L17 12L7 18V6Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          ( Show Reel )
        </button>
          <p className="para-text-white mobile-absolute-text">
          UI/UX Design • Web Development • Brand Identity • Ongoing Support
        </p>
      </div>

      {/* Main Content - Bottom Left */}
      <div className="mobile-banner-content">
       
        <h1 className="mobile-banner-head">
          Engineering <br /> Digital Sophistication
        </h1>
        <p className="mobile-banner-para">
          Design-led, engineering-driven digital agency building high‑performance
          digital products and experiences.
        </p>
      </div>

      {/* Video Modal Popup */}
      <div
        className={`video-modal-overlay ${isModalOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal-btn" onClick={toggleModal}>
            ×
          </button>
          {isModalOpen && (
            <video
              src="/assets/videos/banner-video/Web-anatomy-showreel.mp4"
              autoPlay
              loop
              controls
              className="modal-video"
            />
          )}
        </div>
       
      </div>
    </section>
  );
};

export default HomeBannerMobile;
