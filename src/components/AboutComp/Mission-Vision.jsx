import "../../css/AboutComponents/MissionVision.css";
import LeftBot from "../../assets/images/about-page/Mission-Vision/left-bot.png";
import Strips from "../../assets/images/about-page/Mission-Vision/strips.png";
import HalfGlobe from "../../assets/images/about-page/Mission-Vision/half-globe.png";
import Cube from "../../assets/images/about-page/Mission-Vision/cube.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-top">
        <h2 className="head-text">Mission & Vision</h2>
        <p className="para-text">
          We are a team of designers, developers, <br /> and strategists who are
          passionate about building
        </p>
      </div>
      <div className="mission-vision-container">
        {/* Left Side */}
        <div
          className="mv-left-side"
          style={{ backgroundImage: `url(${LeftBot})` }}
        >
          <div className="mv-left-content">
            <h2 className="head-text mv-main-title">
              Building With Intent. <br /> Scaling With Precision.
            </h2>
            <p className="para-text mv-main-desc">
              At Web Anatomy, our purpose is simple — engineer digital systems
              that combine clarity, performance, and longevity.
            </p>
            <Link to="/contact" className="black-bg-btn mv-btn">
              Start a project
              <span className="icon-btn">
                <BsArrowRight className="icon-inside-btn-1" />
                <BsArrowRight className="icon-inside-btn-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side - Grid */}
        <div className="mv-right-side">
          {/* Top Left - Black Card */}
          <div className="mv-card black-card">
            <h3 className="sub-small-head-white">Our Mission</h3>
            <p className="sub-small-para-white">
              To bridge design and engineering into one continuous discipline
            </p>
          </div>

          {/* Top Right - White Card with Strips */}
          <div
            className="mv-card white-card"
            style={{
              backgroundImage: `url(${Strips})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="sub-small-head mv-card-title-center">
              our work grows with your business
            </h3>
            <h2 className="sub-small-head mv-card-title-center">
              — not against it.
            </h2>
          </div>

          {/* Bottom Left - Orange Gradient Card with Half Globe */}
          <div
            className="mv-card orange-card"
            style={{
              backgroundImage: `url(${HalfGlobe})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom center",
            }}
          >
            <h3 className="sub-small-head">Our Vision</h3>
            <p className="sub-small-para">
              To become a globally respected digital studio known for
              engineering refined, intelligent digital ecosystems.
            </p>
          </div>

          {/* Bottom Right - Black Card with Cube */}
          <div
            className="mv-card black-card-cube"
            style={{
              backgroundImage: `url(${Cube})`,
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "black",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
