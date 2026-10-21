import TopLinks from "@/components/TopLinks";
import TileStrip from "@/components/TileStrip";
import Hero from "@/components/sections/Hero";
import Drinks from "@/components/sections/Drinks";
import Food from "@/components/sections/Food";
import Comfort from "@/components/sections/Comfort";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">
        Langsung ke isi
      </a>
      <div className="bg-wall text-navy">
        <TopLinks />
        <main id="konten">
          <Hero />
          <TileStrip />
          <Drinks />
          <Food />
          <Comfort />
          <Praise />
          <Visit />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
