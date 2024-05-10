import Card from "@/app/components/bento/CardTemplate";
import Link from "@/app/components/ui/Link";
import { CircleUserRound, MoveUpRight } from "lucide-react";

export default function Instagram() {
  return (
    <Card className="col-span-1 row-span-1 flex aspect-square flex-col gap-1.5">
      <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500">
        <CircleUserRound size={18} className="text-primary" />
      </div>

      <p className="text-secondary">Cristian Ruben</p>
      <p className="line-clamp-2">Conoce mas de mi con mi curriculum</p>

      <Link
        className="mt-auto flex w-fit items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm no-underline"
        href="/about"
      >
        <span className="font-medium text-primary">Ver mas</span>
        <MoveUpRight size={18} />
      </Link>
    </Card>
  );
}
