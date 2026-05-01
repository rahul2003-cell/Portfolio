import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import RevealAnimation from "@/components/reveal-animations";

export const metadata = {
  title: "Blog | Rahul Nagare",
  description: "Thoughts, tutorials, and updates from my Java Full Stack journey.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-light">
          Blog
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Thoughts, tutorials, and updates from my Java Full Stack journey.
        </p>
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <RevealAnimation key={post.slug} delay={index * 0.1}>
            <Link href={`/blogs/${post.slug}`}>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-brand/50 transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-brand/30 text-brand">
                      {post.metadata.tags?.[0] || "Blog"}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {post.metadata.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand transition-colors">
                    {post.metadata.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.metadata.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {post.metadata.author}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}