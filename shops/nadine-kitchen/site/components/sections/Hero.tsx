import Container from "@/components/Container";
import FondantName from "@/components/FondantName";
import { ArrowDownIcon, ChatIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import NoBreakAge from "@/components/NoBreakAge";
import { hero, shop } from "@/content";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <Container className="grid items-center gap-x-6 gap-y-10 pt-8 pb-14 sm:pt-12 md:grid-cols-12 md:pb-16 lg:pt-14 lg:pb-16">
        <div className="hero-name-wrap md:col-span-6 lg:col-span-7">
          <FondantName id="hero-title" text={shop.name} />
          <p className="t-lead mt-5 max-w-[22ch] sm:mt-6">{hero.lead}</p>
          <p className="t-body mt-2 text-grape-soft">{hero.hours}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="btn btn-primary"
              href={hero.primary.href}
              target="_blank"
              rel="noopener"
              {...mock(hero.primary.mockup)}
            >
              <ChatIcon />
              {hero.primary.label}
            </a>
            <a className="btn btn-secondary" href={hero.secondary.href}>
              {hero.secondary.label}
              <ArrowDownIcon />
            </a>
          </div>
          <p className="t-small mt-5 text-grape-soft">
            <span className="t-strong text-grape">{shop.rating}</span>
            {hero.proof.slice(shop.rating.length)}
          </p>
        </div>

        <figure className="card field-bubblegum p-3 sm:p-4 md:col-span-6 lg:col-span-5">
          <img
            className="photo arch aspect-[4/5]"
            src={hero.photo.src}
            alt={hero.photo.alt}
            width={hero.photo.width}
            height={hero.photo.height}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <figcaption className="t-small t-strong mt-3 px-1">
            <NoBreakAge text={hero.caption} />
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
