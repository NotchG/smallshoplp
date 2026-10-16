import Hero from "@/components/hero/Hero";
import WallSection from "@/components/sections/WallSection";
import MenuSection from "@/components/sections/MenuSection";
import SpacesSection from "@/components/sections/SpacesSection";
import PraiseSection from "@/components/sections/PraiseSection";
import VisitContact from "@/components/sections/VisitContact";
import Footer from "@/components/sections/Footer";

// Bands top to bottom (design brief §3): kapur wall with the langit mural → kapur → rumah →
// langit → kapur → dongker.
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <WallSection />
        <MenuSection />
        <SpacesSection />
        <PraiseSection />
        <VisitContact />
      </main>
      <Footer />
    </>
  );
}
