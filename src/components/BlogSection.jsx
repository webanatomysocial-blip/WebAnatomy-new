import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "../css/HomeComponents/BlogSection.css";
import "../css/Blog.css";
import { blogMetadata } from "../Blogs/metadata";

const BlogSection = ({ backgroundColor, paddingBottom, paddingTop }) => {
  const [mounted, setMounted] = React.useState(false);

  // Sort by date (newest first) and take the first 5
  const recentBlogs = [...blogMetadata]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="blog-section"
      style={{
        backgroundColor: backgroundColor,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
      }}
    >
      <div className="blog-head-container">
        <h2 className="head-text blog-title">Blogs</h2>
        <p className="para-text blog-desc">
          Every innovation that happens here is out of a quest to get better at
          what we are already doing.
        </p>
      </div>

      <div className="blog-carousel-container" style={{ position: "relative" }}>
        {mounted && (
          <Swiper
            spaceBetween={30}
            slidesPerView={3.5}
            centeredSlides={false}
            loop={false}
            observer={true}
            observeParents={true}
            watchSlidesProgress={true}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },

              1280: {
                slidesPerView: 3.5,
                spaceBetween: 30,
                slidesOffsetBefore: 60,
                slidesOffsetAfter: -200,
              },
            }}
            className="blog-swiper"
          >
            {recentBlogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                <div className="blog-card-new blog-card-light">
                  <div className="blog-image-container">
                    <img src={blog.image} alt={blog.title} />
                    <div className="blog-badge-overlay">BLOG</div>
                  </div>
                  <div className="blog-content-new">
                    <div className="blog-meta-new">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h3 className="blog-title-below">
                        {blog.title.slice(0, 50)}
                      </h3>
                    </Link>
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
