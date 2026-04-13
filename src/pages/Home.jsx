import React from "react";
import HomeBanner from "../components/HomeComp/HomeBanner";
import HomeTextFade from "../components/HomeComp/HomeTextFade";
import HomeTextFadeMobile from "../components/mobileHome/HomeTextFadeMobile";
import FlipboxCarsoule from "../components/HomeComp/FlipboxCarsoule";
import FlipboxSwipeMobile from "../components/mobileHome/FlipboxSwipeMobile";
import AboutOneOnOneSection from "../components/HomeComp/About-OneOnOne-section";
import OurStoryHomePage from "../components/HomeComp/Our-story-home-page";
import BlogSection from "../components/BlogSection";
import Testimonials from "../components/Testimonials";
import WhatWeDoData from "../components/HomeComp/whatWeDoData";
import Cta from "../components/Cta";
import GoalsOurPriority from "../components/HomeComp/Goals-Our-Priority";
import ClientsImg from "../components/Clients-img";
import Recognitions from "../components/HomeComp/Recognitions";
import HomeBannerMobile from "../components/mobileHome/HomeBannerMobile";

export default function Home() {
  return (
    <>
      <div className="only-windows">
        <HomeBanner />
      </div>
      <div className="only-mobile">
        <HomeBannerMobile />
      </div>

      <div className="only-windows">
        <HomeTextFade />
      </div>
      <div className="only-mobile">
        <HomeTextFadeMobile />
      </div>
      <div className="only-windows">
        <FlipboxCarsoule />
      </div>
      <div className="only-mobile">
        <FlipboxSwipeMobile />
      </div>
      <AboutOneOnOneSection />
      {/* <ZoomScroll id="zoomScroll" /> */}
      <OurStoryHomePage />

      <Testimonials />
      <WhatWeDoData />
      <ClientsImg />
      <GoalsOurPriority />

      <Cta />
      <BlogSection
        backgroundColor="#fff"
        paddingBottom="100px"
        paddingTop="100px"
      />

      <Recognitions />
    </>
  );
}
