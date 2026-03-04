import React, { Suspense, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { worksMetadata } from "../works/metadata.js";
import { Helmet } from "react-helmet-async";

// Import all work modules from ../works/*.jsx
const workModules = import.meta.glob("../works/*.jsx");

export default function DynamicWork() {
  const { workId } = useParams();

  // 1. Find metadata based on the URL param (slug or id)
  const metadata = useMemo(() => {
    if (!workId) return null;
    return (
      worksMetadata.find((w) => w.slug === workId || w.id === workId) || null
    );
  }, [workId]);

  // 2. Determine the file path key
  const moduleKey = useMemo(() => {
    if (metadata) {
      const targetId = String(metadata.id).toLowerCase();
      const key = Object.keys(workModules).find((k) =>
        k.toLowerCase().includes(`/${targetId}.jsx`),
      );
      if (key) return key;
    }
    // Fallback: try to match the URL param directly to filename
    const directKey = Object.keys(workModules).find((k) => {
      const fname = k.split("/").pop().replace(".jsx", "").toLowerCase();
      return fname === String(workId).toLowerCase();
    });
    return directKey;
  }, [metadata, workId]);

  // 3. Lazy Load the component
  const WorkComponent = useMemo(() => {
    if (!moduleKey) return null;
    return React.lazy(workModules[moduleKey]);
  }, [moduleKey]);

  if (!WorkComponent) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Project Not Found</h1>
        <p>We couldn't find the case study you're looking for.</p>
        <Link
          to="/works"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Back to Works
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {metadata ? `${metadata.title} | Web Anatomy` : "Work | Web Anatomy"}
        </title>
      </Helmet>

      <Suspense
        fallback={
          <div style={{ padding: "100px", textAlign: "center" }}>
            Loading...
          </div>
        }
      >
        <WorkComponent />
      </Suspense>
    </>
  );
}
