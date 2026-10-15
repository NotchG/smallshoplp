import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Roaster from "@/components/Roaster";
import Favorites from "@/components/Favorites";
import Menu from "@/components/Menu";
import Stay from "@/components/Stay";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import { Contact, Footer } from "@/components/Contact";

// Grounds, top to bottom: bata, roaster, bata, beton, taman, beton, bata, bilah.
// The red and green fields are never adjacent.
export default function Home() {
  return (
    <>
      <Nav />
      <main id="konten" tabIndex={-1} className="outline-none">
        <Hero />
        <Roaster />
        <Favorites />
        <Menu />
        <Stay />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
