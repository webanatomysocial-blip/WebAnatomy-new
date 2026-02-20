import React from "react";
import AboutBanner from "../components/AboutComp/AboutBanner";
import WhoWeAre from "../components/AboutComp/WhoWeAre";
import OurImpact from "../components/AboutComp/OurImpact";
import OurProcess from "../components/AboutComp/OurProcess";
import BlogSection from "../components/BlogSection";
import Faq from "../components/Faq";
import MissionVision from "../components/AboutComp/Mission-Vision";

const About = () => {
  return (
    <>
      <AboutBanner />
      <WhoWeAre />
      <OurImpact />
      <MissionVision />
      <OurProcess />
      <BlogSection />
      <Faq />
    </>
  );
};

export default About;
