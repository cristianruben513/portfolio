import { allPosts } from ".contentlayer/generated";
import { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/Header";
import PostList from "./components/PostList";

export const metadata: Metadata = {
  title: "Blog | Cristian Ruben",
  description:
    "I write about programming, design, and occasionally life updates!",
  openGraph: {
    title: "Blog | Cristian Ruben",
    description:
      "I write about programming, design, and occasionally life updates!",
    type: "website",
    url: "https://cristianfigueroa.dev/blog/Blog",
    images: [{ url: "https://cristianfigueroa.dev/api/og?title=Blog", alt: "Blog" }],
  },
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <Container className="flex flex-col gap-16 md:gap-24">
      <PageHeader title="Mi Blog">
        {posts.length} Articulos hasta ahora, pero faltan muchos más por venir!
      </PageHeader>

      <div
        className="animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <PostList posts={posts} />
      </div>
    </Container>
  );
}
