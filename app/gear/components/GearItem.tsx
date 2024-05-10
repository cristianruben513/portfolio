import Image, { StaticImageData } from "next/image";

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const Item = ({ title, description, image}: ItemProps) => (
  <li className="flex items-center gap-4 transition-opacity cursor-pointer">
    <div
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl bg-tertiary shadow-sm border border-secondary"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        fill
      />
    </div>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
    </div>
  </li>
);