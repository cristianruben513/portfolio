import Globe from "../magic-ui/Globe";
import Card from "./CardTemplate";

export function GlobeCard() {
  return (
    <Card noPadding className="flex aspect-square flex-col relative">
      <Globe />

      <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
        <p className="text-sm font-medium text-primary">Guanajuato, MX</p>
      </div>
    </Card>
  );
}
