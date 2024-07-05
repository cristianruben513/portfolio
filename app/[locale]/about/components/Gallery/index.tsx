import colorado from "public/gallery/1.jpg";
import cowboy from "public/gallery/2.jpg";
import meLily from "public/gallery/4_1.jpg";
import { Photo } from "./GalleryItem";

export default function Gallery() {
  return (
    <section className="flex gap-4 h-[228px] relative">
      <Photo
        src={cowboy}
        alt="Simplemente yo"
        width={230}
        height={250}
        rotate={6.5}
        left={26}
        index={1}
      />
      <Photo
        src={meLily}
        alt="Con el amor de mi vida"
        width={324}
        height={239}
        rotate={-6}
        left={250}
        index={2}
      />
      <Photo
        src={colorado}
        alt="Aprendiendo a tomar fotos"
        width={220}
        height={250}
        rotate={7.6}
        left={550}
        index={3}
      />
    </section>
  );
}
