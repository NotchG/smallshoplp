// Original single-line drawing in the spirit of SAYKOP's mural wall (not a copy of it):
// one continuous navy line, faces drawn with a few curves. Decorative, aria-hidden.
// Hero: two faces looking at each other over the arch; the left face's eyes blink once.
// Contact: one face, eyes closed, smiling. Static.
// Eyes are drawn in absolute coordinates with no transform attribute, so the CSS blink
// (scaleY on .mural-eye) owns the transform.

// viewBox 0 0 600 700. The arch occupies x 100–500, y 200–700 (circle centre 300,400, r 200).
const heroLine = [
  "M 22 690",
  "C 52 640, 60 592, 32 540",
  "C 6 492, 14 440, 52 404",
  "C 84 374, 70 330, 44 298",
  "C 22 270, 24 244, 50 226",
  // face A: left cheek, top of head, right cheek, chin
  "C 22 190, 16 118, 48 72",
  "C 82 24, 176 12, 216 58",
  "C 248 96, 244 162, 214 196",
  "C 192 222, 158 238, 124 232",
  // into the mouth: upper lip, lower lip
  "C 108 228, 106 212, 119 205",
  "C 127 197, 135 200, 141 197",
  "C 147 194, 157 197, 165 204",
  "C 156 215, 131 217, 121 208",
  // up to the nose, nostril curl, bridge, brow over the right eye
  "C 114 196, 126 182, 140 182",
  "C 152 182, 162 174, 157 165",
  "C 151 156, 146 140, 141 112",
  "C 148 98, 180 95, 202 106",
  // across the top of the arch to face B
  "C 238 82, 272 116, 300 142",
  "C 330 168, 360 150, 372 120",
  "C 384 88, 404 30, 452 22",
  "C 472 18, 470 40, 452 52",
  // face B in profile: forehead, nose, lips, chin
  "C 434 64, 430 82, 424 96",
  "C 416 112, 400 118, 386 126",
  "C 378 132, 386 140, 400 140",
  "C 392 146, 390 152, 402 154",
  "C 394 160, 392 168, 404 172",
  "C 396 184, 404 200, 430 206",
  // jaw, ear curl, down the right side
  "C 470 214, 506 204, 520 178",
  "C 530 160, 528 132, 548 126",
  "C 572 120, 588 146, 576 170",
  "C 562 198, 540 230, 548 288",
  "C 556 350, 596 400, 588 480",
  "C 580 560, 566 620, 578 690",
].join(" ");

function Eye({ cx, cy, w = 46, h = 30, look = 6, blink = false }: {
  cx: number; cy: number; w?: number; h?: number; look?: number; blink?: boolean;
}) {
  const l = cx - w / 2, r = cx + w / 2;
  const d = `M ${l} ${cy} C ${l + w * 0.26} ${cy - h * 0.62}, ${r - w * 0.26} ${cy - h * 0.62}, ${r} ${cy} C ${r - w * 0.26} ${cy + h * 0.5}, ${l + w * 0.26} ${cy + h * 0.5}, ${l} ${cy} Z`;
  return (
    <g className={blink ? "mural-eye" : undefined}>
      <path d={d} />
      <circle className="pupil" cx={cx + look} cy={cy - 1} r={w * 0.15} />
    </g>
  );
}

export function HeroMural() {
  return (
    <div className="mural-wipe" aria-hidden="true" data-mockup="">
      <div className="mural-wipe-inner">
        <svg className="mural" viewBox="0 0 600 700" preserveAspectRatio="xMidYMid meet" focusable="false">
          <path d={heroLine} />
          <Eye cx={97} cy={132} blink />
          <Eye cx={174} cy={128} blink />
          <Eye cx={440} cy={98} w={38} h={24} look={-6} />
        </svg>
      </div>
    </div>
  );
}

// viewBox 0 0 320 360
const contactLine = [
  "M 36 352",
  "C 66 312, 46 270, 72 240",
  // left cheek, top of head, right cheek
  "C 40 206, 34 124, 72 78",
  "C 112 28, 222 22, 262 76",
  "C 296 122, 290 202, 254 244",
  "C 230 272, 190 284, 154 274",
  // chin curl into the smile
  "C 132 268, 128 252, 138 244",
  "C 156 260, 196 258, 212 236",
  // cheek dimple, up to the nose
  "C 220 226, 210 218, 200 222",
  "C 190 214, 198 200, 192 192",
  "C 204 186, 204 172, 192 168",
  "C 184 152, 180 132, 176 112",
  // brow over the right eye, out over the head
  "C 186 98, 220 96, 240 108",
  "C 276 92, 300 60, 312 30",
].join(" ");

export function ContactMural({ className = "" }: { className?: string }) {
  return (
    <svg className={`mural ${className}`} viewBox="0 0 320 360" aria-hidden="true" focusable="false" data-mockup="">
      <path d={contactLine} />
      {/* closed, smiling eyes */}
      <path d="M 102 140 C 112 156, 142 156, 152 140" />
      <path d="M 192 136 C 202 152, 230 152, 240 136" />
      <path d="M 110 150 L 104 158 M 144 150 L 150 158" />
      <path d="M 200 146 L 194 154 M 232 146 L 238 154" />
    </svg>
  );
}
