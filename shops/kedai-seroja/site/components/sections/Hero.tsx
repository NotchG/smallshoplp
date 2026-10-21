import Container from "@/components/Container";
import SignBadge from "@/components/SignBadge";
import TodayHours from "@/components/TodayHours";
import PlateScene from "@/components/PlateScene";
import DishArt, { PlateBase } from "@/components/art/DishArt";
import { DirectionsIcon, PhoneIcon, ArrowDownIcon } from "@/components/Icons";
import { shop, hero, actions } from "@/content";
import type { ArtName } from "@/content";
import { mock } from "@/lib/mockup";

// Landing order = animation order: nasi → rendang → telur balado → tempe orek → perkedel.
const PIECES: { art: ArtName; left: string; top: string; width: string }[] = [
  { art: "nasi", left: "15%", top: "19%", width: "47%" },
  { art: "rendang", left: "52%", top: "15%", width: "35%" },
  { art: "telurBalado", left: "56%", top: "47%", width: "32%" },
  { art: "tempeOrek", left: "31%", top: "58%", width: "33%" },
  { art: "perkedel", left: "12%", top: "49%", width: "27%" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <SignBadge size="hero" as="h1" id="hero-title" />
          <p className="hero-tagline t-lead" {...mock(shop.tagline.mockup)}>{shop.tagline.text}</p>
          <TodayHours />
          <div className="hero-actions">
            <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
              <DirectionsIcon />
              {actions.directions}
            </a>
            <a className="btn btn-outline" href={shop.phoneHref}>
              <PhoneIcon />
              {actions.call}
            </a>
          </div>
          <p className="hero-address t-body">
            <span>{shop.addressShort}</span>
            <a href="#menu" className="hero-menu-link">
              {hero.seeMenu}
              <ArrowDownIcon />
            </a>
          </p>
        </div>

        <div className="hero-arch">
          <div className="arch arch-hero">
            <PlateScene>
              <div className="plate-scene" role="img" aria-label={hero.plateLabel}>
                <PlateBase />
                {PIECES.map((p) => (
                  <div key={p.art} className="plate-piece" style={{ left: p.left, top: p.top, width: p.width, aspectRatio: "1" }}>
                    <DishArt name={p.art} decorative />
                  </div>
                ))}
              </div>
              <p className="plate-caption type t-small" {...mock(hero.plateCaption.mockup)}>{hero.plateCaption.text}</p>
            </PlateScene>
          </div>
        </div>
      </Container>
      <div className="dado" aria-hidden />
    </section>
  );
}
