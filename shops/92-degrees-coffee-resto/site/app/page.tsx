import Hero from "@/components/Hero";
import FloorGuide from "@/components/FloorGuide";
import Menu from "@/components/Menu";
import Drinks from "@/components/Drinks";
import Events from "@/components/Events";
import Praise from "@/components/Praise";
import { Footer, Visit } from "@/components/Visit";

// Morning to night: plaster hero → sage floors → plaster menu → oak drinks → walnut events
// → plaster praise → walnut visit (docs/design-brief.md §3, §7).
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten" tabIndex={-1} className="outline-none">
        <FloorGuide />
        <Menu />
        <Drinks />
        <Events />
        <Praise />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
