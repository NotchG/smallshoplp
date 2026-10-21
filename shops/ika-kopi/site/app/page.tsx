import Hero from "@/components/sections/Hero";
import Kopi from "@/components/sections/Kopi";
import Kerja from "@/components/sections/Kerja";
import Menu from "@/components/sections/Menu";
import BawaPulang from "@/components/sections/BawaPulang";
import KataMereka from "@/components/sections/KataMereka";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Kopi />
        <Kerja />
        <Menu />
        <BawaPulang />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
    </>
  );
}
