import Image, { StaticImageData } from "next/image";

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const Item = ({ title, description, image }: ItemProps) => (
  <li className="flex items-center gap-4 transition-opacity cursor-pointer">
    <div className="relative aspect-square size-[4rem] min-w-[4rem] overflow-hidden rounded-xl bg-white"
    >
      <Image
        src={image}
        alt={title}
        className="size-full object-cover object-center"
        fill
      />
    </div>
    <div>
      <h3 className="line-clamp-2 font-medium leading-tight text-primary mb-1">
        {title}
      </h3>
      <p className="line-clamp-3 text-sm leading-tight text-secondary">
        {description}
      </p>
    </div>
  </li>
);