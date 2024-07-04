import type { Post } from ".contentlayer/generated";
import { formatDate } from "@/lib/formatDate";
import Section from "@/app/components/Section";
import Link from "@/app/components/ui/Link";
import { motion } from "framer-motion";
import Image from "next/image";

type PostProps = {
  post: Post;
  mousePosition?: {
    x: number;
    y: number;
  };
};

export default function Post({ post, mousePosition }: PostProps) {
  const { publishedAt, slug, title, image } = post;

  const imageHeight = 150;
  const imageWidth = 300;
  const imageOffset = 24;

  return (
    <li className="group py-3 first:pt-0 last:pb-0 transition-opacity">
      <div className="transition-opacity">
        {image && mousePosition && (
          <motion.div
            animate={{
              top: mousePosition.y - imageHeight - imageOffset,
              left: mousePosition.x - imageWidth / 2,
            }}
            initial={false}
            transition={{ ease: "easeOut" }}
            style={{ width: imageWidth, height: imageHeight }}
            className="pointer-events-none absolute z-10 hidden overflow-hidden rounded bg-tertiary shadow-sm sm:group-hover:block"
          >
            <Image
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
            />
          </motion.div>
        )}
        <div className="flex items-center justify-between gap-6">
          <Section heading={formatDate(publishedAt)}>
            <Link href={`/blog/${slug}`} className="font-medium text-sm md:text-base leading-tight">
              {title}
            </Link>
          </Section>
          <div className="min-w-24 relative flex aspect-square h-24 w-24 items-center justify-center rounded-md border border-secondary bg-secondary shadow-sm md:hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </li>
  );
}
