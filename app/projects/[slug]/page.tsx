import { allProjects } from ".contentlayer/generated";
import Mdx from "@/app/blog/components/MdxWrapper";
import Container from "@/app/components/Container";
import Link from "@/app/components/ui/Link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allProjects.find((project) => project.slug === params.slug);

  if (!post) { notFound() }

  const { title, description, image, slug } = post;

  const ogImage = image
    ? `https://cristian.online/projects/${slug}/${image}`
    : `https://cristian.online/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://cristian.online"),
    title: `${title} | Cristian Ruben`,
    description,
    openGraph: {
      title: `${title} | Cristian Ruben`,
      description,
      type: "article",
      url: `https://cristian.online/projects/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default function Project({ params }: { params: any }) {
  const post = allProjects.find((post) => post.slug === params.slug);

  if (!post) { notFound() }

  return (
    <Container>
      <div className="flex flex-col gap-20">
        <article>
          <div className="flex animate-in flex-col gap-3">
            <div className="flex items-center gap-3 text-secondary">
              <p>{post.time}</p>
              {post.url && (
                <>
                  <span>&middot;</span>
                  <Link href={post.url} className="no-underline hover:underline bg-gray-900 p-2 py-1 rounded-md text-sm">
                    Visit Project
                  </Link>
                </>
              )}
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {post.title}
            </h1>

            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              {post.description}
            </p>
          </div>

          <div className="h-12" />
          <div
            className="project prose prose-neutral animate-in text-pretty relative  w-full max-w-[800px]"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <Mdx code={post.body.code} />
          </div>
        </article>

        <div className="flex flex-col gap-20">

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

          <Link href="/projects" className="text-primary underline">
            ← Todos los Proyectos
          </Link>
        </div>

        <div />
      </div>
    </Container>
  );
}
