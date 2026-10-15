// Product drawings in the style of the shop's backlit wall sign (design brief §6):
// white monoline on taupe, 3px stroke at a 240 viewBox, round caps and joins,
// no faces, no text, each object resting on one table line.
// `K` (knockout) shapes are filled with the tile colour only to hide the lines behind
// them, so the drawing still reads as pure line work.
import type { ReactNode } from "react";

const K = "var(--color-papan)";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

// Iced espresso drink in a plain straight tumbler, with ice and a straw.
export function Espresso() {
  return (
    <Svg>
      <path d="M44 196H196" />
      {/* straw, behind the glass rim */}
      <path d="M134 120L151 34M142 120L159 34M151 34H159" />
      {/* ice */}
      <rect x="95" y="96" width="25" height="25" rx="5" transform="rotate(-11 107.5 108.5)" fill={K} />
      <rect x="121" y="104" width="22" height="22" rx="5" transform="rotate(13 132 115)" fill={K} />
      <rect x="101" y="124" width="21" height="21" rx="5" transform="rotate(5 111.5 134.5)" fill={K} />
      {/* glass */}
      <path d="M80 60L90 196M160 60L150 196M78 60H162" />
      <path d="M82 88H158" />
      <path d="M86.6 150C97 143 107 157 118 150S139 143 153.4 150" />
      <path d="M91.6 182H148.4" />
    </Svg>
  );
}

// V60 dripper on a glass server, two drips falling.
export function ManualBrew() {
  return (
    <Svg>
      <path d="M44 196H196" />
      {/* server */}
      <path d="M86 196C74 176 76 150 96 134V124M154 196C166 176 164 150 144 134V124" />
      <path d="M92 124H148" />
      <path d="M160 148C178 148 180 176 158 182" />
      <path d="M80 176C100 172 140 180 160 176" />
      {/* drips */}
      <path d="M120 138C117 143 115 146 115 149A5 5 0 0 0 125 149C125 146 123 143 120 138Z" />
      <path d="M120 156C117.6 160 116 162.4 116 164.8A4 4 0 0 0 124 164.8C124 162.4 122.4 160 120 156Z" />
      {/* dripper */}
      <path d="M86 116H154V124H86Z" fill={K} />
      <path d="M108 116L70 60H170L132 116" fill={K} />
      <path d="M64 60H176" />
      <path d="M93 70L111 104M147 70L129 104" />
      <path d="M168 66C190 66 190 96 149 96" />
    </Svg>
  );
}

// One half of the beef cheese melt in side view: toast, beef, melted cheese, toast.
function SandwichHalf() {
  return (
    <>
      {/* bottom toast */}
      <rect x="40" y="176" width="160" height="24" rx="9" fill={K} />
      {/* beef, wavy */}
      <path
        d="M42 178V170q6.5 -8 13 0t13 0t13 0t13 0t13 0t13 0t13 0t13 0t13 0t13 0t13 0t13 0V178Z"
        fill={K}
      />
      {/* cheese, melting over the crust */}
      <path
        d="M36 160H202C207 160 208 166 204 166H162V181A5 5 0 0 1 152 181V166H78V190A5 5 0 0 1 68 190V166H45C40 166 38 170 38 176V185A4 4 0 0 1 30 185V168C30 163 32 160 36 160Z"
        fill={K}
      />
      {/* top toast */}
      <path d="M40 160V147C40 135 50 128 63 128H177C190 128 200 135 200 147V160Z" fill={K} />
      {/* grill marks */}
      <path d="M78 150L90 138M112 150L124 138M146 150L158 138" />
    </>
  );
}

// Two toasted halves, stacked; the top one leans on its corner.
export function BeefCheeseMelt() {
  return (
    <Svg>
      <path d="M24 200H216" />
      <SandwichHalf />
      <g transform="translate(26 -38) scale(0.8) rotate(2 200 200)" strokeWidth={3.75}>
        <SandwichHalf />
      </g>
    </Svg>
  );
}

// Thick slice of toast, fried egg on top, a cheese corner melting down the side.
export function EggToast() {
  return (
    <Svg>
      <path d="M26 196H214" />
      {/* toast */}
      <rect x="34" y="128" width="172" height="68" rx="16" fill={K} />
      <rect x="46" y="140" width="148" height="44" rx="9" />
      {/* cheese corner */}
      <path
        d="M152 128V121H194C205 121 213 129 213 140V166A6 6 0 0 1 201 166V144C201 137 197 133 190 133H158Z"
        fill={K}
      />
      {/* egg white */}
      <path
        d="M48 128C41 116 53 105 68 109C77 97 97 97 107 105C123 99 147 99 160 105C171 97 189 101 189 114C199 116 201 126 193 128Z"
        fill={K}
      />
      {/* yolk */}
      <path d="M97 112C97 79 151 77 151 112Z" fill={K} />
    </Svg>
  );
}
