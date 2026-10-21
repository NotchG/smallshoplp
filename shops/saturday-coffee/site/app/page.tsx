import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Atmosphere from "@/components/sections/Atmosphere";
import Station from "@/components/sections/Station";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact, { Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Menu />
        <Atmosphere />
        <Station />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
