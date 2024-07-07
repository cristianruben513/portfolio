import { allPosts } from ".contentlayer/generated";
import Mdx from "@/app/[locale]/blog/components/MdxWrapper";
import { formatDate } from "@/lib/formatDate";
import Container from "@/app/components/Container";
import Tags from "@/app/components/Tags";
import Me from "@/public/avatar.webp";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContactForm from "../components/ContactForm";

type Props = {
  params: {
    slug: string;
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) { notFound() }

  const { title, publishedAt, summary, slug } = post;

  const ogImage = `https://cristian.digital/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://cristian.digital"),
    title: `${title} | Cristian Ruben`,
    description: summary,
    openGraph: {
      title: `${title} | Cristian Ruben`,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `https://cristian.digital/blog/${slug}`,
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
      <div className="flex flex-col gap-20 w-full">
        <article>
          <div className="flex flex-col gap-8">
            <div className="flex max-w-xl flex-col gap-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tight">
                {post.title}
              </h1>
              <p className="text-secondary">{post.summary}</p>
            </div>
            <div className="flex max-w-none items-center gap-4">
              <div className="overflow-hidden rounded-full size-10">
                <Image
                  src={Me}
                  alt="Cristian Ruben"
                  width={1200}
                  height={1200}
                  priority
                  placeholder="blur"
                />
              </div>
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
            <Image
              src={post.image}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none md:rounded-lg lg:ml-0 lg:w-full mt-8"
              priority
            />
          )}

          <div className="h-16" />

          <div className="prose max-w-[800px] prose-neutral">
            <Mdx code={post.body.code} />
          </div>
        </article>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2>Tags</h2>
            <Tags tags={post.tags} />
          </div>

          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
