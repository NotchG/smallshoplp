import Hero from "@/components/hero/Hero";
import KopiKami from "@/components/sections/KopiKami";
import MenuAndalan from "@/components/sections/MenuAndalan";
import BukanCumaKopi from "@/components/sections/BukanCumaKopi";
import Tempatnya from "@/components/sections/Tempatnya";
import KataMereka from "@/components/sections/KataMereka";
import KunjungiKami from "@/components/sections/KunjungiKami";
import HubungiKami from "@/components/sections/HubungiKami";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten" tabIndex={-1}>
        <KopiKami />
        <MenuAndalan />
        <BukanCumaKopi />
        <Tempatnya />
        <KataMereka />
        <KunjungiKami />
        <HubungiKami />
      </main>
      <Footer />
    </>
  );
}
