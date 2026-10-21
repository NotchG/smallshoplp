import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import HoursToday from "@/components/HoursToday";
import PriceSticker from "@/components/PriceSticker";
import { ChatIcon, PinIcon } from "@/components/Icons";
import { hero, shop, ui } from "@/content";

// Cup-green night field: the name, today's hours right under it, the two actions,
// and the kiosk photo with the Rp 15.000 sticker slapped on it.
export default function Hero() {
  return (
    <section className="on-dark bg-cup text-frost" aria-labelledby="hero-title">
      <Container className="grid gap-10 pt-4 pb-16 md:pt-6 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-6 lg:pb-20">
        <div className="lg:col-span-7 lg:self-center">
          <h1 id="hero-title" className="t-display hero-name font-display text-label">
            {shop.nameLines[0]}
            <br />
            {shop.nameLines[1]}
          </h1>
          <p className="t-lead mt-5 max-w-[22ch] font-medium text-frost">{hero.line}</p>
          <div className="mt-6">
            <HoursToday />
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5 md:gap-3">
            <ButtonLink href={shop.mapsUrl} variant="bulb" icon={<PinIcon />}>
              {ui.directions}
            </ButtonLink>
            <ButtonLink href="#hubungi" variant="ghost-dark" icon={<ChatIcon />} mockup={shop.whatsapp.mockup}>
              {ui.whatsapp}
            </ButtonLink>
          </div>
          <a href="#menu" className="text-link t-body mt-2 font-medium text-frost">
            {ui.seeMenu}
          </a>
        </div>

        <div className="hero-media relative lg:col-span-5 lg:col-start-8">
          <img
            src={hero.photo.src}
            width={hero.photo.width}
            height={hero.photo.height}
            alt={hero.photo.alt}
            fetchPriority="high"
            decoding="async"
            className="hero-photo block w-full rounded-xl object-cover"
          />
          <PriceSticker data={hero.sticker} className="hero-sticker" />
        </div>
      </Container>
    </section>
  );
}
