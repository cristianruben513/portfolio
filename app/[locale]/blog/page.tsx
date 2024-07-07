import { allPosts } from ".contentlayer/generated";
import { MetadataProps } from "@/types/metadata";
import { getTranslations } from "next-intl/server";
import Container from "../../components/Container";
import PageHeader from "../../components/Header";
import PostList from "./components/PostList";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('blog.title'),
    description: t('blog.description'),
    openGraph: {
      title: t('blog.title'),
      description: t('blog.description'),
      type: "website",
      url: "https://cristian.digital",
      images: [{
        url: "https://cristian.digital/og_image.webp",
        alt: "Cristian Ruben"
      }],
    }
  };
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const t = useTranslations('blog');

  return (
    <Container className="flex flex-col gap-16 md:gap-24 min-h-screen">
      <PageHeader title={t('title')}>
        {posts.length} {t('description')}
      </PageHeader>

      <div className="animate-in">
        <PostList posts={posts} />
      </div>
    </Container>
  );
}
