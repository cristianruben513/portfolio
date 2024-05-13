import { allPosts } from ".contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;

  const ogImage = image
    ? `https://cristian.online/${image}`
    : `https://cristian.online/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://cristian.online"),
    title: `${title} | Cristian Ruben`,
    description,
    openGraph: {
      title: `${title} | Cristian Ruben`,
      description,
      type: "article",
      publishedTime,
      url: `https://cristian.online/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}