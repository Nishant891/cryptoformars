"use client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogPost from "../blog/[slug]/page";

type BlogMetadata = {
  slug: string;
};

export default function BlogList({ blogs }: { blogs: BlogMetadata[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSlug = searchParams?.get("slug");

  const defaultSlug = blogs[0]?.slug || "no-blog";
  const slug = currentSlug || defaultSlug;

  console.log(slug);

  const handleBlogClick = (slug: string) => {
    router.push(`/blog?slug=${slug}`, undefined);
  };

  return (
    <>
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r border-gray-300">
        <h1 className="text-2xl font-bold mb-4">Blogs</h1>
        <ul className="space-y-2">
          {blogs.map((blog) => (
            <li
              key={blog.slug}
              className={`cursor-pointer ${
                slug === blog.slug
                  ? "font-bold text-blue-600"
                  : "font-normal text-gray-800"
              }`}
              onClick={() => handleBlogClick(blog.slug)}
            >
              {blog.slug}
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Content */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <BlogPost slug={slug} />
      </div>
    </>
  );
}
