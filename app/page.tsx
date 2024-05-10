import { allPosts } from ".contentlayer/generated";
import PostList from "@/app/blog/components/PostList";
import BentoGrid from "@/app/components/bento/BentoGrid";
import Avatar from "@/app/components/ui/Avatar";
import Link from "@/app/components/ui/Link";
import Me from "@/public/avatar.webp";
import { MoveUpRight } from "lucide-react";
import Container from "./components/Container";
import { Photos } from "./components/photos";

export default function Home() {
  const posts = allPosts
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24">

      <Container className="flex animate-in flex-col gap-8 w-full">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Avatar src={Me} alt="Cristian Ruben" initials="br" size="xl" />
        </div>

        <div
          className="animate-in space-y-4"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Cristian Ruben
          </h1>

          <p className="max-w-xl text-secondary text-pretty mt-3">
            <span className="font-bold text-blue-500 dark:text-blue-300">
              Ingeniero en Software
            </span> {""}
            y Programador Fullstack con {""}
            <span className="italic text-orange-500 dark:text-yellow-200">
              +3 años de experiencia
            </span> {""}
            en el desarrollo de aplicaciones web y servicios de backend.
          </p>
        </div>
      </Container>

      <Container
        className="animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <BentoGrid />
      </Container>

      <Photos />

      <Container
        className="flex animate-in flex-col gap-8 w-full"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 text-xl font-semibold tracking-tight text-primary"
            href="/blog"
          >
            Ultimos Articulos
            <MoveUpRight className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
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
