import React, { useEffect, useRef } from "react";
import bgimg from "../../assets/images/Home-images/zoomsection/bg-glass-2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/ZoomScroll.css";

gsap.registerPlugin(ScrollTrigger);

const TABS = [
  {
    id: 1,
    label: "Design",
    heading: "Design",
    content: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 2,
    label: "Engineering",
    heading: "Engineering",
    content: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
  {
    id: 3,
    label: "Marketing",
    heading: "Marketing",
    content: "lorem ipsum dolor sit amet consectetur adipisicing elit ",
  },
];

const ZoomScroll = () => {
  const imageExpandRef = useRef(null);
  const activeTabRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─── PART 2 & 3: Image Expansion & Sticky Tabs ────────────────────
      const tabIndicators =
        imageExpandRef.current.querySelectorAll(".zs-tab-indicator");
      const tabLabels =
        imageExpandRef.current.querySelectorAll(".zs-tab-label");
      const contents =
        imageExpandRef.current.querySelectorAll(".zs-tab-content");
      const headings =
        imageExpandRef.current.querySelectorAll(".head-text-white");

      function activateTab(index) {
        tabIndicators.forEach((el, i) =>
          el.classList.toggle("active", i === index),
        );
        tabLabels.forEach((el, i) =>
          el.classList.toggle("active", i === index),
        );
        contents.forEach((el, i) => el.classList.toggle("active", i === index));
        headings.forEach((el, i) => el.classList.toggle("active", i === index));
        if (activeTabRef.current !== index) {
          activeTabRef.current = index;
        }
      }

      activateTab(-1); // Prevent tab from activating until image expands

      const expandTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageExpandRef.current,
          start: "top top",
          end: "+=600%", // Extends the scroll pin vertically (approx 2 big scroll wheels per tab)
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Fade in tabs & overlay right as the image approaches full screen (0.15 to 0.25)
            const tabsOpacity = gsap.utils.clamp(0, 1, (progress - 0.15) * 10);
            gsap.set(".zs-tabs-sticky", { opacity: tabsOpacity });
            gsap.set(".zs-img-overlay", { opacity: tabsOpacity * 0.8 });

            if (progress < 0.25) {
              // Image still expanding -> keep tabs un-animated
              activateTab(-1);
            } else {
              // Map the remaining 75% of the scroll space to the 3 tabs explicitly
              const tabProgress = (progress - 0.25) / 0.75;
              let tabIndex = Math.floor(tabProgress * TABS.length);
              if (tabIndex >= TABS.length) tabIndex = TABS.length - 1;
              if (tabIndex < 0) tabIndex = 0;
              activateTab(tabIndex);
            }
          },
        },
      });

      // Expand image from 500px to full screen (Takes up 25% of timeline)
      expandTl.fromTo(
        ".zs-expand-img",
        { width: "500px", height: "500px", borderRadius: "20px" },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          ease: "power1.inOut",
          duration: 0.25,
        },
      );

      // Pad out the rest of the timeline so the image stays full screen while we scroll the tabs
      expandTl.to({}, { duration: 0.75 });

      // Force refresh for pin spacing safety after first render and images load
      requestAnimationFrame(() => ScrollTrigger.refresh());

      const images = Array.from(document.images);
      Promise.all(
        images
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = img.onerror = resolve;
              }),
          ),
      ).then(() => {
        ScrollTrigger.refresh();
      });

      // Backup fail-safe for custom fonts or late execution
      setTimeout(() => ScrollTrigger.refresh(), 500);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="zs-wrapper" id="zoomScroll">
      <h2 className="head-text-white ">Services</h2>
      <p className="para-text-white ">
        lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
        dolor sit amet consectetur adipisicing elit
      </p>

      {/* ─── PART 2 & 3: Image Expand & Sticky Tabs ─── */}

      <section className="zs-image-expand-section" ref={imageExpandRef}>
        <div className="zs-expand-wrapper">
          <div
            className="zs-expand-img"
            style={{
              backgroundImage: `url(${bgimg})`,
            }}
          >
            <div className="zs-img-overlay" />
            <div className="zs-tabs-sticky">
              {/* Tab navigation — top */}
              <div className="zs-tabs-nav">
                {TABS.map((tab, i) => (
                  <div key={tab.id} className="zs-tab-nav-item">
                    <span className={`zs-tab-label`}>{tab.label}</span>
                    <div className="zs-tab-indicator-track">
                      <div className="zs-tab-indicator" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Headings — center */}
              <div className="zs-tab-headings">
                {TABS.map((tab, i) => (
                  <h2 key={tab.id} className="head-text-white">
                    {tab.heading}
                  </h2>
                ))}
              </div>

              {/* Content — bottom right */}
              <div className="zs-tab-contents">
                {TABS.map((tab, i) => (
                  <p key={tab.id} className="zs-tab-content para-text zs-white">
                    {tab.content}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ZoomScroll;
