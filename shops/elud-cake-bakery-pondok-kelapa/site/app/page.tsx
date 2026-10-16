import FasciaHero from "@/components/sections/FasciaHero";
import Roti from "@/components/sections/Roti";
import Kue from "@/components/sections/Kue";
import Baru from "@/components/sections/Baru";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <FasciaHero />
      <main id="konten">
        <Roti />
        <Kue />
        <Baru />
        <Praise />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
