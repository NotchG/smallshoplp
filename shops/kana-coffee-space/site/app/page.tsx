import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import SpacesSection from "@/components/SpacesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

// Grounds in order: ochre, ochre, oak, steel, cream, ochre, rust, steel (design brief §7).
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MenuSection />
        <SpacesSection />
        <FacilitiesSection />
        <ReviewsSection />
        <VisitSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
