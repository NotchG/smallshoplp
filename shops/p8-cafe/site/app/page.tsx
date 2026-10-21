import Hero from "@/components/Hero";
import CookieSection from "@/components/CookieSection";
import MenuSection from "@/components/MenuSection";
import SpaceSection from "@/components/SpaceSection";
import EventsSection from "@/components/EventsSection";
import TakeHomeSection from "@/components/TakeHomeSection";
import PraiseSection from "@/components/PraiseSection";
import VisitSection from "@/components/VisitSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="konten">
      <Hero />
      <CookieSection />
      <MenuSection />
      <SpaceSection />
      <EventsSection />
      <TakeHomeSection />
      <PraiseSection />
      <VisitSection />
      <ContactSection />
    </main>
  );
}
