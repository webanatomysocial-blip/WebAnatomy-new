import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import bannerimage from "../WorkImages/piedpipper/banner-image.jpeg";
import ImageExpand from "../workComponents/imageExpand";

export default function PiedPippers() {
  const services = [
    "UI/UX Design",
    "E-commerce",
    "Mobile App Development",
    "Cloud Services",
  ];
  const stats = [
    {
      label: "Language",
      value: "Magento PWA Studio / React / Android / iOS / Laravel / MySQL",
    },
    { label: "Timescale", value: "12 Weeks" },
    { label: "System", value: "Magento" },
  ];

  return (
    <div>
      <WorkBanner
        title="Pied Pippers"
        category="Food / Retail"
        src={bannerimage}
      />
      <ServicesSecondSec
        services={services}
        title="Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch"
        description="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
        stats={stats}
        liveLink="https://example.com"
      />
      <ImageExpand src={bannerimage} alt="Expandable Image" />
    </div>
  );
}
