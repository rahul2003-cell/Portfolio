import { compileMDX } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { CalendarDays, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

const components = {
  h1: ({ children, ...props }: any) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-brand" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }: any) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline" {...props}>
      {children}
    </a>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-muted rounded px-1.5 py-0.5 text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-brand pl-4 italic my-4 text-muted-foreground" {...props}>
      {children}
    </blockquote>
  ),
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.metadata.title} | Portfolio`,
    description: post.metadata.summary,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
    components,
  });

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.metadata.tags?.map((tag: string) => (
            <Badge key={tag} variant="outline" className="border-brand/30 text-brand">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {post.metadata.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.metadata.author}
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {post.metadata.publishedAt}
          </div>
        </div>
        
        <div className="border-b border-border my-6" />
      </header>

      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
}