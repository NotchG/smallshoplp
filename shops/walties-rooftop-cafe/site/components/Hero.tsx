"use client";
import { useRef } from "react";
import Image from "next/image";
import Strand from "@/components/Strand";
import ActionButton from "@/components/ActionButton";
import { useLampu } from "@/components/useLampu";
import { mock } from "@/lib/mockup";
import { c } from "@/lib/palette";
import { actions, hero, shop } from "@/content";

function BulbIcon() {
  return (
    <svg width="14" height="20" viewBox="0 0 14 20" aria-hidden="true" focusable="false" className="mt-1 shrink-0">
      <path d="M7 0V4" stroke={c.krem} strokeOpacity=".5" strokeWidth="1.2" />
      <rect x="4.4" y="3.5" width="5.2" height="3.4" rx=".8" fill={c.krem} fillOpacity=".6" />
      <ellipse cx="7" cy="12.5" rx="5.6" ry="6.4" fill={c.lampu} />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useLampu(ref);

  return (
    <header ref={ref} className="ground-dark bg-malam text-krem">
      <Strand tone="night" className="hero-strand" />

      <div className="hero-container pt-4 pb-10 md:pt-6 md:pb-14 lg:flex lg:items-end lg:gap-14">
        <h1 className="shrink-0">
          <span className="t-display block" data-check>{shop.short}</span>{" "}
          <span className="t-spaced hero-sub block text-lampu">{shop.sub}</span>
        </h1>

        <div className="mt-7 lg:mt-0 lg:max-w-md lg:pb-1">
          <p className="t-lead text-krem" {...mock(hero.tagline.mockup)}>
            {hero.tagline.text}
          </p>
          <p className="mt-4 flex items-start gap-2.5 t-body font-semibold">
            <BulbIcon />
            <span className="num">{hero.hoursToday}</span>
          </p>
          <p className="mt-1 t-small text-krem/80">{shop.addressShort}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <ActionButton href={shop.maps} variant="primary">
              {actions.directions}
            </ActionButton>
            <ActionButton href={shop.whatsapp.href} variant="secondary" mockup={shop.whatsapp.mockup}>
              {actions.whatsapp}
            </ActionButton>
          </div>
        </div>
      </div>

      <div className="hero-pano-wrap">
        <div className="hero-pano">
          <Image
            src={hero.image.src}
            width={hero.image.width}
            height={hero.image.height}
            alt={hero.image.alt}
            priority
            sizes="(min-width:1024px) 1170px, 100vw"
          />
          <div className="hero-scrim absolute inset-0 bg-malam" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
