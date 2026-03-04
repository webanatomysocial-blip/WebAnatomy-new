import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import bannerimage from "../WorkImages/piedpipper/banner-image.jpeg";
import ImageExpand from "../workComponents/imageExpand";

export default function ToggleNow() {
  const services = [
    "SaaS Development",
    "Business Automation",
    "UI/UX Strategy",
  ];
  const stats = [
    { label: "Technology", value: "React / Node.js / PostgreSQL" },
    { label: "Timeline", value: "16 Weeks" },
    { label: "Focus", value: "Enterprise Scale" },
  ];

  return (
    <div>
      <WorkBanner
        title="ToggleNow"
        category="SaaS / Automation"
        src={bannerimage}
      />
      <ServicesSecondSec
        services={services}
        title="Streamlining Project Management with a Custom Enterprise SaaS Solution"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        stats={stats}
        liveLink="https://togglenow.com"
      />
      <ImageExpand src={bannerimage} alt="Expandable Image" />
    </div>
  );
}
