import Container from "@/app/components/Container";
import PageHeader from "@/app/components/Header";
import { MetadataProps } from "@/types/metadata";
import { getTranslations } from "next-intl/server";
import { Item } from "./components/GearItem";
import { gear } from "./data";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('recommendations.title'),
    description: t('recommendations.description'),
    openGraph: {
      title: t('recommendations.title'),
      description: t('recommendations.description'),
      type: "website",
      url: "https://cristian.digital",
      images: [{
        url: "https://cristian.digital/og_image.webp",
        alt: "Cristian Ruben"
      }],
    }
  };
}

export default function Recommendations() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  const t = useTranslations('recommendations');

  return (
    <Container className="flex flex-col gap-16 md:gap-24">
      <PageHeader title={t('title')}>
        {t('description')}
      </PageHeader>

      {categories.map((category, index) => (
        <section
          key={index}
          className="flex animate-in flex-col gap-8"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <h2 className="text-secondary">
            {category}
          </h2>
          <ul className="animated-list grid gap-x-6 gap-y-8 md:grid-cols-2">
            {gear.map((item, index) => {
              if (item.category !== category) return null

              return (
                <Item
                  key={index}
                  title={item.name}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </section>
      ))}
    </Container>
  );
}
