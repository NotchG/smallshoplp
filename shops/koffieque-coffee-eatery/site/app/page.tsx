import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Rooms from "@/components/Rooms";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1}>
        <Hero />
        <MenuSection />
        <Rooms />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
