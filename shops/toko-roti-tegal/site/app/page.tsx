import Hero from "@/components/Hero";
import RotiSection from "@/components/RotiSection";
import KueSection from "@/components/KueSection";
import PesanSection from "@/components/PesanSection";
import PraiseSection from "@/components/PraiseSection";
import ScrollOrnament from "@/components/ScrollOrnament";
import VisitSection from "@/components/VisitSection";
import ContactBand from "@/components/ContactBand";
import Footer from "@/components/Footer";
import { BagSprite } from "@/components/BaggedBun";

export default function Home() {
  return (
    <>
      <BagSprite />
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <RotiSection />
        <KueSection />
        <PesanSection />
        <PraiseSection />
        <div className="bg-kotak py-14 md:py-20" aria-hidden="true">
          <ScrollOrnament variant="divider" className="mx-auto w-[min(420px,72%)]" />
        </div>
        <VisitSection />
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
