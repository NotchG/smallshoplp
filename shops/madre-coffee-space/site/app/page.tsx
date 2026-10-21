import Hero from "@/components/sections/Hero";
import MenuAndalan from "@/components/sections/MenuAndalan";
import Camilan from "@/components/sections/Camilan";
import Minuman from "@/components/sections/Minuman";
import RamahAnak from "@/components/sections/RamahAnak";
import RuangKami from "@/components/sections/RuangKami";
import Kunjungi from "@/components/sections/Kunjungi";
import Hubungi from "@/components/sections/Hubungi";
import Container from "@/components/Container";
import { hubungi } from "@/content";

// Grounds in order (design brief §3): mustard, paper, mustard, cobalt, paper, cognac ×2, paper, cobalt.
export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1}>
        <Hero />
        <MenuAndalan />
        <Camilan />
        <Minuman />
        <RamahAnak />
        <RuangKami />
        <Kunjungi />
        <Hubungi />
      </main>
      <footer className="ground-cobalt pb-10">
        <Container>
          <p className="t-small border-t border-(--rule) pt-6">{hubungi.footer}</p>
        </Container>
      </footer>
    </>
  );
}
