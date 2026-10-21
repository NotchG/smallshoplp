import type { Brew } from "@/content";

// Small line icons for the action buttons (24 grid, currentColor).
const btn = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PinIcon() {
  return (
    <svg {...btn}>
      <path d="M12 21s-6.5-5.8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </svg>
  );
}
export function ChatIcon() {
  return (
    <svg {...btn}>
      <path d="M4.5 19.5l1.2-3.6A7.8 7.8 0 1 1 8.6 18.6z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </svg>
  );
}
export function PhoneIcon() {
  return (
    <svg {...btn}>
      <path d="M6 3.5h3l1.8 4.6-2.3 1.4a11 11 0 0 0 6 6l1.4-2.3 4.6 1.8v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4 5.6a2 2 0 0 1 2-2.1z" />
    </svg>
  );
}

// Brew method icons: 56px, board-coloured 2px line, no fills (they sit on pine).
const brewProps = {
  width: 56,
  height: 56,
  viewBox: "0 0 56 56",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function BrewIcon({ kind }: { kind: Brew["icon"] }) {
  switch (kind) {
    case "aeropress":
      return (
        <svg {...brewProps}>
          <path d="M16 7h24" />
          <path d="M20 7v20M36 7v20" />
          <path d="M18 16h20v24H18z" />
          <path d="M18 24h4M18 30h4" />
          <path d="M15 40h26v3H15z" />
          <path d="M17 45l1 8h20l1-8" />
          <path d="M39 47h3a2.5 2.5 0 0 1 0 5h-3.5" />
        </svg>
      );
    case "v60":
      return (
        <svg {...brewProps}>
          <path d="M10 11h36L33 29H23z" />
          <path d="M22 15l4 10M28 15v11M34 15l-4 10" />
          <path d="M20 29h16v3H20z" />
          <path d="M15 34h26l-2 16a3 3 0 0 1-3 2.5H20a3 3 0 0 1-3-2.5z" />
          <path d="M16.6 44h22.8" />
          <path d="M41 37h2.5a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-4.4" />
        </svg>
      );
    case "coldbrew":
      return (
        <svg {...brewProps}>
          <path d="M22 4h12v6H22z" />
          <path d="M24 10v5M32 10v5" />
          <path d="M24 15l-6 6v28a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V21l-6-6" />
          <path d="M18 27h20" />
          <path d="M22 33h12v10H22z" />
        </svg>
      );
    case "frenchpress":
      return (
        <svg {...brewProps}>
          <circle cx="27" cy="5" r="2.5" />
          <path d="M27 7.5V30" />
          <path d="M14 12h26v3H14z" />
          <path d="M16 15v33M38 15v33" />
          <path d="M17 30h20" />
          <path d="M14 48h26v3H14z" />
          <path d="M38 20h5a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-5" />
        </svg>
      );
    case "vietnam":
      return (
        <svg {...brewProps}>
          <path d="M26 6V4h4v2" />
          <path d="M21 6h14v3H21z" />
          <path d="M20 9h16l-1 13H21z" />
          <path d="M11 22h34" />
          <path d="M16 24l3 28h18l3-28" />
          <path d="M28 26v1.5M28 31v1.5" />
          <path d="M18.4 45h19.2" />
        </svg>
      );
    case "colddrip":
      return (
        <svg {...brewProps}>
          <path d="M10 4h36M12 4v48M44 4v48M8 52h40" />
          <path d="M20 7h16v10a3 3 0 0 1-3 3H23a3 3 0 0 1-3-3z" />
          <path d="M28 20v4M25.5 22h5" />
          <path d="M28 26.5v1.5" />
          <path d="M22 30h12v6H22z" />
          <path d="M12 33h10M34 33h10" />
          <path d="M28 36v3" />
          <path d="M22 41a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
        </svg>
      );
  }
}
