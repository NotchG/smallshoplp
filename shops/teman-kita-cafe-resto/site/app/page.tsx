import Hero from "@/components/sections/Hero";
import Floors from "@/components/sections/Floors";
import Menu from "@/components/sections/Menu";
import Praise from "@/components/sections/Praise";
import Events from "@/components/sections/Events";
import Visit from "@/components/sections/Visit";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Floors />
        <Menu />
        <Praise />
        <Events />
        <Visit />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
