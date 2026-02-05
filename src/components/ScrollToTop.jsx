// src/components/ScrollToTop.jsx

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const { pathname, hash } = usePathname();

  useEffect(() => {
    // If navigating to a hashed section, DO NOT scroll to top.
    if (hash) return;

    // Otherwise scroll to top normally
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
