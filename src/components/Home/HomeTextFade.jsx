// src/components/HomeTextFade.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/HomeTextFade.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 5%",
        end: "bottom bottom",
        scrub: 0.1,
        // markers: true,
      },
    });

    // Animate ALL spans from gray to white, staggered
    tl.to(".char-span", {
      color: "white",
      duration: 1,
      stagger: 0.1, // Adjust speed here
      ease: "power1.inOut",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const text = `We believe in a world where technology
amplifies every experience you have
seamlessly, meaningfully, and beautifully.
And our mission is to imagine the possibilities.`;

  const lines = text.split("\n");

  return (
    <section className="Text-Section" ref={sectionRef}>
      <div className="text-container">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} className="line">
            {line.split("").map((char, charIndex) => {
              if (char === " ") {
                return <span key={charIndex} className="space" />;
              }

              // Hide the final period visually (keeps layout identical)
              const isLastPeriod =
                lineIndex === lines.length - 1 &&
                charIndex === line.length - 2 &&
                char === ".";

              return (
                <span
                  key={charIndex}
                  className={`char-span ${isLastPeriod ? "visi" : ""}`}
                >
                  {char}
                </span>
              );
            })}
            {lineIndex < lines.length - 1 && <br />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeTextFade;
