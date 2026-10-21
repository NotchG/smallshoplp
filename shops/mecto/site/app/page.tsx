import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DayBeam from "@/components/DayBeam";
import SpacesStrip from "@/components/SpacesStrip";
import Amenities from "@/components/Amenities";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import { Contact, Footer } from "@/components/Contact";

// One day at Mecto: daylight concrete → yellow → concrete → plywood → steel night.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MenuSection />
        <DayBeam />
        <SpacesStrip />
        <Amenities />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
