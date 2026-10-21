import Hero from "@/components/Hero";
import MorningSection from "@/components/MorningSection";
import MenuSection from "@/components/MenuSection";
import SpacesSection from "@/components/SpacesSection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Grounds, top to bottom: limewash, chalk, limewash, palm, chalk, limewash, palm.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MorningSection />
        <MenuSection />
        <SpacesSection />
        <ReviewsSection />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
