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

// All images for the grid lightbox
const allImages = [
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

// Stories: each category has its own set of images
const STORIES = [
  { label: "Our Team", cover: img1, images: [img1, img2, img3] },
  { label: "Our Place", cover: img4, images: [img4, img5, img6] },
  { label: "Workspace", cover: img7, images: [img7, img8, img9] },
  { label: "Events", cover: img10, images: [img10, img11, img12] },
  { label: "Sports", cover: img13, images: [img13, img14] },
  { label: "Moments", cover: img15, images: [img15, img16] },
];

// ─── Lightbox: works with any subset of images ───────────────────────────────
function Lightbox({
  imageSet,
  localIndex,
  categoryLabel,
  onClose,
  onPrev,
  onNext,
}) {
  const src = imageSet[localIndex];
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const AUTO_PLAY_TIME = 3000;

  const minSwipeDistance = 40;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = 10;
    const step = (interval / AUTO_PLAY_TIME) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          onNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [localIndex, onNext, isPaused]);

  useEffect(() => {
    setProgress(0);
  }, [localIndex]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Life at Web Anatomy",
          text: "Check out this photo!",
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  const prevLocalIndex = (localIndex - 1 + imageSet.length) % imageSet.length;
  const nextLocalIndex = (localIndex + 1) % imageSet.length;

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-modal" onClick={(e) => e.stopPropagation()}>
        {/* ── Top bar: progress + category label + close ── */}
        <div className="lb-top-bar">
          {categoryLabel && (
            <div className="lb-category-info">
              <span className="lb-category-dot" />
              <span className="lb-category-name">{categoryLabel}</span>
            </div>
          )}
          <div className="lb-progress-container">
            {imageSet.map((_, i) => (
              <div key={i} className="lb-progress-segment">
                <div
                  className="lb-progress-fill"
                  style={{
                    width:
                      i === localIndex
                        ? `${progress}%`
                        : i < localIndex
                          ? "100%"
                          : "0%",
                  }}
                />
              </div>
            ))}
          </div>
          <button
            className="lb-btn lb-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="lb-carousel-container">
          <button className="lb-btn lb-prev" onClick={onPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="lb-side-wrap lb-side-prev" onClick={onPrev}>
            <img
              src={imageSet[prevLocalIndex]}
              alt="Previous"
              className="lb-side-img"
            />
          </div>
          <div
            className="lb-img-wrap"
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={`${categoryLabel}-${localIndex}`}
              src={src}
              alt={`${localIndex + 1}`}
              className="lb-img lb-img-animate"
            />
          </div>
          <div className="lb-side-wrap lb-side-next" onClick={onNext}>
            <img
              src={imageSet[nextLocalIndex]}
              alt="Next"
              className="lb-side-img"
            />
          </div>

          <button className="lb-btn lb-next" onClick={onNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="lb-actions">
          <span className="lb-counter">
            {localIndex + 1} / {imageSet.length}
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

// ─── Main component ───────────────────────────────────────────────────────────
export default function GallerySection() {
  // Grid lightbox (uses allImages)
  const [gridIndex, setGridIndex] = useState(null);

  // Story lightbox state: which story category + which image within it
  const [storyState, setStoryState] = useState(null); // { storyIdx, localIdx }

  // ── Grid lightbox handlers ──
  const openGrid = (i) => setGridIndex(i);
  const closeGrid = () => setGridIndex(null);
  const gridPrev = useCallback(
    () => setGridIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [],
  );
  const gridNext = useCallback(
    () => setGridIndex((i) => (i + 1) % allImages.length),
    [],
  );

  // ── Story lightbox handlers ──
  const openStory = (storyIdx) => setStoryState({ storyIdx, localIdx: 0 });
  const closeStory = () => setStoryState(null);

  const storyNext = useCallback(() => {
    setStoryState((prev) => {
      if (!prev) return null;
      const story = STORIES[prev.storyIdx];
      if (prev.localIdx + 1 < story.images.length) {
        // Next image in same category
        return { ...prev, localIdx: prev.localIdx + 1 };
      }
      // Last image: move to next category or close
      const nextStoryIdx = prev.storyIdx + 1;
      if (nextStoryIdx < STORIES.length) {
        return { storyIdx: nextStoryIdx, localIdx: 0 };
      }
      return null; // all categories done — close
    });
  }, []);

  const storyPrev = useCallback(() => {
    setStoryState((prev) => {
      if (!prev) return null;
      if (prev.localIdx - 1 >= 0) {
        return { ...prev, localIdx: prev.localIdx - 1 };
      }
      // First image: go back to previous category (last image of it)
      const prevStoryIdx = prev.storyIdx - 1;
      if (prevStoryIdx >= 0) {
        const prevStory = STORIES[prevStoryIdx];
        return {
          storyIdx: prevStoryIdx,
          localIdx: prevStory.images.length - 1,
        };
      }
      return prev; // already at the very start
    });
  }, []);

  // ── Keyboard navigation ──
  useEffect(() => {
    const isOpen = gridIndex !== null || storyState !== null;
    if (!isOpen) return;
    const handler = (e) => {
      if (gridIndex !== null) {
        if (e.key === "ArrowLeft") gridPrev();
        if (e.key === "ArrowRight") gridNext();
        if (e.key === "Escape") closeGrid();
      } else {
        if (e.key === "ArrowLeft") storyPrev();
        if (e.key === "ArrowRight") storyNext();
        if (e.key === "Escape") closeStory();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [gridIndex, storyState, gridPrev, gridNext, storyPrev, storyNext]);

  useEffect(() => {
    const isOpen = gridIndex !== null || storyState !== null;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [gridIndex, storyState]);

  const activeStory = storyState ? STORIES[storyState.storyIdx] : null;

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

        {/* ── Stories Strip ── */}
        <div className="gallery-stories-strip">
          {STORIES.map((story, i) => (
            <button
              key={i}
              className="gallery-story-btn"
              onClick={() => openStory(i)}
              aria-label={story.label}
            >
              <div className="gallery-story-ring">
                <img
                  src={story.cover}
                  alt={story.label}
                  className="gallery-story-img"
                />
              </div>
              <span className="gallery-story-label">{story.label}</span>
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="gallery-bento-grid">
          {allImages.map((src, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => openGrid(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openGrid(i)}
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

      {/* Grid lightbox — uses allImages */}
      {gridIndex !== null && (
        <Lightbox
          imageSet={allImages}
          localIndex={gridIndex}
          categoryLabel="All Photos"
          onClose={closeGrid}
          onPrev={gridPrev}
          onNext={gridNext}
        />
      )}

      {/* Story lightbox — uses only that category's images */}
      {storyState !== null && activeStory && (
        <Lightbox
          imageSet={activeStory.images}
          localIndex={storyState.localIdx}
          categoryLabel={activeStory.label}
          onClose={closeStory}
          onPrev={storyPrev}
          onNext={storyNext}
        />
      )}
    </>
  );
}
