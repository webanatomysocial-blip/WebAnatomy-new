import HorizontalBanner from "../components/CareersComp/HorizontalBanner";
import HorizontalBannerMobile from "../components/CareersComp/mobileCareer/HorizontalBannerMobile";
import GallerySection from "../components/CareersComp/GallerySection";
import OpenRoles from "../components/CareersComp/OpenRoles";

export default function Careers() {
  return (
    <>
      {/* Desktop: GSAP horizontal scroll version */}
      <div className="only-windows">
        <HorizontalBanner />
      </div>

      {/* Mobile: plain Swiper version (no animations) */}
      <div className="only-mobile">
        <HorizontalBannerMobile />
      </div>

      <OpenRoles />
      <GallerySection />
    </>
  );
}
