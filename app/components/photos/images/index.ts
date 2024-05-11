import { StaticImageData } from "next/image"

import flor from "./11.webp"
import tecLeon from "./15.webp"
import flor2 from "./18.webp"
import vaquita from "./19.webp"
import pelos from "./21.webp"
import ixtapa from "./23.webp"
import solovino from "./24.webp"
import michi from "./25.webp"
import siri from "./29.webp"
import gatita from "./31.webp"
import hades from "./33.webp"
import mapacha from "./7.webp"

interface Image {
  img: StaticImageData;
  title: string;
  alt: string;
}

export const myImages: Image[] = [
  {
    img: solovino,
    title: "Solovino",
    alt: "Fotografia de mi perrito Solovino DEP"
  },
  {
    img: tecLeon,
    title: "Tec León",
    alt: "Hackaton en el Tec León"
  },
  {
    img: flor2,
    title: "Flor",
    alt: "Una flor muy bonita"
  },
  {
    img: vaquita,
    title: "Vaquita",
    alt: "Forto de una perrita"
  },
  {
    img: pelos,
    title: "Pelos",
    alt: "Foto de mi perrito peludo DEP"
  },
  {
    img: ixtapa,
    title: "Ixtapa, Zihuatanejo",
    alt: "Foto tomada en Ixtapa, Zihuatanejo"
  },
  {
    img: michi,
    title: "Michi",
    alt: "Fotografia de mi pequeño Michi DEP"
  },
  {
    img: siri,
    title: "Siri",
    alt: "Foto de mi gatita Siri"
  },
  {
    img: mapacha,
    title: "Mapacha",
    alt: "Mapacha, mi gatita gorda"
  },
  {
    img: gatita,
    title: "Gatita",
    alt: "La gatita de mis padrinos"
  },
  {
    img: hades,
    title: "Hades",
    alt: "Hades, Mi perro panzon"
  },
  {
    img: flor,
    title: "Flor",
    alt: "Otra flor bonita"
  },
];
