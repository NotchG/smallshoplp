import Hero from "@/components/Hero";
import Cheesecakes from "@/components/Cheesecakes";
import Menu from "@/components/Menu";
import Room from "@/components/Room";
import Praise from "@/components/Praise";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";

// The page walks the room: sage ceiling (hero), white wall (cheesecakes), walnut table (menu),
// white wall (room), sage (praise), terrazzo floor (visit), walnut (contact).
export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Cheesecakes />
        <Menu />
        <Room />
        <Praise />
        <Visit />
      </main>
      <Contact />
    </>
  );
}
