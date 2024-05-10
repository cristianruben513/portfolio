import { Metadata } from "next";
import Image from "next/image";

import Section from "@/app/components/Section";
import Link from "@/app/components/ui/Link";
import colorado from "public/gallery/4.jpg";
import meLily from "public/gallery/1_1.jpg";
import hinesLogo from "public/work/uppe.jpg";
import perishipLogo from "public/work/cbtis.jpeg";
import ConnectLinks from "../components/ConnectLinks";
import Container from "../components/Container";
import PageHeader from "../components/Header";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";
import {  MoveUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Cristian Ruben",
  description:
    "Houston-based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
};

export default function About() {
  return (
    <Container>
      <div className="flex flex-col gap-16 md:gap-24">

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
              alt={"me and lily"}
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
          <Section heading="About" headingAlignment="left">
            <div className="flex flex-col gap-6 leading-loose">
              <p>
                Hola, Soy Cristian Ruben, Vivo en Guanajuato, Mexico, llevo desde los 15 años programando, Soy un ingeniero en software titulado y me especializo en desarrollo web y diseño de productos.
              </p>
              <p>
                Cuando no estoy trabajando en mi escritorio, probablemente estoy levantando pesas, jugando futbol con mi hermano, o disfrutando de la vida
              </p>
            </div>
          </Section>

          <Section heading="Connect" headingAlignment="left">
            <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg bg-black p-4 no-underline transition-opacity "
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
