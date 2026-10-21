// Authored line icons: 24px grid, 1.75 stroke, round caps. Decorative next to a text label.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconDirections() {
  return (
    <svg {...base}>
      <path d="M6 19v-5.5A3.5 3.5 0 0 1 9.5 10H18" />
      <path d="m14.5 6.5 3.5 3.5-3.5 3.5" />
    </svg>
  );
}

export function IconChat() {
  return (
    <svg {...base}>
      <path d="M12 4.5a7.5 7.5 0 0 1 0 15c-1.3 0-2.6-.33-3.7-.95L4.5 19.5l1-3.6A7.5 7.5 0 0 1 12 4.5Z" />
      <path d="M9 11.2h6M9 14h3.6" />
    </svg>
  );
}

export function IconPhone() {
  return (
    <svg {...base}>
      <path d="M7 4h2.6l1.4 3.6-1.9 1.3a9.6 9.6 0 0 0 5.9 5.9l1.3-1.9 3.6 1.4V17a2 2 0 0 1-2.1 2A14.5 14.5 0 0 1 5 6.1 2 2 0 0 1 7 4Z" />
    </svg>
  );
}

// Tiny line drawings inside photo frames, so a frame never reads as a broken image.
const frame = {
  viewBox: "0 0 56 56",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function FrameStoolTable() {
  return (
    <svg {...frame}>
      <ellipse cx="34" cy="20" rx="12" ry="3.2" />
      <path d="M26 22.5 23 46M42 22.5 45 46M28.5 23.5 41 44" />
      <ellipse cx="15" cy="31" rx="7" ry="2.2" />
      <path d="M9.5 32.5 8.5 46M20.5 32.5 21.5 46M12.5 33l-.5 13M17.5 33l.5 13" />
    </svg>
  );
}

export function FrameUplitTrunk() {
  return (
    <svg {...frame}>
      <path d="M26 6v40M30 6v40" />
      <path d="M26 14h4M26 22h4M26 30h4" />
      <path d="M28 46 17 26M28 46l11-20" strokeDasharray="2 3" />
      <path d="M22 48h12" />
    </svg>
  );
}

export function FrameLever() {
  return (
    <svg {...frame}>
      <path d="M10 14h36v8H10z" />
      <path d="M20 22v6h16v-6" />
      <path d="M24 28v3h8v-3" />
      <path d="M36 30h12" />
      <path d="M20 40h16l-2 8H22z" />
    </svg>
  );
}

export function FrameCup() {
  return (
    <svg {...frame}>
      <path d="M14 22h26c0 10-4.5 17-13 17s-13-7-13-17Z" />
      <path d="M39.5 25.5c5 0 5.5 7.5-1.5 8" />
      <path d="M9 43h36" />
      <path d="M22 12c-1.5 2 1.5 3.5 0 6M29 11c-1.5 2 1.5 3.5 0 6" />
    </svg>
  );
}
