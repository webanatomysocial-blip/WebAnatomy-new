import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponents/About-OneOnOne-section.css";
import bgimg from "../../assets/images/Home-images/oneonone/bg.png";
import { BsArrowRight } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function AboutOneOnOneSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // ✅ DESKTOP (SMOOTH CAROUSEL)
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const items = itemsRef.current;
        if (!items || items.length === 0) return;

        // Initial states
        gsap.set(items[0], { yPercent: 0, opacity: 1 });
        gsap.set(items.slice(1), { yPercent: 100, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2000", // 🔥 smoother scroll distance
            scrub: 1.5,    // 🔥 smoother feel
            pin: true,
            anticipatePin: 1, // 🔥 removes jump
          },
        });

        items.forEach((item, index) => {
          if (index < items.length - 1) {
            const nextItem = items[index + 1];

            tl.to(item, {
              yPercent: -100,
              opacity: 0,
              duration: 1.2,
              ease: "power3.inOut",
            })
              .to({}, { duration: 0.2 }) // 🔥 small pause (premium feel)
              .to(
                nextItem,
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power3.inOut",
                },
                "<"
              );
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    // ✅ MOBILE (STACKED)
    mm.add("(max-width: 767px)", () => {
      const items = itemsRef.current;
      if (!items) return;

      gsap.set(items, {
        clearProps: "all",
        opacity: 1,
        yPercent: 0,
      });

      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  // Reset refs
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <div className="wa-about-one-on-one-wrapper">
      <section ref={sectionRef} className="wa-about-one-on-one-section">
        <div className="wa-about-one-on-one-total-sticky-container">
          <img src={bgimg} alt="bgimg" className="wa-about-one-on-one-bg-img" />

          {/* LEFT */}
          <div className="wa-about-one-on-one-left-outer-container">
            <h2 className="head-text-white">Services</h2>
            <p className="para-text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* RIGHT */}
          <div className="wa-about-one-on-one-right-outer-container">
            <div className="wa-about-one-on-one-right-inner-transparent-container">
              
              {/* ITEM 1 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container service-card"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(01)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Design</h3>
                  <BsArrowRight size={20} />
                </div>
                <p className="para-text-white">
                  Strategic brand foundations and visual identity systems.
                </p>
              </div>

              {/* ITEM 2 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container service-card"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(02)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Engineering</h3>
                  <BsArrowRight size={20} />
                </div>
                <p className="para-text-white">
                  Robust and scalable engineering solutions.
                </p>
              </div>

              {/* ITEM 3 */}
              <div
                ref={addToRefs}
                className="wa-about-one-on-one-right-inner-transparent-container-first-inner-container service-card"
              >
                <div className="service-card-header">
                  <span className="para-text-white">(03)</span>
                </div>
                <div className="service-card-title-row">
                  <h3 className="head-text-white">Marketing</h3>
                  <BsArrowRight size={20} />
                </div>
                <p className="para-text-white">
                  Data-driven marketing strategies.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}