import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIRECTORY = path.join(process.cwd(), "src/content/blogs");

export type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  author: string;
  tags: string[];
};

export type BlogPost = {
  slug: string;
  metadata: BlogMetadata;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOGS_DIRECTORY);
  
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(BLOGS_DIRECTORY, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        metadata: data as BlogMetadata,
        content,
      };
    });
  
  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOGS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      metadata: data as BlogMetadata,
      content,
    };
  } catch (error) {
    return null;
  }
}