import Hero from "@/components/sections/Hero";
import Sweets from "@/components/sections/Sweets";
import Breakfast from "@/components/sections/Breakfast";
import Drinks from "@/components/sections/Drinks";
import Room from "@/components/sections/Room";
import Reviews from "@/components/sections/Reviews";
import { Visit, Contact, Footer } from "@/components/sections/Close";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Sweets />
        <Breakfast />
        <Drinks />
        <Room />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
