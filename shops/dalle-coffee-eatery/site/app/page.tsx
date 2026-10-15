import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Work from "@/components/sections/Work";
import Meeting from "@/components/sections/Meeting";
import Reviews from "@/components/sections/Reviews";
import Visit from "@/components/sections/Visit";
import Contact, { Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Menu />
        <Work />
        <Meeting />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
