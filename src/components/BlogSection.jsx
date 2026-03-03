import React from "react";
import { Link } from "react-router-dom";
import "../css/HomeComponents/BlogSection.css";
import "../css/Blog.css";
import { blogMetadata } from "../Blogs/metadata";
import { BsArrowRight } from "react-icons/bs";

const BlogSection = ({ backgroundColor, paddingBottom, paddingTop }) => {
  const [mounted, setMounted] = React.useState(false);

  // Sort by date (newest first) and take the first 3
  const recentBlogs = [...blogMetadata]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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
      <div className="blogs-header" style={{ padding: '0 100px', marginBottom: '50px' }}>
        <div className="blogs-header-content">
          <h2 className="head-text blog-title">Blogs</h2>
          <p className="para-text blog-desc">
            Every innovation that happens here is out of a quest to get better at
            what we are already doing.
          </p>
        </div>
        <div className="blogs-header-button">
          <Link to="/blogs" className="read-more-btn">
            Read More
            <BsArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>

      <div className="blog-grid-container">
        {recentBlogs.map((blog) => (
          <div className="blog-card-new blog-card-light" key={blog.id}>
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content-new blog-content-old">
              <div className="blog-meta-new">
                <span className="blog-meta-left">
                  Blog <span className="dot-separator">·</span> {blog.readTime}
                </span>
                <span className="blog-meta-right">{blog.date}</span>
              </div>
              <Link
                to={`/blogs/${blog.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="blog-title-old">
                  {blog.title}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
