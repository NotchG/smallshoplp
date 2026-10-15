import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import DayNight from "@/components/DayNight";
import MenuSection from "@/components/MenuSection";
import MusicSection from "@/components/MusicSection";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import { Contact, Footer } from "@/components/Contact";

// Grounds in order: plafon → rotan | plafon → bantal (+ plafon band) → bilik → plafon → bantal → plafon.
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="konten" tabIndex={-1}>
        <Hero />
        <DayNight />
        <MenuSection />
        <MusicSection />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
