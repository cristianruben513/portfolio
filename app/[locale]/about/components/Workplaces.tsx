import clsx from "clsx";
import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Workplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time: string;
  link?: string;
  description?: string;
};

function Workplace({ title, company, imageSrc, time, link, description }: Workplace) {
  return (
    <li className="transition-opacity relative" key={company}>
      <div className="flex justify-between">
        <div className={clsx(
          "flex gap-4",
          description ? "items-start" : "items-center"
        )}>
          <Image
            src={imageSrc}
            alt={company}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col gap-px md:text-base text-sm">
            <p className="gap-2 flex items-center">
              {title}
              {link && (<MoveUpRight size={14} />)}
            </p>
            <p className="text-green-200 md:text-base text-sm">{company}</p>
            {description && (
              <p className="text-sm mt-3 text-secondary">
                {description}
              </p>
            )}
          </div>
        </div>
        <time className="text-secondary text-xs absolute right-0 top-0">
          {time}
        </time>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        >
        </a>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: Workplace[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map(Workplace)}
    </ul>
  );
}
