import CheckStrip from "@/components/CheckStrip";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/sections/Hero";
import Seduh from "@/components/sections/Seduh";
import Menu from "@/components/sections/Menu";
import Tempat from "@/components/sections/Tempat";
import Kunjungi from "@/components/sections/Kunjungi";

export default function Home() {
  return (
    <>
      <CheckStrip />
      <Hero />
      <main id="konten">
        <Seduh />
        <Menu />
        <Tempat />
        <Kunjungi />
      </main>
      <SiteFooter />
    </>
  );
}
