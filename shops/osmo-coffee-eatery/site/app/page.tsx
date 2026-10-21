import Hero from "@/components/Hero";
import MenuTray from "@/components/MenuTray";
import Praise from "@/components/Praise";
import Bar from "@/components/Bar";
import Space from "@/components/Space";
import Night from "@/components/Night";
import Footer from "@/components/Footer";

// OSMO's day, top to bottom: plaster table → microcement bar → upstairs green → night navy.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <MenuTray />
        <Praise />
        <Bar />
        <Space />
        <Night />
      </main>
      <Footer />
    </>
  );
}
