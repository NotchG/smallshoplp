import { PlanSprite } from "@/components/art/plan";
import { Contact, Footer, Header, Hero, Menu, Reviews, Uses, Visit } from "@/components/Sections";
import { nav } from "@/content";

// Morning to evening: tile hero -> timber menu -> tile uses -> fern reviews -> steel visit -> steel contact.
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#konten">
        {nav.skip}
      </a>
      <PlanSprite />
      <Header />
      <main id="konten">
        <Hero />
        <Menu />
        <Uses />
        <Reviews />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
