import Container from "@/components/Container";
import Lockup from "@/components/Lockup";
import TodayHours from "@/components/TodayHours";
import ActionButtons from "@/components/ActionButtons";
import { hero } from "@/content";
import { mockItem } from "@/lib/mockup";

const LIT_ALT = "Teras Mabsooth di malam hari, lentera Maroko merah muda di bawah tanaman rambat";

// The owner's canopy photo twice: a static dimmed copy, and the lit copy that fades up on
// first paint (CSS keyframes in globals.css), so the lanterns appear to switch on.
function CanopyPicture({ lit }: { lit: boolean }) {
  return (
    <picture className={lit ? "canopy-lit" : "canopy-dim"}>
      <source media="(min-width: 640px)" srcSet="/canopy-wide.jpg" width={1290} height={440} />
      <img
        src="/canopy-phone.jpg"
        width={620}
        height={440}
        alt={lit ? LIT_ALT : ""}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
}

export default function CanopyHero() {
  return (
    <header className="hero relative bg-walnut">
      <div className="canopy">
        <CanopyPicture lit={false} />
        <CanopyPicture lit />
      </div>
      <Container className="hero-body pb-16 md:pb-24">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Lockup size="hero" />
          <p {...mockItem(hero.line, "hero-line t-lead text-balance mt-6 max-w-[30ch] text-rattan md:mt-8")}>{hero.line.text}</p>
          <TodayHours className="mt-3 text-rattan" />
          <ActionButtons className="mt-5 w-full justify-center md:mt-6" />
        </div>
      </Container>
    </header>
  );
}
