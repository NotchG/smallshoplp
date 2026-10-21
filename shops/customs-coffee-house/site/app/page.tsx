import Hero from "@/components/sections/Hero";
import Shelf from "@/components/sections/Shelf";
import Menu from "@/components/sections/Menu";
import Hangout from "@/components/sections/Hangout";
import Praise from "@/components/sections/Praise";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/sections/Footer";

// One walk through the shop: fascia → bean shelf → checker table → red wall → reviews
// → black back room → out through the fascia.
export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <Shelf />
        <Menu />
        <Hangout />
        <Praise />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
