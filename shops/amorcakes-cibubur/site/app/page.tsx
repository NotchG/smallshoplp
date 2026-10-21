import Hero from "@/components/Hero";
import Kue from "@/components/sections/Kue";
import Roti from "@/components/sections/Roti";
import Pesan from "@/components/sections/Pesan";
import Kata from "@/components/sections/Kata";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi, { Footer } from "@/components/sections/Hubungi";

// Sections follow docs/design-brief.md §7. Copy and facts live in content.ts.
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Kue />
        <Roti />
        <Pesan />
        <Kata />
        <Kunjungi />
        <Hubungi />
      </main>
      <Footer />
    </>
  );
}
