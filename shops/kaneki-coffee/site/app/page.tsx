import Hero from "@/components/sections/Hero";
import MenuAndalan from "@/components/sections/MenuAndalan";
import SeduhManual from "@/components/sections/SeduhManual";
import Suasana from "@/components/sections/Suasana";
import KataMereka from "@/components/sections/KataMereka";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <MenuAndalan />
        <SeduhManual />
        <Suasana />
        <KataMereka />
        <Kunjungi />
      </main>
      <Hubungi />
    </>
  );
}
