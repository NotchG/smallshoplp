import SiteHeader from "@/components/SiteHeader";
import HeroWindow from "@/components/HeroWindow";
import FamilyTable from "@/components/FamilyTable";
import FacilityBoard from "@/components/FacilityBoard";
import Ambience from "@/components/Ambience";
import PraiseThemes from "@/components/PraiseThemes";
import VisitBlock from "@/components/VisitBlock";
import NightContact, { SiteFooter } from "@/components/NightContact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="konten" tabIndex={-1} className="outline-none">
        <HeroWindow />
        <FamilyTable />
        <FacilityBoard />
        <Ambience />
        <PraiseThemes />
        <VisitBlock />
        <NightContact />
      </main>
      <SiteFooter />
    </>
  );
}
