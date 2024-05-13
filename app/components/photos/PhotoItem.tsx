import Image, { StaticImageData } from 'next/image';

interface PhotoProps {
  img: StaticImageData;
  title: string;
  alt: string;
}

export const Photo = ({ img, title, alt }: PhotoProps) => {
  return (
    <div
      key={img.src}
      className="relative aspect-[9/10] w-40 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 odd:rotate-6 even:-rotate-6 hover:scale-110 transition-transform duration-300 ease-in-out hover:rotate-0"
    >
      <Image
        src={img}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
        placeholder="blur"
      />

      <div
        className="absolute inset-0 w-full bg-gradient-to-t from-black/75 via-black/30 flex items-end transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
      >
        <h3 className="px-3 py-2 font-mono text-xs font-bold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};
