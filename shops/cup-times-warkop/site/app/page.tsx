import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import NightSection from "@/components/sections/NightSection";
import PraiseSection from "@/components/sections/PraiseSection";
import VisitSection from "@/components/sections/VisitSection";
import ContactSection from "@/components/sections/ContactSection";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <MenuSection />
        <NightSection />
        <PraiseSection />
        <VisitSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
