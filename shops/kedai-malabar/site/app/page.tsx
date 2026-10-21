import HeroNight from "@/components/HeroNight";
import MenuSection from "@/components/sections/MenuSection";
import NightSection from "@/components/sections/NightSection";
import PraiseSection from "@/components/sections/PraiseSection";
import VisitSection from "@/components/sections/VisitSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

// Section order and grounds from docs/design-brief.md §3 and §7:
// Arang band → Bata → Kapur → Arang → Tegel → Kapur → Bata → Arang.
export default function Home() {
  return (
    <>
      <main id="konten">
        <HeroNight />
        <MenuSection />
        <NightSection />
        <PraiseSection />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
