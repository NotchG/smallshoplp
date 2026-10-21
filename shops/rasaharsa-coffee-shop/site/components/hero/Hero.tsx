import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import BeanMark from "@/components/BeanMark";
import { actions, shop } from "@/content";
import { mock } from "@/lib/mockup";
import FernBand from "./FernBand";
import HeroShell from "./HeroShell";
import HeroStatus from "./HeroStatus";
import Pendant from "./Pendant";

// The feature wall: charcoal slats, cage pendants, the white rounded RASAHARSA with the
// two-bean mark, "coffee & eatery", and the fern strip below. Every word is real page text.
export default function Hero() {
  return (
    <HeroShell>
      <Container className="hero-inner">
        <div className="pendants" aria-hidden="true">
          <Pendant i={0} />
          <Pendant i={1} />
          <Pendant i={2} />
        </div>

        <div className="hero-grid">
          <div className="hero-mark">
            <div className="hero-lockup">
              <h1 className="hero-title font-display">
                <BeanMark className="hero-bean" mockup={shop.logoMockup} />
                <span className="hero-word">{shop.name}</span>
              </h1>
              <p className="hero-tagline">{shop.tagline}</p>
            </div>
          </div>

          <FernBand className="hero-fern" />

          <div className="hero-bottom">
            <p className="hero-line t-lead" {...mock(shop.line.mockup)}>
              {shop.line.text}
            </p>
            <div className="hero-actions">
              <HeroStatus />
              <div className="hero-buttons">
                <ActionButton action={actions.directions} variant="dark-primary" icon="pin" />
                <ActionButton action={actions.whatsapp} variant="dark-secondary" icon="chat" />
              </div>
              <p className="t-small hero-address">{shop.addressShort}</p>
            </div>
          </div>
        </div>
      </Container>
    </HeroShell>
  );
}
