import Contact from "@/app/components/bento/Contact";
import YouTube from "@/app/components/bento/Projects";
import Instagram from "@/app/components/bento/Resume";
import About from "./About";
import { GlobeCard } from "./GlobeCard";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6 ">
      <YouTube />
      <Instagram />
      <About />
      <Contact />
      <GlobeCard />
      {/* <TestOrbit /> */}
    </div>
  );
}
