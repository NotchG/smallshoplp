// "Di bawah lentera": a vertical slice through the terrace at night, from the lantern
// canopy (hero), past the table seen from above (menu, tea), down to the tiled floor.
import CanopyHero from "@/components/CanopyHero";
import Suasana from "@/components/sections/Suasana";
import MenuAndalan from "@/components/sections/MenuAndalan";
import TeaSection from "@/components/sections/TeaSection";
import Praise from "@/components/sections/Praise";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <CanopyHero />
      <main id="konten" tabIndex={-1} className="outline-none">
        <Suasana />
        <MenuAndalan />
        <TeaSection />
        <Praise />
        <Kunjungi />
        <Hubungi />
      </main>
      <SiteFooter />
    </>
  );
}
