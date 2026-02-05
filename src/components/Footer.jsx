"use client";

import React from "react";
import Link from "next/link";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/works">Works</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services/branding">Branding</Link>
              </li>
              <li>
                <Link href="/services/experience">Experience Design</Link>
              </li>
              <li>
                <Link href="/services/technology">Technology</Link>
              </li>
              <li>
                <Link href="/services/marketing">Digital Marketing</Link>
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
        <img
          src={require("@/assets/images/footer/footer-img.png").default.src}
          alt="Web Anatomy"
        />
      </div>
    </footer>
  );
};

export default Footer;
