import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Suasana from "@/components/Suasana";
import Celebrate from "@/components/Celebrate";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Intro />
        <Menu />
        <Suasana />
        <Celebrate />
        <Praise />
        <Visit />
      </main>
      <Contact />
    </>
  );
}
