import React from "react";
import { Link } from "react-router-dom";
import "../css/Works.css";
import { worksMetadata } from "../works/metadata";

import { useWorkPopup } from "../context/WorkPopupContext";

const Works = () => {
  const { openWorkPopup } = useWorkPopup();

  const handleWorkClick = (e, project) => {
    if (project.hasPopup) {
      e.preventDefault();
      openWorkPopup(project);
    }
  };

  return (
    <div className="works-page-container">
      <div className="works-header">
        <div className="works-header-content">
          <h1 className="head-text">Case Studies</h1>
        </div>
      </div>

      <div className="works-grid">
        {worksMetadata.map((project) => (
          <Link
            to={`/works/${project.slug}`}
            key={project.id}
            className="case-study-card"
            onClick={(e) => handleWorkClick(e, project)}
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
  );
};

export default Works;
