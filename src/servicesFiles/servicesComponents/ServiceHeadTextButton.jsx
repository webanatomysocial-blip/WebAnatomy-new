import { Link } from "react-router-dom";
import "../servicesCss/ServiceHeadTextButton.css";
import { BsArrowRight } from "react-icons/bs";

export default function ServiceHeadTextButton() {
  return (
    <>
      <div className="ServiceHeadTextButton-container">
        
        <h2 className="head-text">
          UI/UX Design Company For Improved User Retention and Lower Bounce
          Rates 
        </h2>
        <p className="para-text">
          In today’s competitive digital landscape, a website is often the first
          interaction a customer has with your brand. A visually appealing and
          intuitive user interface (UI) and user experience (UX) design are no
          longer just a luxury—they are essential for capturing attention,
          building trust, and driving conversions.
        </p>
        <p className="para-text">
          At Copy Web Anatomy, we specialize in crafting exceptional UI/UX
          designs that not only look stunning but also deliver measurable
          business results. Our team of experienced designers works closely with
          you to understand your brand, your goals, and your target audience,
          creating seamless and engaging digital experiences that keep users
          coming back. user experience and drive business results.
        </p>
        <Link to="/contact" className="black-bg-btn">
          Our Impact
          <span className="icon-btn">
            <BsArrowRight className="icon-inside-btn-1" />
            <BsArrowRight className="icon-inside-btn-2" />
          </span>
        </Link>
      </div>
    </>
  );
}
