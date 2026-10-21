import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import CoffeeSection from "@/components/CoffeeSection";
import AmbienceSection from "@/components/AmbienceSection";
import PraiseSection from "@/components/PraiseSection";
import VisitSection from "@/components/VisitSection";
import CloseSection from "@/components/CloseSection";
import Footer from "@/components/Footer";

// Order from docs/design-brief.md §7: lunch first, then a second coffee.
export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <MenuSection />
        <CoffeeSection />
        <AmbienceSection />
        <PraiseSection />
        <VisitSection />
        <CloseSection />
      </main>
      <Footer />
    </>
  );
}
