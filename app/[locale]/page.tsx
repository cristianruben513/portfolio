import { allPosts } from ".contentlayer/generated";
import PostList from "@/app/[locale]/blog/components/PostList";
import BentoGrid from "@/app/components/bento/BentoGrid";
import Link from "@/app/components/ui/Link";
import Me from "@/public/avatar.webp";
import { MetadataProps } from "@/types/metadata";
import { MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import { links } from "../components/bento/Contact";
import Container from "../components/Container";
import { Photos } from "../components/photos";

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      type: "website",
      url: "https://cristian.digital",
      images: [{
        url: "https://cristian.digital/og_image.webp",
        alt: "Cristian Ruben"
      }],
    }
  };
}

export default function Home() {
  const t = useTranslations("home");

  const posts = allPosts
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-16 md:gap-20">

      <Container className="flex animate-in flex-col gap-8">
        <Image
          src={Me}
          alt="Cristian Ruben"
          className="rounded-full size-24"
        />

        <h1 className="text-3xl md:text-3xl font-bold">
          Cristian Ruben Figueroa Espinoza
        </h1>

        <h2 className="max-w-2xl text-secondary -mt-2 md:text-lg">
          <span className="font-bold text-blue-700 dark:text-blue-300">
            {t("hero.1")}
          </span> {""}
          {t("hero.2")}{" "}
          <span className="italic text-orange-700 dark:text-yellow-200">
            {t("hero.3")}
          </span> {" "}
          {t("hero.4")}
        </h2>
      </Container>

      <Container className="flex flex-wrap gap-2 gap-y-3 md:gap-4 animate-in">
        {links.map((link, index) => (
          <div className="border rounded-full py-1.5 px-3.5 border-neutral-600" key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.arialabel}
              className="flex items-center gap-2 md:text-lg font-semibold"
            >
              {link.icon}
              <span className="text-xs">
                {link.name}
              </span>
            </a>
          </div>
        ))}
      </Container>

      <Container className="animate-in">
        <BentoGrid />
      </Container>

      <Photos />

      <Container className="flex animate-in flex-col gap-8">
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 text-xl font-semibold"
            href="/blog"
          >
            {t("blog.title")}
            <MoveUpRight className="size-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>

          <p className="max-w-lg text-secondary">
            {t("blog.subtitle")}
          </p>
        </div>

        <PostList posts={posts} />
      </Container>
    </div>
  );
}
