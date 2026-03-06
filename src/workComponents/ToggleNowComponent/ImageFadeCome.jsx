import screen1 from "../../WorkImages/ToggleNow/phoneFadeTogglenow/screen1.webp";
import screen2 from "../../WorkImages/ToggleNow/phoneFadeTogglenow/screen2.webp";
import bg from "../../WorkImages/ToggleNow/phoneFadeTogglenow/bg.webp";
import "../../workCss/ToggleNowCss/ImageFadeCome.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageFadeCome() {
  useEffect(() => {
    const imagefade = gsap.timeline({
      scrollTrigger: {
        trigger: ".ImageFadeCome-work-section",
        start: "8% top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    imagefade
      .to(".ImageFadeCome-sticky-bg-img", {
        opacity: 0,
        duration: 1,
      })
      .to(
        ".ImageFadeCome-sticky-container-left-bg-img",
        {
          left: "-20%",
          duration: 1,
        },
        "<",
      )
      .to(
        ".textscallCome",
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          force3D: true,
          rotation: 0.01,
        },
        "<",
      )
      .to(".ImageFadeCome-screen1-img", {
        left: "40%",
      })
      .to(
        ".ImageFadeCome-screen2-img",
        {
          left: "70%",
        },
        "<",
      );
  }, []);

  return (
    <section className="ImageFadeCome-work-section">
      <div className="ImageFadeCome-sticky-container">
        <img src={bg} className="ImageFadeCome-sticky-bg-img" alt="" />
        <div className="ImageFadeCome-sticky-container-left">
          <img
            src={bg}
            className="ImageFadeCome-sticky-container-left-bg-img"
            alt=""
          />
          <div className="textscallCome">
            <p className="head-text-white">TextCall</p>
          </div>
        </div>
        <img src={screen1} className="ImageFadeCome-screen1-img" alt="" />
        <img src={screen2} className="ImageFadeCome-screen2-img" alt="" />
      </div>
    </section>
  );
}
