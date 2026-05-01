import { compileMDX } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { CalendarDays, User, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

// Custom components for MDX
const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-brand">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground leading-relaxed mb-4">
      {children}
    </p>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
      {children}
    </a>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-muted rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-muted rounded-lg p-4 overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li>{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-brand pl-4 italic my-4 text-muted-foreground">
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
  
  // Fix: Handle null case first
  if (!post) {
    return {
      title: "Post Not Found | Portfolio",
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

  // For next-mdx-remote v6.0.0
  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
    },
    components,
  });

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      {/* Header */}
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

      {/* MDX Content */}
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </article>
  );
}