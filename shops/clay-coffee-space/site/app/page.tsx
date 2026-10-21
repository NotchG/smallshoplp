import Hero from "@/components/sections/Hero";
import Suasana from "@/components/sections/Suasana";
import Menu from "@/components/sections/Menu";
import Music from "@/components/sections/Music";
import Podcast from "@/components/sections/Podcast";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact, { Footer } from "@/components/sections/Contact";

// A walk through the courtyard after dark: night sky, under the umbrellas (menu), under the
// trees by the stage, into the pavilion, and out on the lamp light.
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Suasana />
        <Menu />
        <Music />
        <Podcast />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
