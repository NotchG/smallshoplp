import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import BaristaSection from "@/components/BaristaSection";
import SuasanaSection from "@/components/SuasanaSection";
import PraiseSection from "@/components/PraiseSection";
import VisitSection from "@/components/VisitSection";
import { ContactSection, SiteFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten" tabIndex={-1} className="outline-none">
        <MenuSection />
        <BaristaSection />
        <SuasanaSection />
        <PraiseSection />
        <VisitSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
