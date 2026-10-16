import { hero, priceNote } from "@/content";
import SmokeBeef from "@/components/illustrations/SmokeBeef";
import PriceTag from "@/components/PriceTag";

// The signature: a tray of Roti Smoke Beef whose tag marks itself down on load (CSS only).
export default function HeroTray() {
  return (
    <div>
      <div className="tray hero-tray">
        <SmokeBeef decorative className="hero-bag hero-bag-back1" />
        <SmokeBeef decorative className="hero-bag hero-bag-back2" />
        <SmokeBeef className="hero-bag hero-bag-front" />
        <PriceTag product={hero.product} size="hero" as="p" className="tray-tag" />
      </div>
      <p className="t-small mt-8 font-medium">{priceNote}</p>
    </div>
  );
}
