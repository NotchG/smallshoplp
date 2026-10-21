// Line-only drawings of the brew kit (photos), so equipment reads differently from the filled drinks.
// Shared 120×160 viewBox; everything stands on y = 160 (the shelf rail). Decorative: names are real text.
import type { Method } from "@/content";

function Line({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 120 160"
      aria-hidden="true"
      className="line-art block h-full w-auto mx-auto"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function V60() {
  return (
    <Line>
      {/* gooseneck spout and stream */}
      <path d="M4 26c20-6 40-6 52 8l4 6" />
      <path d="M60 44v20" strokeDasharray="2 4" />
      {/* cone */}
      <path d="M30 70h60l-20 34H50z" />
      <path d="M42 76l10 22M60 76v24M78 76l-10 22" />
      <path d="M36 104h48v6H36z" />
      {/* server */}
      <path d="M34 158h52c4 0 6-3 6-7v-30c0-6-4-10-10-10H38c-6 0-10 4-10 10v30c0 4 2 7 6 7z" />
      <path d="M28 136h64" />
      <path d="M92 120c12 0 14 8 14 13s-2 13-14 13" />
    </Line>
  );
}

function Syphon() {
  return (
    <Line>
      {/* stand */}
      <path d="M18 158h84M96 158V30M96 64H76" />
      {/* upper chamber and tube */}
      <path d="M42 22h32v44l-8 10H50l-8-10z" />
      <path d="M38 22h40" />
      <path d="M56 76v24M60 76v24" />
      {/* lower globe */}
      <path d="M50 92h16" />
      <circle cx="58" cy="114" r="20" />
      <path d="M40 120c10 6 26 6 36 0" />
      {/* burner */}
      <path d="M48 158v-14h20v14" />
      <path d="M58 140c-4-3-3-7 0-10 3 3 4 7 0 10z" />
    </Line>
  );
}

function ColdDrip() {
  return (
    <Line>
      {/* tower frame */}
      <path d="M20 158V8h80v150M12 158h96" />
      {/* water chamber */}
      <path d="M40 16h40v26c0 6-8 10-20 10s-20-4-20-10z" />
      {/* valve and drops */}
      <path d="M60 52v8M54 58h12" />
      <circle cx="60" cy="68" r="1.5" />
      <circle cx="60" cy="78" r="1.5" />
      {/* coffee chamber */}
      <path d="M44 86h32v22H44z" />
      {/* coil */}
      <path d="M60 108v4c8 2 8 6 0 8s-8 6 0 8 8 6 0 8v4" />
      {/* carafe */}
      <path d="M46 158h28l-2-14H48z" />
    </Line>
  );
}

function FrenchPress() {
  return (
    <Line>
      {/* knob and rod */}
      <circle cx="58" cy="16" r="6" />
      <path d="M58 22v26" />
      {/* lid with spout */}
      <path d="M30 48h56v8H30zM30 52l-8-4" />
      {/* glass body, coffee line, plunger */}
      <path d="M34 56h48v96H34z" />
      <path d="M34 96h48" />
      <path d="M36 80h44" strokeDasharray="3 3" />
      {/* frame and handle */}
      <path d="M82 66h12c6 0 8 4 8 10v52c0 6-2 10-8 10H82" />
      <path d="M28 158h60M34 152v6M82 152v6" />
    </Line>
  );
}

export default function BrewIcon({ icon }: { icon: Method["icon"] }) {
  if (icon === "v60") return <V60 />;
  if (icon === "syphon") return <Syphon />;
  if (icon === "coldDrip") return <ColdDrip />;
  return <FrenchPress />;
}
