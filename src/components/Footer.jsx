import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";
import "../css/footer.css";
import footerImg from "../assets/images/footer/footer-img.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Set initial state hidden to avoid flash before ScrollTrigger starts
    gsap.set(".footer-bottom-image", { opacity: 0 });

    gsap.to(".footer-bottom-image", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "bottom bottom",
        end: "top top",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left Side: Navigation Columns */}
        <div className="footer-nav">
          {/* Column 1: Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
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

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
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

        {/* Right Side: Socials & Contact */}
        <div className="footer-contact-info">
          {/* Social Icons */}
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

          {/* Contact Details */}
          <div className="contact-details">
            <p>+91 9705030977</p>
            <p>+91 9705030977</p>
            <a href="mailto:hello@webanatomy.in" className="contact-email">
              hello@webanatomy.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Giant Text/Image */}
      <div className="footer-bottom-image">
        {/* Assumes footer-img.png is in src/assets/images/footer/ */}
        <img src={footerImg} alt="Footer Bottom" className="footer-img" />
      </div>
    </footer>
  );
};

export default Footer;
