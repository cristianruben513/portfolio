import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Workplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
};

function Workplace({ title, company, imageSrc, time, link }: Workplace) {

  const content = (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className={clsx(
            "rounded-full",
            company === "University of Houston" && "bg-neutral-50"
          )}
        />
        <div className="flex flex-col gap-px md:text-base text-sm">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <p className="text-green-200 md:text-base text-sm">{company}</p>
        </div>
      </div>
      {time && <time className="text-secondary md:text-base text-xs">{time}</time>}
    </>
  );

  return (
    <li className="transition-opacity" key={company}>
      <div className="flex justify-between ">{content}</div>
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
