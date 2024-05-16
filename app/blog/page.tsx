import { allPosts } from ".contentlayer/generated";
import { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/Header";
import PostList from "./components/PostList";

const title = "Mi Blog | Cristian Ruben"
const description = "Escribiendo sobre programación, diseño y ocasionalmente actualizaciones de la vida!"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://cristian.digital/blog/",
    images: [{ url: "https://cristian.digital/api/og?title=Blog", alt: "Blog" }],
  },
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <Container className="flex flex-col gap-16 md:gap-24 min-h-screen">
      <PageHeader title="Mi Blog">
        {posts.length} Articulos hasta ahora, ¡pero faltan muchos más por venir!
      </PageHeader>

      <div className="animate-in">
        <PostList posts={posts} />
      </div>
    </Container>
  );
}
