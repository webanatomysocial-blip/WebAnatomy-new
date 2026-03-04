import React from "react";
import "../workCss/WorkBanner.css";
export default function WorkBanner({ src, title, category }) {
  return (
    <>
      <div
        className="work-banner"
        style={{
          backgroundImage: `url(${src || ""})`,
        }}
      >
        <div className="work-contents">
          <h1 className="head-text-white">{title || ""}</h1>
          <div className="work-contents-bottom">
            <p className="head-text-white">{category || ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}
