import HorizontalBanner from "../components/CareersComp/HorizontalBanner";
import HorizontalBannerMobile from "../components/careersMobile/HorizontalBannerMobile";
import GallerySection from "../components/CareersComp/GallerySection";
import OpenRoles from "../components/CareersComp/OpenRoles";

export default function Careers() {
  return (
    <>
      <div className="only-windows">
        <HorizontalBanner />
      </div>
      <div className="only-mobile">
        <HorizontalBannerMobile />
      </div>
      <OpenRoles />
      <GallerySection />
    </>
  );
}
