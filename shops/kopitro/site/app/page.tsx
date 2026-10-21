import WoodField from "@/components/WoodField";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Brew from "@/components/sections/Brew";
import Night from "@/components/sections/Night";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";

// Grounds (design brief §5): malam hero top → kayu counter through the menu → malam for
// sections 3–6 → kayu for the close → malam footer. Kayu appears as two fields, never stripes.
export default function Home() {
  return (
    <main id="konten">
      <WoodField>
        <Hero />
        <Menu />
      </WoodField>
      <Brew />
      <Night />
      <Praise />
      <Visit />
      <Contact />
    </main>
  );
}
