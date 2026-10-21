"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { distance, duration, ease, heroAt, motionOkQuery } from "@/lib/motion";
import { mock } from "@/lib/mockup";
import { actions, hero, shop } from "@/content";
import { DirectionsButton, WhatsAppButton } from "@/components/Buttons";

// Hero: who it is, and how to get there. The signature moment is the pen note
// ("sedikit tersembunyi, ini jalannya") wiping in left to right and landing on "Petunjuk Arah".
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionOkQuery, () => {
        const q = gsap.utils.selector(scope);
        const tl = gsap.timeline();
        tl.fromTo(
          q('[data-anim="wordmark"]'),
          { opacity: 0, y: distance.wordmark },
          { opacity: 1, y: 0, duration: duration.hero, ease: ease.out },
          heroAt.wordmark,
        )
          .fromTo(
            q('[data-anim="group"]'),
            { opacity: 0, y: distance.group },
            { opacity: 1, y: 0, duration: duration.group, ease: ease.out },
            heroAt.group,
          )
          .fromTo(
            q('[data-anim="photo"]'),
            { opacity: 0, y: distance.photo },
            { opacity: 1, y: 0, duration: duration.photo, ease: ease.out },
            heroAt.photo,
          )
          // Pen wipe: the outer mask slides in from the left while the inner content slides the
          // other way, so the note stays put and is revealed left to right. Transform only.
          .fromTo(
            q('[data-hero="note-outer"]'),
            { xPercent: -101, x: 0 },
            { xPercent: 0, x: 0, duration: duration.write, ease: ease.soft },
            heroAt.note,
          )
          .fromTo(
            q('[data-hero="note-inner"]'),
            { xPercent: 101, x: 0 },
            { xPercent: 0, x: 0, duration: duration.write, ease: ease.soft },
            heroAt.note,
          );
      });
      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} className="hero ground-ochre" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-text relative z-10 px-[var(--gutter)] pt-10 pb-12 md:px-0 md:py-16">
          <h1
            id="hero-title"
            className="wordmark-lockup t-display"
            aria-label={shop.name}
            {...mock(shop.wordmarkMockup)}
          >
            <span data-hero="fade" data-anim="wordmark" className="wordmark block">
              {shop.wordmark}
            </span>
            <span data-hero="fade" data-anim="group" className="caps wordmark-caps">
              {shop.caps}
            </span>
          </h1>

          <div data-hero="fade" data-anim="group">
            <p className="t-lead mt-7 max-w-[19ch] font-medium text-balance" {...mock(hero.line.mockup)}>
              {hero.line.text}
            </p>
            <p className="mt-5">
              <span className="block font-semibold">{shop.hours.today}</span>
              <span className="block" {...mock(hero.place.mockup)}>
                {hero.place.text}
              </span>
            </p>
          </div>

          <div className="mt-6">
            <span
              className="note-outer"
              data-hero="note-outer"
              aria-hidden="true"
              {...mock(hero.annotation.mockup)}
            >
              <span className="note-inner" data-hero="note-inner">
                <span className="note-text">
                  sedikit tersembunyi,
                  <br />
                  ini jalannya
                  <svg
                    className="note-arrow"
                    viewBox="0 0 60 54"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    focusable="false"
                  >
                    <path
                      className="note-arrow-line"
                      d="M2 12 C 28 0, 56 10, 46 28 C 38 42, 4 34, -14 52"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path d="M-3.5 48.8 L -14 52 L -10.8 41.5" vectorEffect="non-scaling-stroke" />
                  </svg>
                </span>
              </span>
            </span>

            <div data-hero="fade" data-anim="group" className="hero-actions flex flex-wrap gap-3">
              <DirectionsButton className="hero-directions" />
              <WhatsAppButton />
            </div>
            <a
              data-hero="fade"
              data-anim="group"
              className="text-link mt-3"
              href="#menu"
            >
              {actions.menu}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-media">
          <span className="kmark hidden lg:block" aria-hidden="true">
            k
          </span>
          <div className="hero-photo-wrap px-[var(--gutter)] md:px-0" data-hero="fade" data-anim="photo">
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hero.photo.src}
                width={hero.photo.width}
                height={hero.photo.height}
                alt={hero.photo.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
