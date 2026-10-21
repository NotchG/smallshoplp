import Container from "@/components/Container";
import { SteelFrame, Pane } from "@/components/SteelFrame";
import PendantLamps from "@/components/PendantLamps";
import TodayHours from "@/components/TodayHours";
import Button from "@/components/Button";
import { heroPhoto, labels, shop } from "@/content";
import { mock } from "@/lib/mockup";

function ArrowDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 2v11M3 8.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

// The page seen through KoffieQue's own steel-framed glass partition.
// DOM order A, C, E, D, B so focus order matches what is seen; B holds nothing focusable.
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <Container>
        <SteelFrame>
          {/* A: lamps + wordmark */}
          <Pane className="hero-a">
            <PendantLamps />
            <h1 id="hero-title" className="hero-title">
              <span className="wordmark">{shop.name}</span>
              <span className="descriptor mt-3">{shop.descriptor}</span>
            </h1>
            <p className="t-lead hero-line mt-5 font-medium">{shop.line}</p>
          </Pane>

          {/* C: today's hours */}
          <Pane className="hero-c">
            <TodayHours />
          </Pane>

          {/* E: where + menu link */}
          <Pane className="hero-e">
            <p className="font-medium">{shop.addressShort}</p>
            <a href="#menu" className="text-link mt-1">
              {labels.seeMenu}
              <ArrowDown />
            </a>
          </Pane>

          {/* D: actions */}
          <Pane className="hero-d">
            <div className="hero-actions">
              <Button href={shop.directionsUrl}>{labels.directions}</Button>
              <Button variant="outline" placeholder mockup={shop.whatsapp.mockup}>
                {labels.whatsapp}
              </Button>
            </div>
          </Pane>

          {/* B: the owner's photo, at native width or smaller */}
          <Pane tone="marmer" className="hero-b">
            <figure className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroPhoto.src}
                width={heroPhoto.w}
                height={heroPhoto.h}
                alt={heroPhoto.alt}
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="mt-4">
                <span className="flex flex-wrap items-baseline gap-x-3" {...mock(heroPhoto.mockup)}>
                  <span className="font-semibold">{heroPhoto.name}</span>
                  <span className="tabular font-semibold text-emas">{heroPhoto.price}</span>
                </span>
                <span className="t-small mt-1 block text-abu-terang">{heroPhoto.credit}</span>
              </figcaption>
            </figure>
          </Pane>
        </SteelFrame>
      </Container>
    </section>
  );
}
