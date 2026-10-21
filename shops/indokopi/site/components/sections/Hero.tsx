import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import HeroSign from "@/components/HeroSign";
import { hero, shop } from "@/content";
import { mock } from "@/lib/mockup";

export default function Hero() {
  return (
    <section className="ground-aspal" aria-labelledby="hero-judul">
      <Container className="pt-6 pb-12 md:pt-12 md:pb-16 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="lg:col-span-7">
            <HeroSign />
            <p className="t-lead mt-6 md:mt-8 font-semibold balance" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3 [&>a]:flex-auto sm:[&>a]:flex-none">
              <ButtonLink href={shop.mapsUrl} external icon="route">
                {hero.ctaDirections}
              </ButtonLink>
              <ButtonLink
                href={shop.whatsapp.url}
                external
                icon="chat"
                variant="ghost-light"
                mockup={shop.whatsapp.mockup}
              >
                {hero.ctaWhatsapp}
              </ButtonLink>
            </div>
            <p className="mt-3 text-batu">{shop.address}</p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={hero.photo.src}
              width={hero.photo.width}
              height={hero.photo.height}
              alt={hero.photo.alt}
              decoding="async"
              className="block w-full h-auto rounded-[14px]"
            />
            <p className="t-small mt-3 text-batu">{hero.photoCaption.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
