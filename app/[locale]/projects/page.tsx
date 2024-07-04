import { allProjects } from ".contentlayer/generated";
import Container from "@/app/components/Container";
import PageHeader from "@/app/components/Header";
import Halo from "@/app/components/ui/Halo";
import { MetadataProps } from "@/types/metadata";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('projects.title'),
    description: t('projects.description'),
    openGraph: {
      title: t('projects.title'),
      description: t('projects.description'),
      type: "website",
      url: "https://cristian.digital",
      images: [{
        url: "https://cristian.digital/og_image.webp",
        alt: "Cristian Ruben"
      }],
    }
  };
}

export default function Blog() {
  const projects = allProjects;
  const t = useTranslations('projects');

  return (
    <Container className="mx-auto max-w-[800px] min-h-screen">
      <div className="flex flex-col gap-16 md:gap-24 ">
        <PageHeader title={t('title')}>
          <p>{t('description')}</p>
        </PageHeader>

        <ul className="animated-list flex animate-in flex-col">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6"
            >
              <Link
                href={`/projects/${project.slug}` as any}
                className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
              >
                <Halo strength={10}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="size-full object-cover"
                  />
                </Halo>
              </Link>
              <div className="w-full space-y-2 md:w-3/5">
                <div>
                  <Link
                    href={`/projects/${project.slug}` as any}
                    className="font-medium hover:underline"
                  >
                    {project.title}
                  </Link>
                  <time className="text-secondary"> · {project.time}</time>
                </div>

                <p className="line-clamp-3 text-secondary">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
