import { getBlogMetadata } from "../functions";
import BlogList from "../components/BlogList";
import { Suspense } from "react";

export default function BlogIndex() {
  const blogs = getBlogMetadata();
  return (
    <div style={{ display: "flex" }}>
      <Suspense>
        <BlogList blogs={blogs} />
      </Suspense>
    </div>
  );
}
