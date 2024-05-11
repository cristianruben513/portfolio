import Card from "@/app/components/bento/CardTemplate";
import Link from "@/app/components/ui/Link";
import { BriefcaseBusiness, MoveUpRightIcon } from "lucide-react";
import Image from "next/image";

export default function YouTube() {
  return (
    <Card className="col-span-2 row-span-1 flex justify-between gap-6">
      <div className="flex flex-col gap-1.5">

        <div className="flex size-8 items-center justify-center rounded-lg bg-[#FF0000]">
          <BriefcaseBusiness size={18} className="text-white" />
        </div>

        <p className="text-secondary">@cristian51310</p>

        <Link
          className="mt-auto flex items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm"
          href="/projects"
        >
          <span className="font-medium text-primary flex items-center gap-3">
            Proyectos
            <MoveUpRightIcon size={18} />
          </span>
        </Link>
      </div>

      <ul className="animated-list grid w-full grid-cols-2 grid-rows-2 gap-3">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className="relative col-span-1 row-span-1 overflow-hidden rounded-lg border border-secondary transition-opacity"
          >
            <Image
              src={`/thumbs/projects/project${index + 1}.webp`}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}
