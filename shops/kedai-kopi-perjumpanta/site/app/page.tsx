import Hero from "@/components/Hero";
import Rasa from "@/components/sections/Rasa";
import Sedia from "@/components/sections/Sedia";
import KataMereka from "@/components/sections/KataMereka";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Rasa />
        <Sedia />
        <KataMereka />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
