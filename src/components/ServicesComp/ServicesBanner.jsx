import "../../css/ServicesComponents/ServicesBanner.css";
import video from "../../assets/videos/services-page/banner.mp4";

export default function ServicesBanner() {
  return (
    <>
      <section className="services-banner-section">
        <h1 className="head-text-white">
          Our Services <br />
        </h1>
        <video src={video} autoPlay loop muted playsInline></video>
      </section>
    </>
  );
}
