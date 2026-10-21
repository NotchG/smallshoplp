"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease, prefersReducedMotion, stagger } from "@/lib/motion";
import { breads, ui, type Illo } from "@/content";
import Container from "./Container";
import CrateWall from "./CrateWall";
import ProductIllo from "./illos/ProductIllo";

// Rest poses: y 0–16px, rotation between −7° and +6°. `tilt` is the extra rotation they fall with.
// Three show on phone, four from 768px, five from 1024px, six from 1280px, so the crate is
// always full without crowding. Repeats are decorative (not focusable).
const SLOTS: { kind: Illo; y: number; r: number; tilt: number; show?: string }[] = [
  { kind: "mesesKeju", y: 6, r: -5, tilt: 8 },
  { kind: "cokelat", y: 14, r: 4, tilt: -8 },
  { kind: "sosis", y: 2, r: -2, tilt: 8 },
  { kind: "mesesKeju", y: 12, r: 6, tilt: -8, show: "hidden md:block" },
  { kind: "sosis", y: 4, r: -7, tilt: 8, show: "hidden lg:block" },
  { kind: "cokelat", y: 16, r: 3, tilt: -8, show: "hidden xl:block" },
];

export default function CrateBand() {
  const ref = useRef<HTMLDivElement>(null);

  // Signature moment: the bagged breads drop one after another into the crate and settle
  // behind its front wall. Breads are at rest in the HTML; this only adds the fall.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const all = gsap.utils.toArray<HTMLElement>("[data-crate-bread]");
      const visible = all.filter((el) => el.offsetParent !== null);
      if (!visible.length) return;
      gsap.fromTo(
        visible,
        {
          y: -distance.drop,
          rotation: (_i: number, el: HTMLElement) => Number(el.dataset.tilt ?? 0),
          opacity: 0,
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: duration.hero,
          ease: ease.settle,
          stagger: stagger.hero,
          delay: delay.hero,
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="crate-band">
      <Container className="crate-breads">
        {SLOTS.map((slot, i) => {
          const product = breads.find((b) => b.illustration === slot.kind)!;
          const repeat = Boolean(slot.show);
          return (
            <a
              key={i}
              href={`#${product.id}`}
              className={`crate-link ${slot.show ?? ""}`}
              aria-label={`${ui.lihat} ${product.name.text}`}
              {...(repeat ? { "aria-hidden": true, tabIndex: -1 } : {})}
            >
              <span className="crate-drop" data-crate-bread="" data-tilt={slot.tilt}>
                <span
                  className="crate-pose"
                  style={{ "--rest-y": `${slot.y}px`, "--rest-r": `${slot.r}deg` } as React.CSSProperties}
                >
                  <ProductIllo kind={slot.kind} uid={`crate-${i}`} label={product.alt} decorative />
                </span>
              </span>
            </a>
          );
        })}
      </Container>
      <CrateWall />
    </div>
  );
}
