import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BrewShelf from "@/components/BrewShelf";
import LateHours from "@/components/LateHours";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Masuk ke ruko: bata (outside) → semen (inside) → arang / kayu (late) → bata (back out) → arang.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MenuSection />
        <BrewShelf />
        <LateHours />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
