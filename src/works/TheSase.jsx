import WorkBanner from "../workComponents/WorkBanner";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import ImageExpand from "../workComponents/imageExpand";
import Context from "../workComponents/Context";
import FullWidthImage from "../workComponents/FullWidthImage";
import JustHeading from "../workComponents/JustHeading";
import TwoImagesScroll from "../workComponents/ToggleNowComponent/TwoImagesScroll";
import ImageFadeCome from "../workComponents/ToggleNowComponent/ImageFadeCome";

// banner images
import bannerimage from "../WorkImages/piedpipper/banner-image.jpeg";

export default function TheSase() {
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
    <>
      <WorkBanner
        title="ToggleNow - Transforming Project Management"
        src={bannerimage}
        title2="ToggleNow"
        category2="SaaS / Automation"
      />
      <ServicesSecondSec
        services={services}
        title="Streamlining Project Management with a Custom Enterprise SaaS Solution"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        stats={stats}
        liveLink="https://togglenow.com"
      />
      <ImageExpand src={bannerimage} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      <FullWidthImage src={bannerimage} alt="Expandable Image" />
      <JustHeading
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
    </>
  );
}
