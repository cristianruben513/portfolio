import type { Post } from ".contentlayer/generated";
import Section from "@/app/components/Section";
import Link from "@/app/components/ui/Link";
import { formatDate } from "@/lib/formatDate";

type PostProps = {
  post: Post;
  mousePosition?: {
    x: number;
    y: number;
  };
};

export default function Post({ post }: PostProps) {
  const { publishedAt, slug, title } = post;

  return (
    <li className="group py-3 first:pt-0 last:pb-0 transition-opacity">
      <div className="transition-opacity">
        <div className="flex items-center justify-between gap-6">
          <Section heading={formatDate(publishedAt)}>
            <Link
              href={`/blog/${slug}`}
              className="font-medium text-sm md:text-base leading-tight text-pretty">
              {title}
            </Link>
          </Section>
        </div>
      </div>
    </li>
  );
}
