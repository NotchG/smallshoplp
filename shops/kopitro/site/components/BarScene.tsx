"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease, prefersReducedMotion } from "@/lib/motion";
import { CarafeV60, ClipJar, FacetedGlass, Kettle, Svg } from "./art/parts";
import { placeholders } from "@/content";
import { mock } from "@/lib/mockup";

// The hero bar scene: kettle, V60 on the glass carafe, faceted glass, clip-top jar (jar from 768px).
// Every object's viewBox ends at its base line, so all of them stand on the rail below.
// Sizes scale with --u (px per drawing unit), set per breakpoint in globals.css (.bar-scene).
//
// Signature moment, once per page load: the stream appears under the V60, the carafe fills
// to its resting level, the stream stops (1.6 s in total). The DOM default is the final
// state (filled, no stream), so no-JS, reduced motion and screenshots show the filled carafe.
export default function BarScene() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo("#pour-stream", { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "power1.out" }, 0)
        .from("#pour-liquid", { yPercent: 100, duration: duration.hero - 0.2, ease: ease.pour }, 0)
        .to("#pour-stream", { opacity: 0, duration: 0.2, ease: "power1.out" }, duration.hero - 0.2);
      // The last drop from the TRD was cut in the remove-one-thing pass (step 10).
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Ilustrasi bar Kopitro: ketel leher angsa, V60 di atas teko kaca, gelas kopi dan toples biji kopi"
      className="bar-scene ground-malam"
      {...mock(placeholders.illustrations)}
    >
      <Svg vb={[0, 84, 236, 162]} height="calc(162 * var(--u) * 1.2)">
        <Kettle />
      </Svg>
      <Svg vb={[18, 70, 190, 286]} height="calc(286 * var(--u))">
        <CarafeV60 idp="hero" pour />
      </Svg>
      <Svg vb={[4, 4, 102, 124]} height="calc(124 * var(--u))">
        <FacetedGlass idp="hero-glass" />
      </Svg>
      <Svg vb={[6, 10, 140, 192]} height="calc(192 * var(--u))" className="hidden md:block">
        <ClipJar idp="hero-jar" />
      </Svg>
    </div>
  );
}
