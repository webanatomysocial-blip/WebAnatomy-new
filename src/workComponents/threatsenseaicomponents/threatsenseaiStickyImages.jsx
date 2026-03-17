import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/threatsenseaiStickyImages.css";
// import img1 from "../../WorkImages/threatsenseai/ipad.webp";
// import img2 from "../../WorkImages/threatsenseai/phone-img.png";

gsap.registerPlugin(ScrollTrigger);

export default function ThreatsenseaiStickyImages() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const animationTimeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      animationTimeline1
        .to(".threatsenseai-main-img", {
          scale: 0.127,
          height: "120%",
          y: -100,
          duration: 1,
          onUpdate: function () {
            const currentScale = gsap.getProperty(this.targets()[0], "scaleX");
            if (currentScale <= 0.14 && currentScale >= 0.125) {
              gsap.set(this.targets()[0], { opacity: 0 });
            } else {
              gsap.set(this.targets()[0], { opacity: 1 });
            }
          },
        })
        .to(
          ".threatsenseai-left-img",
          {
            left: "30%",
            scale: 1,
            duration: 1,
          },
          "sameTime",
        )
        .to(
          ".threatsenseai-right-img",
          {
            left: "70%",
            scale: 1,
            duration: 1,
          },
          "sameTime",
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="threatsenseai-phone-section" ref={containerRef}>
      <div className="threatsenseai-phone-container">
        <img
          className="threatsenseai-main-img"
          src="https://wa.ctsi.in/wp-content/uploads/2025/05/Mask_Group_234337_min_5bfd9e14f3.webp"
          alt=""
        />
        <img
          src="https://wa.ctsi.in/wp-content/uploads/2025/05/assets_frame_2_4f556b41ac.webp"
          alt=""
          className="threatsenseai-front-img"
        />
        <img
          src="https://wa.ctsi.in/wp-content/uploads/2025/05/assets_frame_1_d216b77f06.webp"
          alt=""
          className="threatsenseai-left-img"
        />
        <img
          src="https://wa.ctsi.in/wp-content/uploads/2025/05/assets_frame_1_d216b77f06.webp"
          alt=""
          className="threatsenseai-right-img"
        />
      </div>
    </section>
  );
}
