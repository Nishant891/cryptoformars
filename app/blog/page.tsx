import { getBlogMetadata } from "../functions";
import BlogList from "../components/BlogList";

export default function BlogIndex({ params }: { params: { slug: string } }) {
  const blogs = getBlogMetadata();
  return (
    <div style={{ display: "flex" }}>
      <BlogList blogs={blogs} />
    </div>
  );
}
