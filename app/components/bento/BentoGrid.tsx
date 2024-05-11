import Card from "@/app/components/bento/CardTemplate";
import Gumroad from "@/app/components/bento/Gumroad";
import Instagram from "@/app/components/bento/Instagram";
import Map from "@/app/components/bento/Map";
import YouTube from "@/app/components/bento/Projects";

export default function BentoGrid() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6">
        <YouTube />
        <Instagram />
        <Gumroad />
        <Card
          className="relative row-span-1 col-span-2"
          disableHalo
          noPadding
        >
          <Map lng={-101} lat={21} />
          <div className="absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6">
            <p className="text-sm font-medium text-primary">Guanajuato, MX</p>
          </div>
        </Card>
      </div>
    </>
  );
}
