import Card from "@/app/components/bento/CardTemplate";
import Link from "@/app/components/ui/Link";
import { MoveUpRight, Sparkles } from "lucide-react";

export default function Gumroad() {
  return (
    <Card className="flex aspect-square flex-col gap-1.5">
      <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#FF91E7]">
        <Sparkles size={18} className="text-primary" />
      </div>
      <p className="text-secondary">Pensando</p>
      <p className="line-clamp-2">Aun no se que poner aqui</p>

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
