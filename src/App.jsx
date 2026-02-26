import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure body content is rendering before showing Header/Footer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <SmoothScrolling>
        <ScrollToTop />
        {!isLoading && <Header />}
        <AnimatedRoutes />
        {!isLoading && <Footer />}
      </SmoothScrolling>
    </Router>
  );
}

export default App;
