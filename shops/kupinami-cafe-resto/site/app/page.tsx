import Hero from "@/components/Hero";
import Family from "@/components/Family";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Family />
        <Menu />
        <Events />
        <Praise />
        <Visit />
      </main>
      <Contact />
    </>
  );
}
