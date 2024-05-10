import { Post as PostType, allPosts } from ".contentlayer/generated";
import Link from "@/app/components/ui/Link";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Mdx from "@/app/blog/components/MdxWrapper";
import Tags from "@/app/components/Tags";
import Avatar from "@/app/components/ui/Avatar";
import Me from "@/public/avatar.webp";

import { formatDate } from "@/app/_utils/formatDate";
import Container from "@/app/components/Container";

type PostProps = {
  post: PostType;
  related: PostType[];
};

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
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
    ? `https://cristianfigueroa.dev/${image}`
    : `https://cristianfigueroa.dev/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://cristianfigueroa.dev"),
    title: `${title} | Cristian Ruben`,
    description,
    openGraph: {
      title: `${title} | Cristian Ruben`,
      description,
      type: "article",
      publishedTime,
      url: `https://cristianfigueroa.dev/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default async function Blog({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <div className="flex flex-col gap-20">
        <article>
          <div className="flex flex-col gap-8">
            <div className="flex max-w-xl flex-col gap-4 text-pretty">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
                {post.title}
              </h1>
              <p className="text-secondary">{post.summary}</p>
            </div>
            <div className="flex max-w-none items-center gap-4">
              <Avatar src={Me} initials="br" size="sm" />
              <div className="leading-tight">
                <p>Cristian Ruben</p>
                <p className="text-secondary">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </p>
              </div>
            </div>
          </div>

          {post.image && (
            <>
              <div className="h-8" />
              <Image
                src={post.image}
                alt={`${post.title} post image`}
                width={700}
                height={350}
                className="-ml-6 w-[calc(100%+48px)] max-w-none md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]"
                priority
              />
            </>
          )}

          <div className="h-16" />
          <div className="prose prose-neutral text-pretty">
            <Mdx code={post.body.code} />
          </div>
        </article>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2>Tags</h2>
            <Tags tags={post.tags} />
          </div>

          <div className="flex flex-col gap-6">
            <h2>Contacto</h2>
            <p className="max-w-lg text-secondary">
              Necesitas ayuda con un proyecto? Puedes contactarme a través de mis {""}
              <Link href="/links" underline>
                links
              </Link>
              . Estare encantado de ayudarte!{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
