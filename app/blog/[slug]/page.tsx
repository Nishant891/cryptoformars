"use client"
import { useEffect, useState } from "react";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

type BlogContent = {
  data: { title: string };
  content: string; // This will store the processed HTML
};

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
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
        // Process the Markdown content and convert it to HTML using unified
        const file = await unified()
          .use(remarkParse) // Parse the Markdown
          .use(remarkHtml)  // Convert Markdown to HTML
          .process(data.content);

        // Set the HTML content in the state
        setBlogContent({ data: data.data, content: String(file) });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    fetchBlogContent();
  }, [slug]);

  if (error) return <div>Error: {error}</div>;
  if (!blogContent) return <div>Loading...</div>;

  const { data, content } = blogContent;
  console.log(blogContent.content)

  return (
    <div>
      <h1>{data.title}</h1>
      <div className="markdown-content" dangerouslySetInnerHTML={{ __html: blogContent.content }} />
    </div>
  );
  
}
