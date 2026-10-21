import HeroFascia from "@/components/HeroFascia";
import MenuAndalan from "@/components/MenuAndalan";
import MieBlengerCard from "@/components/MieBlengerCard";
import Tempatnya from "@/components/Tempatnya";
import PraiseGrid from "@/components/PraiseGrid";
import VisitBlock from "@/components/VisitBlock";
import { ContactBand, SiteFooter } from "@/components/ContactBand";

// Sections in the order of docs/design-brief.md §7.
export default function Home() {
  return (
    <>
      <main id="konten">
        <HeroFascia />
        <MenuAndalan />
        <MieBlengerCard />
        <Tempatnya />
        <PraiseGrid />
        <VisitBlock />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
