"use client";

import { useSearchParams } from "next/navigation";
import BlogPost from "@/app/blog/[slug]/page";
import Sidebar from "./Sidebar";

type BlogMetadata = {
  slug: string;
};

export default function BlogList({ blogs }: { blogs: BlogMetadata[] }) {
  const searchParams = useSearchParams();
  const currentSlug = searchParams?.get("slug");

  const defaultSlug = blogs[0]?.slug || "no-blog";
  const slug = currentSlug || defaultSlug;

  return (
    <div className="flex h-screen">
      <Sidebar blogs={blogs} />
      <BlogPost slug={slug} />
    </div>
  );
}
