import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "../css/Works.css";
import { worksMetadata } from "../works/metadata";
import video from "../assets/videos/work-page/banner.mp4";

import { useWorkPopup } from "../context/WorkPopupContext";

const Works = () => {
  const { openWorkPopup } = useWorkPopup();
  const cursorRef = useRef(null);

  useEffect(() => {
    // Initialize cursor position (center it)
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      duration: 0.3,
      ease: "power4.out",
    });
  };

  const handleWorkClick = (e, project) => {
    if (project.hasPopup) {
      e.preventDefault();
      openWorkPopup(project);
    }
  };

  return (
    <>
      <div className="works-page-header">
        <h1 className="head-text-white">Case Studies</h1>
        <video src={video} autoPlay loop muted playsInline></video>
      </div>

      <div className="works-page-container">
        <div className="works-grid">
          {worksMetadata.map((project) => (
            <Link
              to={`/works/${project.slug}`}
              key={project.id}
              className="case-study-card"
              onClick={(e) => handleWorkClick(e, project)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-info">
                <h3 className="card-category">{project.category}</h3>
                <p className="card-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="cursor" ref={cursorRef}>
        <p className="cursortext">Click</p>
      </div>
    </>
  );
};

export default Works;
