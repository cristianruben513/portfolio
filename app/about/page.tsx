import { type Metadata } from "next";
import Image from "next/image";

import Section from "@/app/components/Section";
import Link from "@/app/components/ui/Link";
import { MoveUpRight } from "lucide-react";
import meLily from "public/gallery/1_1.jpg";
import colorado from "public/gallery/4.jpg";
import perishipLogo from "public/work/cbtis.jpeg";
import hinesLogo from "public/work/uppe.jpg";
import ConnectLinks from "../components/ConnectLinks";
import Container from "../components/Container";
import PageHeader from "../components/Header";
import Gallery from "./components/Gallery";
import Workplaces from "./components/Workplaces";

const title = "Sobre Mi | Cristian Ruben";
const description = "Un poquito de mi vida profesional, educativa y personal.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://cristian.digital/about",
    images: [{ url: "https://cristian.digital/api/og?title=Sobre+Mi", alt: "Acerca de mi" }],
  }
};

export default function About() {
  return (
    <Container className="flex flex-col gap-16 md:gap-24">
      <PageHeader title="Sobre Mi">
        Un poquito de mi vida profesional, educativa y personal.
      </PageHeader>

      <div className="md:mb-8 mb-20 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meLily}
            alt="Yo y mi amor"
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-56 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-28 left-[40%] w-48 h-56 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>

      <div className="hidden md:block">
        <Gallery />
      </div>

      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="Acerca de mi" headingAlignment="left">
          <div className="flex flex-col gap-6 leading-loose">
            <p>
              Hola, soy Cristian Ruben, vivo en Guanajuato, Mexico. Llevo desde los 16 años programando, soy un ingeniero en software y me especializo en desarrollo web y diseño de productos.
            </p>
            <p>
              Cuando no estoy trabajando en mi escritorio, probablemente estoy escuchando un podcast, jugando futbol con mi hermano, o disfrutando de la vida.
            </p>
          </div>
        </Section>

        <Section heading="Contacto" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-neutral-200 dark:bg-black p-4 no-underline transition-opacity text-primary"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <MoveUpRight className="ml-auto" size={20} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="Educacion" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              Me especializo en JavaScript, React y desarrollo web, con experiencia en UI/UX. Actualmente, estoy ampliando mis habilidades en infraestructura, DevOps y optimización
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

      </div>
    </Container>
  );
}

const workplaces = [
  {
    title: "Ingeniero en Software",
    company: "Politécnica de Pénjamo",
    time: "2021 - 2024",
    imageSrc: hinesLogo,
  },
  {
    title: "Técnico en Programación",
    company: "CBTIS 171",
    time: "2018 - 2021",
    imageSrc: perishipLogo,
  },
];
