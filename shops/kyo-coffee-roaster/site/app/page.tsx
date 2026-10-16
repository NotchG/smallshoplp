import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import MenuBoard from "@/components/MenuBoard";
import Bakes from "@/components/Bakes";
import Space from "@/components/Space";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";

// One page, top to bottom: daylight plywood to the garden after dark (design brief §1).
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <MenuBoard />
        <Bakes />
        <Space />
        <Praise />
        <Visit />
      </main>
      <Contact />
    </>
  );
}
