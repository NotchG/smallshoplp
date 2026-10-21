import Hero from "@/components/sections/Hero";
import Spaces from "@/components/sections/Spaces";
import Menu from "@/components/sections/Menu";
import CarWash from "@/components/sections/CarWash";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import { Close, Footer } from "@/components/sections/Close";
import { carWash } from "@/content";

// Grounds: Dinding (hero, spaces, menu), Hitam strip (car wash), Kuning (praise),
// Dinding (visit), Hitam (close, footer). The afternoon ends in the evening.
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten" tabIndex={-1}>
        <Spaces />
        <Menu />
        {carWash.show && <CarWash />}
        <Praise />
        <Visit />
        <Close />
      </main>
      <Footer />
    </>
  );
}
