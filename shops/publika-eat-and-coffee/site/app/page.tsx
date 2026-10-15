import { PlanSprite } from "@/components/art/plan";
import { Contact, Footer, Header, Hero, Menu, Reviews, Uses, Visit } from "@/components/Sections";
import { skipLink } from "@/content";

// Grounds in the order of a Publika day: tile (07.00) -> timber -> tile -> fern -> steel (21.30).
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#konten">
        {skipLink}
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
