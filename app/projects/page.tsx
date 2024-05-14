import { allProjects } from ".contentlayer/generated";
import Halo from "@/app/components/ui/Halo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import PageHeader from "../components/Header";

const title = "Proyectos | Cristian Ruben";
const description = "Algunos de los proyectos en los que he trabajado y de los que estoy orgulloso.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://cristian.digital/projects/",
    images: [{ url: "https://cristian.digital/api/og?title=projects", alt: "Proyectos" }],
  },
};

export default function Blog() {
  const projects = allProjects;

  return (
    <Container className="mx-auto max-w-[800px] min-h-screen">
      <div className="flex flex-col gap-16 md:gap-24 ">
        <PageHeader title="Mis Proyectos">
          Algunos de los proyectos en los que he trabajado y de los que estoy orgulloso.
        </PageHeader>

        <ul className="animated-list flex animate-in flex-col">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6"
            >
              <Link
                href={`/projects/${project.slug}`}
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
                    href={`/projects/${project.slug}`}
                    className="font-medium text-primary hover:underline"
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
