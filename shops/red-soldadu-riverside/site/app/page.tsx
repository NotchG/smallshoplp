import Hero from "@/components/sections/Hero";
import Setting from "@/components/sections/Setting";
import Menu from "@/components/sections/Menu";
import Workday from "@/components/sections/Workday";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/SiteFooter";

// Grounds in order: merbau, batu, baja, batu, merbau, batu, baja.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Setting />
        <Menu />
        <Workday />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
