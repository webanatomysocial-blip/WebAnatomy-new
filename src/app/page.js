
import HomeBanner from "@/components/Home/HomeBanner";
import HomeTextFade from "@/components/Home/HomeTextFade";
import AboutOneOnOneSection from "@/components/Home/About-OneOnOne-section";
import FlipboxCarsoule from "@/components/Home/FlipboxCarsoule";
import OurStoryHomePage from "@/components/Home/Our-story-home-page";
import Testimonials from "@/components/Testimonials"; 
import Cta from "@/components/Cta"; 
import WhatWeDoData from "@/components/Home/whatWeDoData";
import GoalsOurPriority from "../components/Home/Goals-Our-Priority";
import ClientsImg from "@/components/Clients-img";
import Recognitions from "@/components/Home/Recognitions";

export default function Home() {
  return (
   <>
   <HomeBanner/>
   <HomeTextFade/>
   <FlipboxCarsoule/>
   <AboutOneOnOneSection/>
   <OurStoryHomePage/>
   <Testimonials/>
   <WhatWeDoData/>
      <Cta/>
   <GoalsOurPriority/>
   <ClientsImg/>
   <Recognitions/>

   </>
  );
}
