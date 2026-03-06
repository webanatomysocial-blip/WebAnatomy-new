import img1 from "../../WorkImages/Tnow/tnow-dupimg.webp";
import "../../workCss/togglenowcss/BothImages.css";

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
