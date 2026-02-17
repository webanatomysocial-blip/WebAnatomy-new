import React from "react";
import HomeBanner from "../components/HomeComp/HomeBanner";
import HomeTextFade from "../components/HomeComp/HomeTextFade";
import FlipboxCarsoule from "../components/HomeComp/FlipboxCarsoule";
import AboutOneOnOneSection from "../components/HomeComp/About-OneOnOne-section";
import OurStoryHomePage from "../components/HomeComp/Our-story-home-page";
// import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import WhatWeDoData from "../components/HomeComp/whatWeDoData";
import Cta from "../components/Cta";
import GoalsOurPriority from "../components/HomeComp/Goals-Our-Priority";
import ClientsImg from "../components/Clients-img";
import Recognitions from "../components/HomeComp/Recognitions";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeTextFade />
      <FlipboxCarsoule />
      <AboutOneOnOneSection />
      <OurStoryHomePage />
      {/* <BlogSection/> */}
      <Testimonials />
      <WhatWeDoData />
      <Cta />
      <GoalsOurPriority />
      <ClientsImg />
      <Recognitions />
    </>
  );
}
