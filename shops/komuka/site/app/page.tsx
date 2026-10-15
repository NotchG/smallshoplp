import SiteNav from "@/components/SiteNav";
import Hero from "@/components/hero/Hero";
import MustTry from "@/components/sections/MustTry";
import Menu from "@/components/sections/Menu";
import Spaces from "@/components/sections/Spaces";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

// Plaster daylight -> teak table -> shutter-green evening: one drink turning into dinner.
export default function Home() {
  return (
    <>
      <header className="bg-kapur">
        <SiteNav />
      </header>
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <MustTry />
        <Menu />
        <Spaces />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
