import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Promo from "@/components/sections/Promo";
import Pillars from "@/components/sections/Pillars";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Sections in the order of docs/design-brief.md §7.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Menu />
        <Promo />
        <Pillars />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
