import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import bannerimage from "../WorkImages/piedpipper/banner-image.jpeg";
import ImageExpand from "../workComponents/imageExpand";
import Context from "../workComponents/Context";
import TwoPeople from "../workComponents/togglenowComponents/TwoPeople";
import JustHeading from "../workComponents/JustHeading";
import TnowGalleryScroll from "../workComponents/togglenowComponents/TnowGalleryScroll";
import img1 from "../WorkImages/Tnow/TnowGalleryScrollImages/m7_564ae83100.webp";
import TnowStickyImages from "../workComponents/togglenowComponents/TnowStickyImages";
import BothImages from "../workComponents/togglenowComponents/BothImages";
import LeftReversePhone from "../workComponents/togglenowComponents/LeftReversePhone";
import RotatePhonesGrid from "../workComponents/togglenowComponents/RotatePhonesGrid";

export default function ThreatSenseAI() {
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

  const galleryImages = [img1, img1, img1, img1, img1, img1, img1, img1];

  return (
    <div>
      <WorkBanner
        title="ThreatSenseAI - Transforming Project Management"
        src={bannerimage}
        title2="ThreatSenseAI"
        category2="SaaS / Automation"
      />
      <ServicesSecondSec
        services={services}
        title="Streamlining Project Management with a Custom Enterprise SaaS Solution"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        stats={stats}
        liveLink="https://threatsenseai.com"
      />
      <ImageExpand src={bannerimage} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />

      <TwoPeople />
      <JustHeading
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
      <TnowGalleryScroll images={galleryImages} />
      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        paddingBottom="0px"
      />
      <TnowStickyImages />
      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      <BothImages />
      <LeftReversePhone />
      <RotatePhonesGrid />
    </div>
  );
}
