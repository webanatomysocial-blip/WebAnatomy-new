import { useState, useEffect, useCallback } from "react";
import "../../css/CareersComponents/GallerySection.css";

// Gallery images
import img1 from "../../assets/images/Careers-page/gallerySection/2025-08-10-1.webp";
import img2 from "../../assets/images/Careers-page/gallerySection/2025-08-10-2.webp";
import img3 from "../../assets/images/Careers-page/gallerySection/2025-08-10-3.webp";
import img4 from "../../assets/images/Careers-page/gallerySection/2025-08-10-4.webp";
import img5 from "../../assets/images/Careers-page/gallerySection/2025-08-10.webp";
import img6 from "../../assets/images/Careers-page/gallerySection/IMG_20250328_155838-min-scaled.webp";
import img7 from "../../assets/images/Careers-page/gallerySection/IMG_2471-01-scaled.webp";
import img8 from "../../assets/images/Careers-page/gallerySection/IMG_2471-02-scaled.webp";
import img9 from "../../assets/images/Careers-page/gallerySection/IMG_2471-03-scaled.webp";
import img10 from "../../assets/images/Careers-page/gallerySection/IMG_2471-04-scaled.webp";
import img11 from "../../assets/images/Careers-page/gallerySection/IMG_2471-07-scaled.webp";
import img12 from "../../assets/images/Careers-page/gallerySection/WhatsApp-Image-2025-09-05-at-6.34.29-PM.webp";
import img13 from "../../assets/images/Careers-page/gallerySection/WhatsApp-Image-2025-09-05-at-6.36.17-PM.webp";
import img14 from "../../assets/images/Careers-page/gallerySection/WhatsApp-Image-2025-09-05-at-6.48.08-PM-1.webp";
import img15 from "../../assets/images/Careers-page/gallerySection/WhatsApp-Image-2025-09-05-at-6.48.08-PM.webp";
import img16 from "../../assets/images/Careers-page/gallerySection/WhatsApp-Image-2025-09-05-at-6.48.09-PM.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

function Lightbox({ index, onClose, onPrev, onNext }) {
  const src = images[index];


  // Share handler
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Life at Web Anatomy",
          text: "Check out this photo from Web Anatomy!",
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          className="lb-btn lb-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Prev */}
        <button
          className="lb-btn lb-prev"
          onClick={onPrev}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Image */}
        <div className="lb-img-wrap">
          <img src={src} alt={`Gallery ${index + 1}`} className="lb-img" />
        </div>

        {/* Next */}
        <button className="lb-btn lb-next" onClick={onNext} aria-label="Next">
          ›
        </button>

        {/* Action bar */}
        <div className="lb-actions">
          <span className="lb-counter">
            {index + 1} / {images.length}
          </span>
          <div className="lb-action-btns">
            <button className="lb-action-btn" onClick={handleShare}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (i) => setActiveIndex(i);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, goPrev, goNext]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-section-header">
          <h2 className="big-head-text-white">Life at Web Anatomy</h2>
          <p className="para-text-white">
            Beyond the work, it&apos;s the people and moments that make us who
            we are. Here&apos;s a glimpse into our everyday life.
          </p>
        </div>

        <div className="gallery-bento-grid">
          {images.map((src, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            >
              <img src={src} alt={`Gallery ${i + 1}`} />
              <div className="gallery-item-overlay">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          index={activeIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
