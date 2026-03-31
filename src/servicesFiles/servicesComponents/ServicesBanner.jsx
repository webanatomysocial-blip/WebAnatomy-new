import "../servicesCss/ServicesBanner.css";

export default function ServicesBanner({ backgroundImage, title }) {
  return (
    <>
      <div
        className="services-banner-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="services-banner-content">
          <h2 className="head-text-white">{title}</h2>
        </div>
      </div>
    </>
  );
}
