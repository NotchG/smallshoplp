import Hero from "@/components/Hero";
import CheckerBand from "@/components/CheckerBand";
import MenuBoard from "@/components/MenuBoard";
import Bundles from "@/components/Bundles";
import ToeanNjonja from "@/components/ToeanNjonja";
import Sudut from "@/components/Sudut";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import { Contact, Footer } from "@/components/Contact";

// The page walks through the shop in visiting order: arched front, checkerboard counter,
// chalkboard, bottled coffee, record shelf, patio, then the way there.
export default function Home() {
  return (
    <>
      <Hero />
      <CheckerBand variant="counter" />
      <main id="konten">
        <MenuBoard />
        <Bundles />
        <ToeanNjonja />
        <Sudut />
        <CheckerBand variant="patio" />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
