import { Metadata } from "next";
import Container from "../components/Container";
import PageHeader from "../components/Header";
import { Item } from "./components/GearItem";
import { gear } from "./data";

export const metadata: Metadata = {
  title: "Recomendaciones | Cristian Ruben",
  description: "Dispositivos, Software, Libros, Musica, y más que me gusta, uso, y recomiendo.",
  openGraph: {
    title: "Recomendaciones | Cristian Ruben",
    description: "Dispositivos, Software, Libros, Musica, y más que me gusta, uso, y recomiendo.",
    type: "website",
    url: "https://cristian.online/recommendations",
    images: [{ url: "https://cristian.online/api/og?title=Recommendations", alt: "recomendations" }],
  },
};

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <Container>
      <div className="flex flex-col gap-16 md:gap-24">
        <PageHeader title="Mis Recomendaciones">
          Dispositivos, Software, Libros, Musica, y más que me gusta, uso, y recomiendo.
        </PageHeader>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
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
      </div>
    </Container>
  );
}
