import "../css/header.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/main-logo.png";
import { BsArrowRight } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const [isZoomScrollVisible, setIsZoomScrollVisible] = useState(false);

  const [isTransparent, setIsTransparent] = useState(() => {
    const isTransPage =
      pathname === "/" ||
      pathname === "/about" ||
      pathname === "/works" ||
      pathname.startsWith("/works/");
    const isAtTop = typeof window !== "undefined" ? window.scrollY < 50 : true;
    return isTransPage && isAtTop;
  });
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const closeMenuTimeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.setProperty("overflow", "hidden", "important");
    } else {
      document.body.style.setProperty("overflow", "");
    }
    return () => {
      document.body.style.setProperty("overflow", "");
    };
  }, [isMenuOpen]);

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

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
      const isTransparentPage =
        pathname === "/" ||
        pathname === "/services" ||
        pathname === "/works" ||
        pathname.startsWith("/works/");
      const isAtTop = window.scrollY < 50;

      setIsTransparent(isTransparentPage && isAtTop);
    };

    handleTransparency();
    window.addEventListener("scroll", handleTransparency, { passive: true });
    return () => window.removeEventListener("scroll", handleTransparency);
  }, [pathname]);

  // Track if #zoomScroll section is active in the viewport
  useEffect(() => {
    const zoomSection = document.getElementById("zoomScroll");
    if (!zoomSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsZoomScrollVisible(entry.isIntersecting);
      },
      {
        root: null,
        // Trigger only when the top of the zoomScroll section reaches the very top of the viewport
        // and untrigger when it leaves.
        rootMargin: "-90px 0px -100% 0px",
        threshold: 0,
      },
    );

    observer.observe(zoomSection);

    return () => {
      observer.unobserve(zoomSection);
    };
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeMenuTimeoutRef.current)
        clearTimeout(closeMenuTimeoutRef.current);
    };
  }, []);

  const isAtTop = lastScrollY === 0;
  // Always disable transparency if Services is hovered
  const shouldShowTransparent =
    (isTransparent || isZoomScrollVisible) && !isServicesHovered;

  return (
    <header
      className={`header-container ${isScrolledDown && !isMenuOpen ? "hidden" : ""} ${
        shouldShowTransparent ? "header-transparent" : ""
      } ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="header-wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="WAC Logo" />
        </Link>
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {/* ... rest of the nav-menu items ... */}
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
                {/* ... mega-menu content ... */}
                <div className="mega-menu-content">
                  <div className="mega-left-section">
                    <div className="mega-items-grid">
                      {/* Column 1 */}
                      <div className="mega-grid-column">
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">
                              Experience Design
                            </h4>
                            <p className="sub-small-para-white">
                              Crafting intuitive and immersive digital
                              interfaces.
                            </p>
                          </div>
                        </Link>
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">Branding</h4>
                            <p className="sub-small-para-white">
                              Building unique identities that resonate and last.
                            </p>
                          </div>
                        </Link>
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">Technology</h4>
                            <p className="sub-small-para-white">
                              Scalable architectures and cutting-edge
                              development.
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Column 2 */}
                      <div className="mega-grid-column">
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">
                              Digital Marketing
                            </h4>
                            <p className="sub-small-para-white">
                              Data-driven strategies for brand growth and ROI.
                            </p>
                          </div>
                        </Link>
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">
                              Strategy & Consulting
                            </h4>
                            <p className="sub-small-para-white">
                              Roadmaps for success and organizational
                              transformation.
                            </p>
                          </div>
                        </Link>
                        <Link to="/services" className="mega-item">
                          <div className="mega-item-icon"></div>
                          <div className="mega-item-text">
                            <h4 className="sub-small-head-white">
                              Product Innovation
                            </h4>
                            <p className="sub-small-para-white">
                              Transforming bold ideas into market-ready
                              solutions.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mega-right-section">
                    <div className="mega-featured-box">
                      <div className="mega-featured-header">
                        <span
                          className="gradient-bg-btn"
                          style={{ cursor: "pointer" }}
                        >
                          Customer Story
                        </span>
                        <BsArrowRight className="mega-featured-arrow" />
                      </div>
                      <h3 className="sub-head-text">
                        Innovative & Custom Solutions for your Digital Future
                      </h3>
                      <div className="mega-featured-stats">
                        <span className="sub-small-head">65X</span>
                        <p className="sub-small-para">Faster grow with us.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
        <Link to="/contact" className="contact-btn desktop-only">
          Contact Us
          <span className="icon-btn">
            <BsArrowRight className="icon-inside-btn-1" />
            <BsArrowRight className="icon-inside-btn-2" />
          </span>
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu-content">
              <motion.ul
                className="mobile-nav-menu"
                variants={containerVariants}
              >
                {[
                  { to: "/services", label: "Services" },
                  { to: "/works", label: "Works" },
                  { to: "/about", label: "About" },
                  { to: "/careers", label: "Careers" },
                ].map((item) => (
                  <motion.li key={item.to} variants={itemVariants}>
                    <Link to={item.to} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li className="mobile-contact-li" variants={itemVariants}>
                  <Link
                    to="/contact"
                    className="contact-btn"
                    onClick={closeMenu}
                  >
                    Contact Us
                    <span className="icon-btn">
                      <BsArrowRight className="icon-inside-btn-1" />
                      <BsArrowRight className="icon-inside-btn-2" />
                    </span>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;