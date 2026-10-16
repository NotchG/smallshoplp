import Hero from "@/components/sections/Hero";
import DayParts from "@/components/sections/DayParts";
import Menu from "@/components/sections/Menu";
import Spaces from "@/components/sections/Spaces";
import Family from "@/components/sections/Family";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <DayParts />
        <Menu />
        <Spaces />
        <Family />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
