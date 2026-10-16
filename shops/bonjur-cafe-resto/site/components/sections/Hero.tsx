import Image from "next/image";
import Container from "@/components/Container";
import AwningValance from "@/components/AwningValance";
import DayBar from "@/components/DayBar";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { mock } from "@/lib/mockup";
import { actions, hero, shop } from "@/content";

export default function Hero() {
  return (
    <section className="hero ground-paper" aria-labelledby="hero-title">
      <AwningValance variant="full" />
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="hero-text lg:col-span-5">
          <h1 id="hero-title" className="text-blue">
            <span className="wordmark t-display block" data-check="">{shop.short}</span>{" "}
            <span className="wordmark-sub">{shop.rest}</span>
          </h1>
          <p className="t-lead balance mt-5 font-medium" {...mock(hero.greeting.mockup)}>
            {hero.greeting.text}
          </p>
          <p className="balance mt-2 text-muted">{hero.place}</p>
          <DayBar className="mt-7" />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={shop.mapsUrl} icon="directions" external>
              {actions.directions}
            </Button>
            <Button href={`tel:${shop.tel}`} variant="secondary" icon="call">
              {actions.call}
            </Button>
          </div>
          <a href="#menu" className="text-link mt-3 text-blue">
            {actions.menu}
            <Icon name="down" size={18} />
          </a>
        </div>
        <figure className="hero-photo bleed-x bleed-right lg:col-span-7 lg:col-start-6 lg:flex lg:flex-col">
          <div className="relative aspect-[4/3] overflow-hidden bg-tile lg:aspect-auto lg:min-h-[560px] lg:flex-1">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={hero.photo.width}
              height={hero.photo.height}
              preload
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="t-small mt-2 px-[var(--gutter)] text-muted lg:px-0">
            {hero.photo.caption}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
