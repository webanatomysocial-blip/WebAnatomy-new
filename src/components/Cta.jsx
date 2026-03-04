"use client";

import { BsArrowRight } from "react-icons/bs";
import "../css/Cta.css";
import video from "../assets/videos/cta/Cta-02.mp4"

export default function Cta() {
  return (
    <>
      <section className="cta-section">
        <video src={video} autoPlay loop muted className="cta-video" />
        <div className="cta-container">
          <div className="cta-text">
            <h2 className="head-text-white">
              Lorem ipsum <br /> dolor sit
            </h2>
            <p className="para-text-white">
              Let&apos;s transform your vision <br /> into reality with our
              cutting-edge
            </p>
          </div>
          <div className="cta-btn">
            <button className="gradient-bg-btn">
              Get in Touch{" "}
              <span className="icon-btn">
                <BsArrowRight className="icon-inside-btn-1" />
                <BsArrowRight className="icon-inside-btn-2" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
