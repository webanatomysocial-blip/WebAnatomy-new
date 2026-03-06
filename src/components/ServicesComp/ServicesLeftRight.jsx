import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../../css/ServicesComponents/ServicesLeftRight.css";

// Importing videos - utilizing placeholders for the others for now
import expirenceVd from "../../assets/videos/services-page/service-1.mp4";
import brandingVd from "../../assets/videos/services-page/service-2.mp4";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Experience Design",
    video: expirenceVd,
    stickySide: "right",
    services: [
      "UI/UX Design",
      "Website Design",
      "Mobile Experience",
      "Commerce Experience",
      "Prototyping & User Testing",
      "Design Systems & Component Libraries",
      "Accessibility & Inclusive Design",
      "Motion & Micro-Interactions",
      "AR/VR Experience Design",
    ],
  },
  {
    id: 2,
    title: "Branding",
    video: brandingVd,
    stickySide: "left",
    services: [
      "Brand Consulting",
      "Logo Design",
      "Industrial / Product Design",
      "Graphic Design",
      "2D / 3D Visualisation",
      "Brand Strategy & Positioning",
      "Visual Identity & Guidelines",
      "Packaging Design",
      "Motion Branding & Video Identity",
      "Rebranding & Brand Refresh",
    ],
  },
  {
    id: 3,
    title: "Technology",
    video: expirenceVd,
    stickySide: "right",
    services: [
      "AI & Machine Learning",
      "DevOps Consulting",
      "Data & Analytics",
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "Cloud Architecture & Migration",
      "API Development & Integration",
      "Blockchain & Web3 Solutions",
      "Cybersecurity Consulting",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    video: expirenceVd,
    stickySide: "left",
    services: [
      "Search Engine Optimisation",
      "Social Media Management",
      "Performance Marketing",
      "Content Marketing",
      "Marketing Automation",
      "Pay-Per-Click (PPC) Advertising",
      "Email & CRM Marketing",
      "Conversion Rate Optimization (CRO)",
      "Influencer & Affiliate Marketing",
      "Analytics & Data-Driven Strategy",
    ],
  },
];

export default function ServicesLeftRight() {
  return (
    <div className="services-showcase-wrapper">
      {SERVICES_DATA.map((section) => (
        <section
          key={section.id}
          className={`services-sticky-section is-${section.stickySide}`}
        >
          <div className="services-sticky-video">
            <video src={section.video} autoPlay loop muted playsInline />
          </div>

          <div className="services-sticky-content">
            <h2 className="head-text">{section.title}</h2>

            <div className="services-boxes-container">
              {section.services.map((service, index) => (
                <div key={index} className="services-content-box">
                  <p className="para-text">{service}</p>
                  <BsArrowRight className="service-arrow-icon" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
