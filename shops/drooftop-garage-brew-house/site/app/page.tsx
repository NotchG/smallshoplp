import Hero from "@/components/sections/Hero";
import Floors from "@/components/sections/Floors";
import Menu from "@/components/sections/Menu";
import Groups from "@/components/sections/Groups";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Floors />
        <Menu />
        <Groups />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
