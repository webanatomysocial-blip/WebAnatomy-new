
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/MobileCssHome/HomeTextFadeMobile.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFadeMobile = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
          end: "bottom bottom",
          scrub: 2, // Higher value = smoother, less jittery on mobile
        },
      });

      tl.to(".char-span-mobile:not(.gradient-char-mobile)", {
        color: "white",
        duration: 1,
        stagger: 0.08,
        ease: "none",
      }).to(".gradient-char-mobile", {
        color: "transparent",
        duration: 1,
        stagger: 0.08,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = `We believe in a world where technology amplifies every experience you have seamlessly, meaningfully, and beautifully. And our mission is to imagine the possibilities.`;

  const targetPhrase = "imagine the possibilities.";

  // Split into words, track cumulative char index for gradient detection
  const words = text.split(" ");
  let globalCharIndex = 0;

  const wordItems = words.map((word, wordIdx) => {
    const wordStart = globalCharIndex;
    const wordEnd = globalCharIndex + word.length;
    globalCharIndex = wordEnd + 1; // +1 for the space

    const targetStart = text.indexOf(targetPhrase);
    const targetEnd = targetStart + targetPhrase.length;

    const chars = word.split("").map((char, ci) => {
      const absIndex = wordStart + ci;
      const isGradientChar = absIndex >= targetStart && absIndex < targetEnd;
      return { char, absIndex, isGradientChar };
    });

    return { word, wordIdx, chars };
  });

  // Build word nodes with plain " " spaces between them (outside JSX to avoid lint)
  const wordNodes = [];
  wordItems.forEach(({ wordIdx, chars }, i) => {
    wordNodes.push(
      <span key={wordIdx} className="word-mobile">
        {chars.map(({ char, absIndex, isGradientChar }) => (
          <span
            key={absIndex}
            className={`char-span-mobile${isGradientChar ? " gradient-char-mobile" : ""}`}
          >
            {char}
          </span>
        ))}
      </span>
    );
    // Add a plain breakable space after every word except the last
    if (i < wordItems.length - 1) {
      wordNodes.push(" ");
    }
  });

  return (
    <section className="Text-Section-Mobile" ref={sectionRef}>
      <div className="text-container-mobile">
        <p className="mobile-fade-text">{wordNodes}</p>
      </div>
    </section>
  );
};

export default HomeTextFadeMobile;
