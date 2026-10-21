import Hero from "@/components/sections/Hero";
import Etalase from "@/components/sections/Etalase";
import RotiBuaya from "@/components/sections/RotiBuaya";
import KueUlangTahun from "@/components/sections/KueUlangTahun";
import KataMereka from "@/components/sections/KataMereka";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";
import Footer from "@/components/sections/Footer";

// Grounds: butter, butter, frosting, frosting, paper, paper, cocoa, cocoa.
export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1}>
        <Hero />
        <Etalase />
        <RotiBuaya />
        <KueUlangTahun />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
