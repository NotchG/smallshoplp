import Hero from "@/components/Hero";
import { Contact, Drinks, Footer, Menu, Reviews, Room, Visit } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Drinks />
        <Menu />
        <Room />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
