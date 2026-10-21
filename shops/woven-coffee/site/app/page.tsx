import Hero from "@/components/sections/Hero";
import Signature from "@/components/sections/Signature";
import Menu from "@/components/sections/Menu";
import Tea from "@/components/sections/Tea";
import Amenities from "@/components/sections/Amenities";
import Reviews from "@/components/sections/Reviews";
import Visit from "@/components/sections/Visit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WovenSeam from "@/components/WovenSeam";

// Fields in order: kaca · pinus · dinding · telang · dinding · kaca · dinding · pinus · kaca.
// Woven seams at three boundaries only.
export default function Home() {
  return (
    <>
      <main id="konten">
        <Hero />
        <WovenSeam top="kaca" bottom="pinus" name="seam-hero" />
        <Signature />
        <Menu />
        <WovenSeam top="dinding" bottom="telang" name="seam-teh" />
        <Tea />
        <Amenities />
        <Reviews />
        <Visit />
        <WovenSeam top="dinding" bottom="pinus" name="seam-hubungi" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
