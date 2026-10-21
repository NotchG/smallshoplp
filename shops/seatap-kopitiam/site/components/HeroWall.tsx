"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, heroPhoto, heroTile, prefersReducedMotion } from "@/lib/motion";
import type { Tile } from "@/content";

// The green wall beside the lounge photo: four colour tiles (bata, kunyit, sage, krem) and
// owner-1.jpg. Phone: tiles in a row above the photo. Desktop: tiles stacked beside it.
//
// Signature moment (design brief §8): the tiles are laid onto the wall one by one (top to
// bottom on desktop, left to right on phone, which is DOM order either way) while the photo
// fades in. Done by 1.0 s. The hidden start state exists only under html.js + no-preference
// (globals.css), with a 2 s CSS failsafe; the text beside it never animates.
const TILES: Tile[] = ["bata", "kunyit", "sage", "krem"];

export default function HeroWall({ alt }: { alt: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current || prefersReducedMotion()) return;
      const tiles = gsap.utils.toArray<HTMLElement>('[data-hero-anim="tile"]', scope.current);
      const photo = scope.current.querySelector<HTMLElement>('[data-hero-anim="photo"]');

      // Hydrated late (slow network): show the final state rather than animate after the fact.
      if (performance.now() > 1500) {
        gsap.set([...tiles, photo], { autoAlpha: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: ease.outStrong } });
      tl.fromTo(
        tiles,
        { autoAlpha: 0, y: heroTile.y, scale: heroTile.scale },
        { autoAlpha: 1, y: 0, scale: 1, duration: heroTile.duration, stagger: heroTile.stagger },
        0,
      );
      if (photo) {
        tl.fromTo(
          photo,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: heroPhoto.duration },
          heroPhoto.delay,
        );
      }
    },
    { scope },
  );

  return (
    <div ref={scope} className="hero-wall">
      {TILES.map((t) => (
        <span key={t} className={`hero-tile tile-${t}`} data-hero-anim="tile" aria-hidden="true" />
      ))}
      <div className="hero-photo">
        <img
          src="/hero-lounge.jpg"
          alt={alt}
          width={900}
          height={1200}
          fetchPriority="high"
          decoding="async"
          data-hero-anim="photo"
          className="h-full w-full object-cover"
          style={{ objectPosition: "60% 50%" }}
        />
      </div>
    </div>
  );
}
