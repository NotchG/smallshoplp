import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Spaces from "@/components/Spaces";
import Praise from "@/components/Praise";
import VisitContact from "@/components/VisitContact";

// Satu hari di Sajenak: sunny garden (Rumput) → menu (Kapur) → amber rooms (Rotan) →
// praise (Kapur) → the string-lit rooftop at night (Malam), where the late hours live.
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Menu />
        <Spaces />
        <Praise />
        <VisitContact />
      </main>
    </>
  );
}
