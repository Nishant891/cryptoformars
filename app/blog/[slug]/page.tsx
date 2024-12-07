"use client";

import { useEffect, useState } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

type BlogContent = {
  data: { title: string };
  content: string;
};

export default function BlogPost({ slug }: any) {
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`, { method: "GET" });

        if (!response.ok) {
          throw new Error("Failed to fetch blog content");
        }

        const data = await response.json();
        const file = await unified()
          .use(remarkParse)
          .use(remarkHtml)
          .process(data.content);

        setBlogContent({ data: data.data, content: String(file) });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    fetchBlogContent();
  }, [slug]);

  if (error) return <div>Error: {error}</div>;
  if (!blogContent) return <div>Loading...</div>;

  return (
    <div className="overflow-y-auto h-full">
      <div
        className="markdown-content ml-20 mr-6 lg:mx-12"
        dangerouslySetInnerHTML={{ __html: blogContent.content }}
      />
    </div>
  );
}
