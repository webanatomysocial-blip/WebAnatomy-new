import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import PageTransition from "./PageTransition";
import Blogs from "../pages/Blogs";
import DynamicBlog from "../components/DynamicBlog";
import { Helmet } from "react-helmet-async";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  const appRoutes = (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageTransition>
            <Home />
          </PageTransition>
        }
      />
      <Route
        path="/about"
        element={
          <PageTransition>
            <About />
          </PageTransition>
        }
      />

      <Route
        path="/services"
        element={
          <PageTransition>
            <Services />
          </PageTransition>
        }
      />

      <Route
        path="/careers"
        element={
          <PageTransition>
            <Careers />
          </PageTransition>
        }
      />

      <Route
        path="/contact"
        element={
          <PageTransition>
            <Contact />
          </PageTransition>
        }
      />

      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogId" element={<DynamicBlog />} />
    </Routes>
  );

  // Disable page transition animation for dynamic blog posts
  if (location.pathname.startsWith("/blogs/")) {
    return appRoutes;
  }

  return <AnimatePresence mode="wait">{appRoutes}</AnimatePresence>;
}

export default AnimatedRoutes;
