import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/RotatePhonesGrid.css";
import phoneImg from "../../WorkImages/threatsenseai/phone-img.png";
import handPhoneImg from "../../WorkImages/threatsenseai/grid.webp";
import landscapeImg from "../../WorkImages/threatsenseai/beautiful-scenery.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function RotatePhonesGrid() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".rotateimg1", {
        left: "0%",
        scrollTrigger: {
          trigger: ".rotatephonesection",
          start: "top center",
          end: "center center",
          scrub: 1,
          markers: false,
        },
      });

      gsap.to(".rotateimg2", {
        top: "35%",
        left: "25%",
        rotate: 10,
        scrollTrigger: {
          trigger: ".rotatephonesection",
          start: "top center",
          end: "center center",
          scrub: 1,
          markers: false,
        },
      });

      gsap.to(".rotateimg3", {
        top: "45%",
        left: "50%",
        rotate: 20,
        scrollTrigger: {
          trigger: ".rotatephonesection",
          start: "top center",
          end: "center center",
          scrub: 1,
          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="rotate-phones-grid-wrapper" ref={containerRef}>
      <div className="rotate-phones-grid-top">
        <div className="rotate-phones-grid-top-left rotatephonesection">
          <img className="rotateimg1" src={phoneImg} alt="phone1" />
          <img className="rotateimg2" src={phoneImg} alt="phone2" />
          <img className="rotateimg3" src={phoneImg} alt="phone3" />
        </div>
        <div className="rotate-phones-grid-top-right">
          <img src={handPhoneImg} alt="hand holding phone" />
        </div>
      </div>
      <div className="rotate-phones-grid-bottom">
        <img
          src={landscapeImg}
          alt="landscape"
          className="rotate-phones-landscape-bg"
        />
        <div className="rotate-phones-text-box">
          <div className="rotate-phones-flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              width="40"
            />
          </div>
          <p>
            On a COVID morning, with barely enough groceries to whip up a meal,
            every Mrs. Helpless was completely clueless looking at the hungry,
            wailing babies, and this scenario was increasing in numbers. This
            was indeed a pressing problem, and from an established furniture
            design tycoon like IKEA, a marvellous idea came into form!
          </p>
        </div>
      </div>
    </section>
  );
}
