import Card from "@/app/components/bento/CardTemplate";
import Link from "@/app/components/ui/Link";
import { BriefcaseBusiness, MoveUpRightIcon } from "lucide-react";
import Image from "next/image";

import project1 from "./thumbs/projects/project1.webp";
import project2 from "./thumbs/projects/project2.webp";
import project3 from "./thumbs/projects/project3.webp";
import project4 from "./thumbs/projects/project4.webp";

export default function YouTube() {
  return (
    <Card className="col-span-2 row-span-1 flex justify-between gap-6">
      <div className="flex flex-col gap-1.5">

        <div className="flex size-8 items-center justify-center rounded-lg bg-[#FF0000]">
          <BriefcaseBusiness size={18} className="text-white" />
        </div>

        <p className="text-secondary">@cristian51310</p>

        <Link
          className="mt-auto flex items-center rounded-full bg-tertiary px-4 py-1.5 text-sm"
          href="/projects"
        >
          <span className="font-medium flex items-center gap-2">
            Proyectos
            <MoveUpRightIcon size={18} />
          </span>
        </Link>
      </div>

      <ul className="animated-list grid w-full grid-cols-2 grid-rows-2 gap-3 z-10">
        <li className="overflow-hidden rounded-lg transition-opacity cursor-pointer">
          <Image
            src={project1}
            alt="Thumbnail"
            className="object-cover size-full"
            priority
          />
        </li>
        <li className="overflow-hidden rounded-lg transition-opacity cursor-pointer">
          <Image
            src={project2}
            alt="Thumbnail"
            className="object-cover size-full"
            priority
          />
        </li>
        <li className="overflow-hidden rounded-lg transition-opacity cursor-pointer">
          <Image
            src={project3}
            alt="Thumbnail"
            className="object-cover size-full"
            priority
          />
        </li>
        <li className="overflow-hidden rounded-lg transition-opacity cursor-pointer">
          <Image
            src={project4}
            alt="Thumbnail"
            className="object-cover size-full"
            priority
          />
        </li>
      </ul>
    </Card>
  );
}
