import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";
import "../css/footer.css";
import logo from "../assets/images/main-logo.png";
import downloadBg from "../assets/images/about-page/f-left.png";
import Footer3D from "./Footer3D";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Recognition Images
import img7 from "../assets/images/Recognitions/7.webp";
import img8 from "../assets/images/Recognitions/8.png";
import img5 from "../assets/images/Recognitions/5.png";
import img10 from "../assets/images/Recognitions/10.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Reveal the fixed background only when the footer is in view
    gsap.to(".footer-bottom-image", {
      opacity: 1,
      scrollTrigger: {
        trigger: "body",
        start: "90% 90%",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play reverse play reverse",
        // markers: true,
      },
    });
  }, []);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* 1) Left Part: Logo & Download Button */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="WAC Logo" className="white-logo" />
          </Link>
          <form
            className="footer-subscription-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              className="sub-small-para-white"
            />
            <button type="submit" className="send-btn sub-small-para-white">
              Send
            </button>
          </form>
          <div className="footer-recognitions">
            <h4 className="sub-small-head-white">Recognitions</h4>
            <div className="footer-recognitions-container">
              <img src={img7} alt="Recognition 7" />
              <img src={img8} alt="Recognition 8" />
              <img src={img5} alt="Recognition 5" />
              <img src={img10} alt="Recognition 10" />
            </div>
          </div>
        </div>

        {/* 2) Middle Part: Navigation */}
        <div className="footer-nav">
          <div className="footer-column">
            <h4 className="sub-small-head-white">Company</h4>
            <ul className="sub-para-white">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/industries">Industries</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="sub-small-head-white">Services</h4>
            <ul className="sub-para-white">
              <li>
                <Link to="/services/branding">Branding</Link>
              </li>
              <li>
                <Link to="/services/experience">Experience Design</Link>
              </li>
              <li>
                <Link to="/services/technology">Technology</Link>
              </li>
              <li>
                <Link to="/services/marketing">Digital Marketing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3) Right Part: Socials, Form & Recognitions */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaBehance />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>

          <div className="footer-locations">
            <h4 className="sub-small-head-white">Locations</h4>
            <div className="location-item">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="flag-icon"
              />
              <p className="sub-para-text-white">Madhapur, Hyderabad, India.</p>
            </div>
            <div className="location-item">
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="UK Flag"
                className="flag-icon"
              />
              <p className="sub-para-text-white">
                9 Thornton Road, E11 4DH, London, UK.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Giant Text/Image */}
      <div className="footer-bottom-image">
        <Footer3D />
      </div>
    </footer>
  );
};

export default Footer;
