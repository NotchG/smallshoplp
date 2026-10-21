import Container from "@/components/Container";
import ActionButtons from "@/components/ActionButtons";
import HangingSign from "@/components/HangingSign";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// The shop front on Balai Pustaka: a wood door header, the window pane with the door lettering
// ("Merdeka" over SOES · ROTI · KUE), and the door pane with the hanging sign.
export default function Hero() {
  return (
    <header className="bg-kaca">
      <div className="rail" />
      <Container>
        <div className="storefront">
          <div className="pane-window">
            <h1>
              <span className="sr-offscreen">{shop.name}</span>
              <span aria-hidden="true" data-check className="lockup-script block font-display t-display text-merdeka">
                {hero.lockupScript}
              </span>
              <span aria-hidden="true" data-check className="caps-door block text-pintu">
                {hero.lockupCaps}
              </span>
            </h1>
            <p {...mock(hero.line.mockup)} className="t-lead mt-5 max-w-[26ch] font-medium lg:mt-8">
              {hero.line.text}
            </p>
            <ActionButtons className="mt-7 lg:mt-9" />
            <p className="t-small mt-5">
              {shop.addressShort}
              <span className="lg:hidden"> · {shop.parking.text}</span>
            </p>
          </div>
          <div className="pane-door">
            <HangingSign />
            <span className="door-handle" aria-hidden="true" />
            <p className="door-note t-small">
              <span className="door-p" aria-hidden="true">
                P
              </span>
              {shop.parking.text}
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
}
