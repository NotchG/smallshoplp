import Container from "@/components/Container";
import ActionButton from "@/components/ActionButton";
import TodayLine from "@/components/TodayLine";
import { ChatIcon, PinIcon } from "@/components/Icons";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Hero: who, open now?, go. Type plus the day line; nothing here animates except the marker.
export default function Hero() {
  return (
    <header className="bg-limewash">
      <Container>
        <div className="flex min-h-11 items-center justify-between gap-6 pt-3 lg:pt-5">
          <p className="t-small text-muted">{shop.addressLine}</p>
          <nav aria-label="Bagian halaman" className="hidden lg:block">
            <ul className="t-small flex gap-6 font-medium">
              {hero.anchors.map((a) => (
                <li key={a.href}>
                  <a className="nav-link" href={a.href}>
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <h1 className="hero-title t-display mt-8 lg:mt-14">{shop.name}</h1>

        <div className="hero-grid mt-6 pb-16 lg:mt-12 lg:pb-24">
          <p className="hero-tagline t-lead measure" {...mock(shop.tagline.mockup)}>
            {shop.tagline.text}
          </p>

          <div className="hero-today">
            <TodayLine />
          </div>

          <div className="hero-actions flex flex-wrap gap-3">
            <ActionButton href={shop.mapsUrl} external icon={<PinIcon />}>
              {hero.directions}
            </ActionButton>
            <ActionButton
              href={shop.whatsapp.url}
              external
              variant="secondary"
              icon={<ChatIcon />}
              mockup={shop.whatsapp.mockup}
            >
              {hero.whatsapp}
            </ActionButton>
          </div>

          <p className="hero-rating t-small text-muted">{shop.rating.label}</p>
        </div>
      </Container>
    </header>
  );
}
