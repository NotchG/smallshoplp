import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Menu from "@/components/sections/Menu";
import Kitchen from "@/components/sections/Kitchen";
import Reviews from "@/components/sections/Reviews";
import Visit from "@/components/sections/Visit";
import { Contact, Footer } from "@/components/sections/Contact";

// Grounds, top to bottom: dinding / dinding / nampan / bangku / dinding / nampan / dinding.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Featured />
        <Menu />
        <Kitchen />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
