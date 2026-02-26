import "../css/header.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/main-logo.png";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();

  const [isTransparent, setIsTransparent] = useState(() => {
    const isTransPage = pathname === "/" || pathname === "/about";
    const isAtTop = typeof window !== "undefined" ? window.scrollY < 50 : true;
    return isTransPage && isAtTop;
  });
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const closeMenuTimeoutRef = useRef(null);

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

  // Scroll Direction & Logic (Hide/Show Header)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        if (currentScrollY > lastScrollY + 5) {
          setIsScrolledDown(true);
        } else if (currentScrollY < lastScrollY - 5) {
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

  // Logic for Transparent Header (Home/About Page + Top of Page)
  useEffect(() => {
    const handleTransparency = () => {
      const isTransparentPage = pathname === "/" || pathname === "/services";
      const isAtTop = window.scrollY < 50;

      setIsTransparent(isTransparentPage && isAtTop);
    };

    handleTransparency();
    window.addEventListener("scroll", handleTransparency, { passive: true });
    return () => window.removeEventListener("scroll", handleTransparency);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeMenuTimeoutRef.current)
        clearTimeout(closeMenuTimeoutRef.current);
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
        <Link to="/" className="logo">
          <img src={logo} alt="WAC Logo" />
        </Link>
        <nav>
          <ul className="nav-menu">
            <li
              className="nav-item"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link to="/services" className="nav-link">
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
                    <Link to="/services" className="mega-link-footer">
                      Go to overview <BsArrowRight />
                    </Link>
                  </div>
                  <div className="mega-column">
                    <h4>
                      Branding <BsArrowRight className="mega-icon" />
                    </h4>
                    <ul>
                      <li>
                        <Link to="/services/brand-consulting">
                          Brand Consulting
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/logo-design">Logo Design</Link>
                      </li>
                      <li>
                        <Link to="/services/industrial-design">
                          Industrial / Product Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/graphic-design">
                          Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/visualisation">
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
                          <Link to="/services/ui-ux">UI/UX Design</Link>
                        </li>
                        <li>
                          <Link to="/services/website-design">
                            Website Design
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/mobile-experience">
                            Mobile Experience
                          </Link>
                        </li>
                        <li>
                          <Link to="/services/commerce-experience">
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
                        <Link to="/services/ai-ml">AI & Machine Learning</Link>
                      </li>
                      <li>
                        <Link to="/services/devops">DevOps Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services/data-analytics">
                          Data & Analytics
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/web-development">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/mobile-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ecommerce">E-commerce</Link>
                      </li>
                      <li>
                        <Link to="/services/qa-testing">
                          Quality Assurance & Testing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cloud">Cloud Services</Link>
                      </li>
                      <li>
                        <Link to="/services/cyber-security">
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
                        <Link to="/services/seo">
                          Search Engine Optimisation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/social-media">
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/performance-marketing">
                          Performance Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/content-marketing">
                          Content Marketing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/automation">
                          Marketing Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/analytics">Analytics</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/solutions" className="nav-link">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/industries" className="nav-link">
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                Careers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-actions">
        <Link to="/contact" className="contact-btn">
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
