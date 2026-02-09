"use client";

import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/main-logo.png";
import {
  BsTelephone,
  BsSearch,
  BsBookmark,
  BsArrowRight,
} from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // State for Transparent Header (White text, transparent BG)
  // Active when in the top sections (Carousel, TextFade, Scroll)
  const [isTransparent, setIsTransparent] = useState(false);

  // State for Services Hover (0.5s delay before closing)
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const closeMenuTimeoutRef = useRef(null);

  const pathname = usePathname();

  const handleServicesMouseEnter = () => {
    if (closeMenuTimeoutRef.current) {
      clearTimeout(closeMenuTimeoutRef.current);
      closeMenuTimeoutRef.current = null;
    }
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    closeMenuTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
      closeMenuTimeoutRef.current = null;
    }, 200);
  };

  // Scroll Direction & Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        if (currentScrollY > lastScrollY) {
          setIsScrolledDown(true);
        } else if (currentScrollY < lastScrollY) {
          setIsScrolledDown(false);
        }
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Logic for Transparent Header (Home Page + Top of Page)
  useEffect(() => {
    const handleTransparency = () => {
      const isHome = pathname === "/";
      const isAtTop = window.scrollY < 10;

      if (isHome && isAtTop) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    // Run on mount and scroll
    handleTransparency();
    window.addEventListener("scroll", handleTransparency, { passive: true });

    return () => window.removeEventListener("scroll", handleTransparency);
  });

  useEffect(() => {
    return () => {
      if (closeMenuTimeoutRef.current) clearTimeout(closeMenuTimeoutRef.current);
    };
  }, []);

  const isAtTop = lastScrollY === 0;
  // Always disable transparency if Services is hovered
  const shouldShowTransparent = isTransparent && !isServicesHovered;

  return (
    <header
      className={`header-container ${isScrolledDown ? "hidden" : ""} ${
        shouldShowTransparent ? "header-transparent" : ""
      }`}
    >
      <div className="header-wrapper">
        <Link href="/" className="logo">
          <Image src={logo} alt="WAC Logo" />
        </Link>
        <nav>
          <ul className="nav-menu">
            <li
              className="nav-item"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link href="/services" className="nav-link">
                Services
              </Link>
              <div
                className={`mega-menu ${isServicesHovered ? "mega-menu-visible" : ""}`}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="mega-menu-content">
                  <div className="mega-column">
                    <h3>Building Strong Capabilities to Empower Your Brand</h3>
                    <Link href="/services" className="mega-link-footer">
                      Go to overview <BsArrowRight />
                    </Link>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Branding <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link href="/services/brand-consulting">
                          Brand Consulting
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/logo-design">Logo Design</Link>
                      </li>
                      <li>
                        <Link href="/services/industrial-design">
                          Industrial / Product Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/graphic-design">
                          Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/visualisation">
                          2D / 3D Visualisation
                        </Link>
                      </li>
                    </ul>
                    <div style={{ marginTop: "30px" }}>
                      <h4>
                        Experience Design <BsArrowRight className="mega-icon" />
                      </h4>
                      <ul>
                        <li>
                          <Link href="/services/ui-ux">UI/UX Design</Link>
                        </li>
                        <li>
                          <Link href="/services/website-design">
                            Website Design
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/mobile-experience">
                            Mobile Experience
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/commerce-experience">
                            Commerce Experience
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Technology <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link href="/services/ai-ml">
                          AI & Machine Learning
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/devops">DevOps Consulting</Link>
                      </li>
                      <li>
                        <Link href="/services/data-analytics">
                          Data & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-development">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ecommerce">E-commerce</Link>
                      </li>
                      <li>
                        <Link href="/services/qa-testing">
                          Quality Assurance & Testing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/cloud">Cloud Services</Link>
                      </li>
                      <li>
                        <Link href="/services/cyber-security">
                          Cyber Security
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Digital Marketing <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link href="/services/seo">
                          Search Engine Optimisation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/social-media">
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/performance-marketing">
                          Performance Marketing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/content-marketing">
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/automation">
                          Marketing Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/analytics">Analytics</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/solutions" className="nav-link">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/industries" className="nav-link">
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className="nav-link">
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-actions">
        <Link href="/contact" className="contact-btn">
          Contact Us
          <span className="icon-btn">
            <BsArrowRight className="icon-inside-btn-1" />
            <BsArrowRight className="icon-inside-btn-2" />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
