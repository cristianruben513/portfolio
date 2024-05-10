import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "@/app/components/ui/Link";
import Section from "@/app/components/Section";
import { formatDate } from "@/app/_utils/formatDate";
import type { Post } from ".contentlayer/generated";

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
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-md object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
