import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Garden from "@/components/Garden";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Close from "@/components/Close";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <Menu />
        <Garden />
        <Reviews />
        <Visit />
        <Close />
      </main>
      <Footer />
    </>
  );
}
