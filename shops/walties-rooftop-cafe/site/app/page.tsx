import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Rooms from "@/components/Rooms";
import Stay from "@/components/Stay";
import Themes from "@/components/Themes";
import Visit from "@/components/Visit";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        <Menu />
        <Rooms />
        <Stay />
        <Themes />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
