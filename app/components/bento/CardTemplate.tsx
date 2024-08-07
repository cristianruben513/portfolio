import clsx from "clsx";
import Meteors from "../magic-ui/Meteors";

export default function Card({
  children,
  className,
  noPadding,
  noMeteors
}: {
  children: React.ReactNode;
  className: string;
  noPadding?: boolean;
  noMeteors?: boolean;
}) {
  return (
    <div
      className={clsx(
        "h-full w-full overflow-hidden relative rounded-xl bg-primary text-sm border border-secondary",
        noPadding ? "p-0" : "p-4 md:p-6",
        className,
      )}
    >
      {!noMeteors && <Meteors number={20} />}
      {children}
    </div>
  );
}
