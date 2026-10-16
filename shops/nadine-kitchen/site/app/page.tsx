import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import HowToOrder from "@/components/sections/HowToOrder";
import Sizes from "@/components/sections/Sizes";
import Reviews from "@/components/sections/Reviews";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Gallery />
        <HowToOrder />
        <Sizes />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
