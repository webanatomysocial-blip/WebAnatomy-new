import img1 from "../../WorkImages/threatsenseai/threatsenseai-dupimg.webp";
import "../../workCss/threatsenseaicss/BothImages.css";

export default function BothImages() {
  return (
    <>
      <section className="both-images-section">
        <img src={img1} alt="" />
        <img src={img1} alt="" />
      </section>
    </>
  );
}
