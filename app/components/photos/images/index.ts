import { StaticImageData } from "next/image"

import flor2 from "./18_th.webp"
import vaquita from "./19_th.webp"
import pelos from "./21_th.webp"
import ixtapa from "./23_th.webp"
import solovino from "./24_th.webp"
import michi from "./25_th.webp"
import siri from "./29_th.webp"
import gatita from "./31_th.webp"
import hades from "./33_th.webp"
import mapacha from "./7_th.webp"

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
  }
];
