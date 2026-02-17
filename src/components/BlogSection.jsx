import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/HomeComponents/BlogSection.css";
import { blogMetadata } from "../Blogs/metadata";

const BlogSection = () => {
  // Custom Navigation Refs
  // Custom Navigation State
  const [prevEl, setPrevEl] = React.useState(null);
  const [nextEl, setNextEl] = React.useState(null);

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-head-container">
        <h2 className="blog-title">Blogs</h2>
        <p className="blog-desc">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing.
        </p>
      </div>

      <div className="blog-carousel-container" style={{ position: "relative" }}>
        {/* Navigation Buttons */}
        <div ref={(node) => setPrevEl(node)} className="blog-nav-btn blog-prev">
          <FaArrowLeft />
        </div>
        <div ref={(node) => setNextEl(node)} className="blog-nav-btn blog-next">
          <FaArrowRight />
        </div>

        {mounted && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={true}
            slidesOffsetBefore={60}
            navigation={{
              prevEl,
              nextEl,
            }}
            breakpoints={{
              0: {
                slidesOffsetBefore: 20,
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
                slidesOffsetBefore: 60,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
                slidesOffsetBefore: 60,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesOffsetBefore: 60,
              },
            }}
            className="blog-swiper"
          >
            {blogMetadata.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="blog-card">
                  <div className="blog-image-wrapper">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span className="blog-badge">BLOG</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{blog.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
