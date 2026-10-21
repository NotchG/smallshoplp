import Hero from "@/components/Hero";
import Barbershop from "@/components/Barbershop";
import Kopi from "@/components/Kopi";
import AlsoHere from "@/components/AlsoHere";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";

// Order and grounds from docs/design-brief.md §7:
// Fascia, Concrete, Limewash, Limewash (brass rule on top), Concrete, Fascia.
export default function Home() {
  return (
    <main id="konten">
      <Hero />
      <Barbershop />
      <Kopi />
      <AlsoHere />
      <Reviews />
      <Visit />
    </main>
  );
}
