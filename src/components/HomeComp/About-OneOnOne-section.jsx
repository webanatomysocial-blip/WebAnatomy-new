import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/About-OneOnOne-section.css";
import bgimg from "../../assets/images/Home-images/oneonone/bg.png";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOneOnOneSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  // Refs for the individual items
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current;
      if (!items || items.length === 0) return;

      // 1. Set initial states
      // Item 0: Visible, in place  
      gsap.set(items[0], { yPercent: 0, opacity: 1 });

      // Other items: Below, hidden
      gsap.set(items.slice(1), { yPercent: 100, opacity: 0 });

      // 2. Create Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000", // Scroll distance
          scrub: 1, // Smooth scrolling
          pin: true, // Pin the section for "wheel scroll" feel
          // markers: true,
        },
      });

      // 3. Sequence
      // For each item (except the last one), animate it out and the next one in
      items.forEach((item, index) => {
        if (index < items.length - 1) {
          const nextItem = items[index + 1];

          // Add a "step" to the timeline
          tl.to(item, {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          }).to(
            nextItem,
            {
              yPercent: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            "<",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Clear refs on render to avoid duplicates in strict mode/re-renders
  itemsRef.current = [];

  // Helper to add ref
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <div className="wa-about-one-on-one-wrapper">
      <section ref={sectionRef} className="wa-about-one-on-one-section">
        {/* <img src={bgimg} alt="bgimg" className="wa-about-one-on-one-bg-img" /> */}
        <div className="wa-about-one-on-one-total-sticky-container">
          <img src={bgimg} alt="bgimg" className="wa-about-one-on-one-bg-img" />
          <div className="wa-about-one-on-one-left-outer-container">
            <h2 className="head-text-white">Services</h2>
            <p className="para-text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="wa-about-one-on-one-right-outer-container">
            <div
              ref={containerRef}
              className="wa-about-one-on-one-right-inner-transparent-container"
            >
              {/* Item 1 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(01)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Design</h3>
                  {/* Reuse arrow icon or keep simple for now, user didn't ask for icon import but I can see BSArrowRight is available in Header, maybe import it? */
                  /* Better to stick to text or use a simple unicode arrow if imports aren't handy, but lets try to import standard icon if possible, or just text arrow for now to avoid breaking imports */
                  /* Actually, icons are good. I will add import for BsArrowRight */}
                  <span className="head-text-white">
                    <BsArrowRight size={20} />
                  </span>
                </div>
                <p className="para-text-white">
                  Strategic brand foundations and visual identity systems
                  designed for consistency and scale.
                </p>
              </div>

              {/* Item 2 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(02)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Engineering</h3>
                  <span className="head-text-white">
                    <BsArrowRight size={20} />
                  </span>
                </div>
                <p className="para-text-white">
                  Robust and scalable engineering solutions that drive digital
                  transformation and growth.
                </p>
              </div>

              {/* Item 3 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(03)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Marketing</h3>
                  <span className="head-text-white">
                    <BsArrowRight size={20} />
                  </span>
                </div>
                <p className="para-text-white">
                  Data-driven marketing strategies to amplify brand reach and
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
