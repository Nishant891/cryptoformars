"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import BlogPost from "../blog/[slug]/page";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type BlogMetadata = {
  slug: string;
};

export default function BlogList({ blogs }: { blogs: BlogMetadata[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSlug = searchParams?.get("slug");

  const defaultSlug = blogs[0]?.slug || "no-blog";
  const slug = currentSlug || defaultSlug;

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleBlogClick = (slug: string) => {
    router.push(`/blog?slug=${slug}`, undefined);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div
          className="w-1/5 h-full p-4 border-r border-gray-300 overflow-y-auto"
          style={{ position: "sticky", top: 0 }}
        >
          <h1 className="text-2xl font-bold mb-4">Blogs</h1>
          <div
            className="absolute top-4 right-4 flex"
            style={{ marginLeft: isSidebarVisible ? "20%" : "0" }}
          >
            <button
              onClick={toggleSidebar}
              className="bg-blue-500 text-white px-1 py-1 rounded shadow"
            >
              {isSidebarVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
            </button>
          </div>
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
      )}

      {/* Blog Content */}
      <div className={`flex-1 overflow-y-auto p-4`} style={{ height: "100vh" }}>
        <BlogPost slug={slug} />
        <div
          className={`${isSidebarVisible ? "hidden" : "block"} absolute top-1/2 left-0 flex`}
          style={{ marginLeft: isSidebarVisible ? "20%" : "0" }}
        >
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white px-1 py-1 rounded shadow"
          >
            {isSidebarVisible ? <IoIosArrowBack /> : <IoIosArrowForward />}
          </button>
        </div>
      </div>
    </div>
  );
}
