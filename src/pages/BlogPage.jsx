import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { blogMetadata } from "../Blogs/metadata.js";
import "../css/Blog.css";

// Dynamically import all JSX files from blogs folder
const blogModules = import.meta.glob("../Blogs/*.jsx", { eager: false });
const blogKeys = Object.keys(blogModules).sort();

const Blogs = (props) => {
  const { backgroundColor, limit = 3 } = props; // New prop 'limit', default to 3; use 'all' for unlimited
  const totalBlogs = blogKeys.length;

  const initialVisible =
    limit === "all" ? totalBlogs : Math.min(limit, totalBlogs);
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  // Preload blog components and images
  useEffect(() => {
    blogKeys.slice(0, visibleCount).forEach((key) => {
      // Preload blog module
      blogModules[key]().catch((error) => {
        console.error(`Error preloading blog ${key}:`, error);
      });
      // Preload image
      const blogName = key.split("/").pop().replace(".jsx", "");
      const metadata = blogMetadata.find((blog) => blog.id === blogName);
      if (metadata?.image) {
        const img = new Image();
        img.src = metadata.image;
        img.onerror = () => {
          console.error(`Failed to preload image: ${metadata.image}`);
        };
      }
    });
  }, [visibleCount]);

  const loadMore = () => {
    const newCount = totalBlogs;
    setVisibleCount(newCount);
    setTimeout(() => {
      window.lenis?.scrollTo(window.scrollY, { immediate: true });
    }, 0);
  };

  const showLoadMore = visibleCount < totalBlogs && limit === "all"; // Only show on pages where limit='all'

  return (
    <div
      className="whole-blog-section"
      style={{
        backgroundColor: props.backgroundColor,
        paddingBottom: props.paddingBottom,
      }}
    >
      <div className="blogs-container">
        <div className="blogs-grid">
          {blogKeys.slice(0, visibleCount).map((key, index) => {
            const blogName = key.split("/").pop().replace(".jsx", "");
            const metadata = blogMetadata.find(
              (blog) => blog.slug === blogName,
            ) || {
              title: blogName,
              slug: blogName.toLowerCase(),
              excerpt: "No excerpt available.",
              image: "/images/placeholder.jpg",
              date: "No date",
            };
            // Debug the URL and metadata
            console.log(
              `Blog: ${blogName}, URL: /blogs/${blogName}, Metadata:`,
              metadata,
            );
            return (
              <div key={index}>
                <Suspense fallback={<BlogCardSkeleton />}>
                  <div className="blog-card-new blog-card-light">
                    <div className="blog-image-container">
                      <img src={metadata.image} alt={metadata.title} />
                      <div className="blog-badge-overlay">BLOG</div>
                    </div>
                    <div className="blog-content-new">
                      <div className="blog-meta-new">
                        <span>{metadata.date}</span>
                        <span>{metadata.readTime}</span>
                      </div>
                      <Link
                        to={`/blogs/${blogName}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <h3 className="blog-title-below">{metadata.title}</h3>
                      </Link>
                    </div>
                  </div>
                </Suspense>
              </div>
            );
          })}
        </div>
        {showLoadMore && (
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

// Skeleton loader for blog cards
const BlogCardSkeleton = () => (
  <div className="blog-card-new blog-card-light" style={{ opacity: 0.6 }}>
    <div className="blog-image-container" style={{ backgroundColor: "#eee" }}>
      <div
        className="blog-badge-overlay"
        style={{ backgroundColor: "#ddd", width: "40px", height: "15px" }}
      ></div>
    </div>
    <div className="blog-content-new">
      <div className="blog-meta-new">
        <div
          style={{ backgroundColor: "#ddd", width: "60px", height: "10px" }}
        ></div>
        <div
          style={{ backgroundColor: "#ddd", width: "60px", height: "10px" }}
        ></div>
      </div>
      <div
        className="skeleton-title"
        style={{
          backgroundColor: "#eee",
          height: "20px",
          width: "80%",
          marginBottom: "10px",
        }}
      ></div>
      <div
        className="skeleton-title"
        style={{ backgroundColor: "#eee", height: "20px", width: "60%" }}
      ></div>
    </div>
  </div>
);

export default Blogs;
