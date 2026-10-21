import {
  Boxes,
  Contact,
  Drinks,
  Etalase,
  Footer,
  Hero,
  Kunafe,
  Praise,
  Sweetness,
  Visit,
} from "@/components/Sections";

// Grounds, top to bottom (design brief §7): room, room + filo panel, kunafe, room, room,
// kraft, room, kraft, pistachio, room.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Etalase />
        <Kunafe />
        <Drinks />
        <Sweetness />
        <Boxes />
        <Praise />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
