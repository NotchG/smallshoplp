"use client";
import { useState } from "react";
import { banner } from "@/content";

// One element: delete it (and its line in layout.tsx) once the owner approves the site.
// The toggle outlines every [data-mockup] item so the owner can see what still needs confirming.
export default function MockupBanner({ shopName }: { shopName: string }) {
  const [on, setOn] = useState(false);
  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.toggleAttribute("data-show-mockup", next);
  };
  return (
    <div role="note" className="mockup-banner" aria-label={`Draf situs ${shopName}`}>
      <span>{banner.text}</span>
      <button type="button" className="mockup-toggle" aria-pressed={on} onClick={toggle}>
        {on ? banner.hide : banner.show}
      </button>
    </div>
  );
}
