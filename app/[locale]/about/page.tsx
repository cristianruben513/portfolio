import ConnectLinks from "@/app/components/ConnectLinks";
import Container from "@/app/components/Container";
import PageHeader from "@/app/components/Header";
import Section from "@/app/components/Section";
import Link from "@/app/components/ui/Link";
import { MetadataProps } from "@/types/metadata";
import { MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Gallery from "./components/Gallery";
import Workplaces from "./components/Workplaces";

import Image from "next/image";
import meLily from "public/gallery/1_1.jpg";
import colorado from "public/gallery/4.jpg";
import perishipLogo from "public/work/cbtis.jpeg";
import dorichangos from "public/work/dorichangos.jpg";
import hinesLogo from "public/work/uppe.jpg";


export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('about.title'),
    description: t('about.description'),
    openGraph: {
      title: t('about.title'),
      description: t('about.description'),
      type: "website",
      url: "https://cristian.digital",
      images: [{
        url: "https://cristian.digital/og_image.webp",
        alt: "Cristian Ruben"
      }],
    }
  };
}

export default function About() {
  const t = useTranslations('about');

  const educationplaces = [
    {
      title: t('sections.education.places.uppe.title'),
      company: "Politécnica de Pénjamo - Guanajuato, México",
      time: "2021 - 2024",
      imageSrc: hinesLogo,
      link: "https://uppenjamo.edu.mx/",
    },
    {
      title: t('sections.education.places.cbtis.title'),
      company: "CBTIS 171 - Guanajuato, México",
      time: "2018 - 2021",
      imageSrc: perishipLogo,
    },
  ];

  const workplaces = [
    {
      title: "Freelancer",
      company: t('sections.work.places.dorichangos.title'),
      time: "2023 - 2024",
      imageSrc: dorichangos,
      description: t('sections.work.places.dorichangos.content'),
    },
  ];

  return (
    <Container className="flex flex-col gap-16 md:gap-24">
      <PageHeader title={t('title')}>
        {t('description')}
      </PageHeader>

      <div className="md:mb-8 mb-20 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meLily}
            alt="Yo y mi amor"
            width={224}
            height={139}
            className="pointer-events-none relative inset-0 h-52 left-6 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt="Yo y mi novia"
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-28 left-[40%] w-40 h-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
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
        <Section
          heading={t('sections.about.title')}
          headingAlignment="left"
        >
          <div className="flex flex-col gap-6 leading-loose">
            <p>{t('sections.about.content1')}</p>
            <p>{t('sections.about.content2')}</p>
            <p>{t('sections.about.content3')}</p>
          </div>
        </Section>

        <Section
          heading={t('sections.contact.title')}
          headingAlignment="left"
        >
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity group" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-neutral-200 dark:bg-black p-4 no-underline transition-opacity"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <MoveUpRight className="ml-auto group-hover:rotate-45 transition-transform duration-300" size={20} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          heading={t('sections.work.title')}
          headingAlignment="left"
        >
          <div className="flex w-full flex-col gap-8">
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section
          heading={t('sections.education.title')}
          headingAlignment="left"
        >
          <div className="flex w-full flex-col gap-8">
            <Workplaces items={educationplaces} />
          </div>
        </Section>
      </div>
    </Container>
  );
}
