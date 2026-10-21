import AwningHeader from "@/components/AwningHeader";
import Hero from "@/components/sections/Hero";
import MenuAndalan from "@/components/sections/MenuAndalan";
import PilihLauk from "@/components/sections/PilihLauk";
import KopiCamilan from "@/components/sections/KopiCamilan";
import Suasana from "@/components/sections/Suasana";
import KataMereka from "@/components/sections/KataMereka";
import Kunjungi from "@/components/sections/Kunjungi";
import { Hubungi, Footer } from "@/components/sections/Hubungi";

// Grounds in order: semen → semen → putih → jati → semen → putih → semen → merah → besi.
export default function Home() {
  return (
    <>
      <AwningHeader />
      <main id="konten">
        <Hero />
        <MenuAndalan />
        <PilihLauk />
        <KopiCamilan />
        <Suasana />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
