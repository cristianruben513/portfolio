import colorado from "public/gallery/1.jpg";
import cowboy from "public/gallery/2.jpg";
import meLily from "public/gallery/4_1.jpg";
import texas from "public/gallery/3.webp";
import { Photo } from "./GalleryItem";

export default function Gallery() {
  return (
    <section className="flex gap-4 h-[268px] relative">
      <Photo
        src={meLily}
        alt="Con el amor de mi vida"
        width={324}
        height={239}
        rotate={-6}
        left={-36}
        index={1}
      />
      <Photo
        src={cowboy}
        alt="Simplemente yo"
        width={230}
        height={250}
        rotate={6.3}
        left={160}
        index={2}
      />
      <Photo
        src={texas}
        alt="Foto a la luna llena"
        width={280}
        height={235}
        rotate={-5.4}
        left={330}
        index={3}
      />
      <Photo
        src={colorado}
        alt="Aprendiendo a tomar fotos"
        width={220}
        height={260}
        rotate={7.6}
        left={550}
        index={4}
      />
    </section>
  );
}
