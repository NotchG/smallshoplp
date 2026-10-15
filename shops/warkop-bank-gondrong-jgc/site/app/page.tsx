import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import PlaceSection from "@/components/PlaceSection";
import DaySection from "@/components/DaySection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitSection from "@/components/VisitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MenuSection />
        <PlaceSection />
        <DaySection />
        <ReviewsSection />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
