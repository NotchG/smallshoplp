import Hero from "@/components/sections/Hero";
import Suasana from "@/components/sections/Suasana";
import Menu from "@/components/sections/Menu";
import Group from "@/components/sections/Group";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Close from "@/components/sections/Close";

// An evening at Al Buraq, in the order a visit goes: the lantern-lit room, the table,
// the second room where the groups sit, then how to get there.
// Grounds: plaster, plaster, velvet, slate, plaster, plaster, velvet.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Suasana />
        <Menu />
        <Group />
        <Praise />
        <Visit />
      </main>
      <Close />
    </>
  );
}
