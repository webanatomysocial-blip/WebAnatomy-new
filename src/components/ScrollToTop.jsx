// src/components/ScrollToTop.jsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to a hashed section, DO NOT scroll to top.
    if (hash) return;

    // 1. Scroll to top immediately
    if (typeof window !== "undefined") {
      // Disable browser's default scroll restoration to avoid conflicts
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = "manual";
      }

      if (window.lenis) {
        window.lenis.scrollTo(0, {
          immediate: true,
        });
      } else {
        window.scrollTo(0, 0);
      }
    }

    // 2. Refresh ScrollTrigger after a slight delay to allow layout to settle
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
