import { allPosts } from ".contentlayer/generated";
import PostList from "@/app/blog/components/PostList";
import BentoGrid from "@/app/components/bento/BentoGrid";
import Link from "@/app/components/ui/Link";
import Me from "@/public/avatar.webp";
import { MoveUpRight } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Container from "./components/Container";
import { Photos } from "./components/photos";

const description = "Ingeniero en Software y Programador Fullstack con +3 años de experiencia en el desarrollo de aplicaciones web y servicios de backend.";

export const metadata: Metadata = {
  title: "Cristian Ruben - Ingeniero en Software",
  description,
  openGraph: {
    title: "Cristian Ruben - Ingeniero en Software",
    description,
    type: "website",
    url: "https://cristian.digital",
    images: [{ url: "https://cristian.digital/og_image.webp", alt: "Cristian Ruben" }],
  }
};

export default function Home() {
  const posts = allPosts
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-20">

      <Container className="flex animate-in flex-col gap-8 w-full">
        <div className="overflow-hidden rounded-full size-24">
          <Image
            src={Me}
            alt="Cristian Ruben"
            width={1200}
            height={1200}
            priority
            placeholder="blur"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          Cristian Ruben
        </h1>

        <h2 className="max-w-xl text-secondary text-pretty -mt-2">
          <span className="font-bold text-blue-700 dark:text-blue-300">
            Ingeniero en Software
          </span> {""}
          y Programador Fullstack con {""}
          <span className="italic text-orange-700 dark:text-yellow-200">
            +3 años de experiencia
          </span> {""}
          en el desarrollo de aplicaciones web y servicios de backend.
        </h2>
      </Container>

      <Container className="animate-in">
        <BentoGrid />
      </Container>

      <Photos />

      <Container className="flex animate-in flex-col gap-8 w-full">
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary"
            href="/blog"
          >
            Ultimos Articulos
            <MoveUpRight className="size-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>

          <p className="max-w-lg text-secondary">
            Ocasionalmente escribo sobre programación, productividad y más.
          </p>
        </div>
        
        <PostList posts={posts} />
      </Container>
    </div>
  );
}
