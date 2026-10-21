import Hero, { TopRow } from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Place from "@/components/sections/Place";
import Praise from "@/components/sections/Praise";
import { ContactSection, Footer, VisitSection } from "@/components/sections/Visit";

// Kawa Coffee: the concrete house at dusk (docs/design-brief.md).
export default function Home() {
  return (
    <>
      <TopRow />
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <Menu />
        <Place />
        <Praise />
        <VisitSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
