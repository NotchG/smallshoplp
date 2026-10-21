"use client";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ease, paintSequence, prefersReducedMotion } from "@/lib/motion";

// The shop's name, brushed onto the wall the way it is painted on their own brick:
// an arc over "Teman", "Kita" stepped in, an underline swoosh, then CAFE & RESTO.
// Signature moment: each stroke is a two-span wipe (outer masks from the left, inner
// counter-moves), so the letters stay still while the edge travels like a brush.

function Stroke({ name, children }: { name: string; children: ReactNode }) {
  return (
    <span className={`paint-outer stroke-${name}`} data-stroke={name}>
      <span className="paint-inner">{children}</span>
    </span>
  );
}

// Brush-stroke shapes, filled (not stroked) so they taper like the painted logo.
function ArcSwoosh() {
  return (
    <svg viewBox="0 0 400 100" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M5 91C1 54 29 15 104 6c96-9 214 33 293 91-76-44-187-77-283-74C58 25 31 56 27 92c-7 5-17 5-22-1Z"
      />
    </svg>
  );
}

function UnderSwoosh() {
  return (
    <svg viewBox="0 0 400 44" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M3 17c92 16 236 20 395-13C251 30 106 45 10 33c-7-2-10-11-7-16Z"
      />
    </svg>
  );
}

export default function PaintedName({
  lines,
  subline,
  id,
}: {
  lines: [string, string];
  subline: string;
  id?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const tl = gsap.timeline();
      for (const step of paintSequence) {
        const outer = ref.current.querySelector<HTMLElement>(`[data-stroke="${step.stroke}"]`);
        const inner = outer?.firstElementChild;
        if (!outer || !inner) continue;
        const tween = { duration: step.duration, ease: ease.paint };
        tl.fromTo(outer, { x: 0, xPercent: -100 }, { x: 0, xPercent: 0, ...tween }, step.at);
        tl.fromTo(inner, { x: 0, xPercent: 100 }, { x: 0, xPercent: 0, ...tween }, step.at);
      }
    },
    { scope: ref },
  );

  return (
    <h1 ref={ref} id={id} className="paint-name t-display">
      <Stroke name="arc">
        <ArcSwoosh />
      </Stroke>
      <Stroke name="teman">{lines[0]}</Stroke>{" "}
      <Stroke name="kita">{lines[1]}</Stroke>
      <Stroke name="underline">
        <UnderSwoosh />
      </Stroke>{" "}
      <span className="hero-subline t-label">{subline}</span>
    </h1>
  );
}
