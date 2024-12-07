import { getBlogMetadata } from "../functions";
import BlogList from "../components/BlogList";

export default function BlogIndex() {
  const blogs = getBlogMetadata();
  return (
    <div style={{ display: "flex" }}>
      <BlogList blogs={blogs} />
    </div>
  );
}
