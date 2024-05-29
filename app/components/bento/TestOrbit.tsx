import Card from "@/app/components/bento/CardTemplate";
import { OrbitingCirclesDemo } from "../magic-ui/OrbitingCirclesDemo";

export default function TestOrbit() {
  return (
    <Card noPadding className="col-span-1 row-span-1 flex aspect-square flex-col gap-1.5">
      <OrbitingCirclesDemo />
    </Card>
  );
}
