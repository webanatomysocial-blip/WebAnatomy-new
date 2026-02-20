import React from "react";
import { Link } from "react-router-dom";
import "../css/blogs.css";
import "../css/Blog.css";
import { blogMetadata } from "../Blogs/metadata";

const Blogs = () => {
  // Sort logic: newest to oldest
  const sortedBlogs = [...blogMetadata].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="blogs-page-container">
      <div>
        <h1 className="head-text">Blogs</h1>
        <p className="para-text">
          Every innovation that happens here is out of a quest to get better at{" "}
          <br />
          what we are already doing.
        </p>
      </div>
      <div className="blogs-grid">
        {sortedBlogs.map((post) => (
          <div key={post.id} className="blog-card-new blog-card-light">
            <div className="blog-image-container">
              <img src={post.image} alt={post.title} />
              <div className="blog-badge-overlay">BLOG</div>
            </div>
            <div className="blog-content-new">
              <div className="blog-meta-new">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3 className="blog-title-below">{post.title.slice(0, 50)}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
