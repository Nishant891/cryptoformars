import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getBlogContent = (slug: string) => {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent); // Parse front matter and content
  return { data, content };
};

export const getBlogMetadata = () => {
  const files = fs.readdirSync(path.join(process.cwd(), "content")); // Blogs stored in `content/`
  return files.map((file) => {
    const filePath = path.join(process.cwd(), "content", file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent); // Extract frontmatter only
    return { ...data, slug: file.replace(/\.md$/, "") };
  });
};
