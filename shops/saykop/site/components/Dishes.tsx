import { ill } from "@/lib/palette";

// Top-down flat illustrations of the dishes, drawn from the brief and the reference photos
// (never traced). Flat fills, navy outline, no gradients or shadows. Wrapper has data-mockup.

const N = ill.navy;

// Small deterministic scatter so the drawings are the same on every build.
function scatter(seed: number, n: number, cx: number, cy: number, rx: number, ry: number) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const out: [number, number, number][] = [];
  while (out.length < n) {
    const x = rnd() * 2 - 1, y = rnd() * 2 - 1;
    if (x * x + y * y > 1) continue;
    out.push([cx + x * rx, cy + y * ry, Math.round(rnd() * 180)]);
  }
  return out;
}

function Frame({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`ill ${className}`} data-mockup="">
      <svg viewBox="0 0 400 400" role="img" aria-label={label} className="block h-auto w-full overflow-visible">
        {children}
      </svg>
    </div>
  );
}

export function KarageBowl({ className }: { className?: string }) {
  const grains = scatter(7, 34, 268, 205, 70, 120);
  const sesame = scatter(19, 22, 158, 200, 78, 96);
  const chilli = scatter(31, 7, 160, 196, 70, 90);
  const leaves = scatter(43, 5, 150, 210, 70, 90);
  return (
    <Frame className={className} label="Ilustrasi Karage Salted Egg: nasi dan karaage bersaus telur asin dalam mangkuk putih, dilihat dari atas">
      <circle cx="200" cy="200" r="186" fill={ill.white} stroke={N} strokeWidth="3" />
      <circle cx="200" cy="200" r="160" fill={ill.rice} stroke={N} strokeWidth="2" />
      {grains.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="2.6" fill="#E7E0D2" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {/* karaage pieces peeking out from under the sauce */}
      <g fill={ill.fried} stroke={N} strokeWidth="2.5" strokeLinejoin="round">
        <path d="M70 150 C66 116, 104 92, 136 100 C150 82, 186 84, 196 108 C212 116, 214 142, 200 156 L120 190 C92 196, 72 176, 70 150 Z" />
        <path d="M78 246 C64 220, 82 194, 112 196 C130 180, 168 186, 176 210 C200 220, 204 258, 184 276 C176 304, 140 316, 118 300 C92 302, 72 278, 78 246 Z" />
        <path d="M150 300 C150 278, 176 268, 196 280 C214 280, 226 300, 216 318 C206 338, 172 340, 160 326 C150 320, 148 310, 150 300 Z" />
      </g>
      {/* salted egg sauce */}
      <path
        d="M82 156 C80 132, 104 116, 128 124 C140 108, 172 106, 186 124 C204 128, 210 150, 202 166 C214 182, 212 206, 198 216 C206 236, 196 260, 176 264 C172 286, 150 298, 130 288 C108 296, 86 282, 90 260 C72 250, 72 226, 88 216 C74 200, 76 174, 82 156 Z"
        fill={ill.mango}
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M164 306 C172 298, 186 296, 196 302 M170 322 C180 316, 196 316, 206 320" stroke="#8E4A1E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {sesame.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.6" ry="2" fill={ill.cream} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {chilli.map(([x, y, r], i) => (
        <path key={i} d={`M${x - 6} ${y} Q${x} ${y - 4} ${x + 6} ${y}`} stroke={ill.redVelvet} strokeWidth="3.2" strokeLinecap="round" fill="none" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {leaves.map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="2.4" fill={ill.leaf} transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </Frame>
  );
}

export function HotplateChicken({ className }: { className?: string }) {
  const shallots = scatter(5, 9, 150, 236, 34, 30);
  const sambal = scatter(11, 12, 210, 178, 46, 18);
  return (
    <Frame className={className} label="Ilustrasi Ayam Sambal Ijo Hotplate: ayam, nasi, sambal hijau dan kol goreng di atas hot plate besi, dilihat dari atas">
      {/* wooden board */}
      <path
        d="M58 36 C120 22, 290 20, 350 40 C378 52, 384 90, 380 160 C378 250, 384 320, 360 356 C340 380, 120 384, 52 364 C24 352, 18 300, 20 200 C20 120, 22 56, 58 36 Z"
        fill={ill.pineDeep}
        stroke={N}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g stroke="#A86F37" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M44 120 C80 112, 96 126, 120 118" />
        <path d="M300 334 C326 326, 340 336, 362 328" />
        <path d="M340 70 C352 90, 350 110, 362 126" />
      </g>
      {/* cast-iron plate */}
      <circle cx="202" cy="200" r="150" fill={ill.char} stroke={N} strokeWidth="3" />
      <circle cx="202" cy="200" r="132" fill="none" stroke="#3B3834" strokeWidth="4" />
      {/* green sambal */}
      <path d="M150 168 C160 140, 220 136, 262 150 C290 164, 280 200, 250 206 C220 214, 170 210, 156 196 C146 188, 146 178, 150 168 Z" fill={ill.leaf} stroke={N} strokeWidth="2" />
      {sambal.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#2F5E24" />
      ))}
      {/* chicken */}
      <path
        d="M276 103 L300 89 C302 80, 316 80, 316 90 C324 92, 324 106, 313 106 L285 120 Z"
        fill={ill.cream}
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M174 134 C170 104, 198 84, 226 88 C248 90, 262 98, 280 102 C286 108, 288 116, 286 122 C270 128, 256 138, 240 152 C220 170, 178 166, 174 134 Z"
        fill="#D9962F"
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M192 118 C204 106, 222 104, 236 110 M196 140 C212 132, 230 130, 246 136" stroke="#B5741F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* rice dome with fried shallots */}
      <circle cx="150" cy="238" r="60" fill={ill.rice} stroke={N} strokeWidth="2.5" />
      {shallots.map(([x, y, r], i) => (
        <path key={i} d={`M${x - 5} ${y + 1.5} Q${x} ${y - 4}, ${x + 5} ${y + 1.5}`} stroke="#9C4A2A" strokeWidth="2.4" fill="none" strokeLinecap="round" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {/* crispy fried cabbage */}
      <g fill="#D8A658" stroke={N} strokeWidth="2" strokeLinejoin="round">
        <path d="M222 236 C226 216, 250 210, 262 220 C272 206, 296 210, 300 228 C318 232, 320 256, 306 266 C312 284, 296 300, 278 294 C268 310, 244 308, 238 292 C220 290, 212 270, 222 258 C212 250, 214 240, 222 236 Z" />
        <path d="M250 300 C254 288, 272 286, 280 296 C294 296, 300 312, 290 322 C284 334, 264 336, 256 326 C244 324, 242 308, 250 300 Z" />
      </g>
      <g stroke="#8A4B22" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M236 250 C250 246, 262 256, 276 248 M244 274 C258 268, 272 280, 290 270 M262 230 C270 240, 282 236, 290 244" />
        <path d="M262 306 C270 302, 278 310, 284 306" />
      </g>
    </Frame>
  );
}

export function NasiGorengPlate({ className }: { className?: string }) {
  const corn = scatter(3, 14, 222, 196, 64, 50);
  const chilli = scatter(17, 7, 222, 196, 60, 46);
  const onion = scatter(29, 6, 222, 196, 60, 46);
  const plateDots: [number, number][] = [];
  for (let y = 22; y <= 378; y += 13) {
    for (let x = 22 + ((y / 13) % 2 ? 6.5 : 0); x <= 378; x += 13) {
      const dx = x - 200, dy = y - 200, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 176 && d > 150) plateDots.push([Math.round(x * 10) / 10, y]);
    }
  }
  return (
    <Frame className={className} label="Ilustrasi Nasi Goreng Saykop: nasi goreng jagung di atas daun pisang dengan kerupuk, timun, selada dan ayam saus telur asin, di piring hitam bertitik">
      {/* black dotted plate */}
      <circle cx="200" cy="200" r="186" fill={ill.char} stroke={N} strokeWidth="3" />
      <g fill="#8B867E">
        {plateDots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" />
        ))}
      </g>
      {/* banana leaf */}
      <path
        d="M70 268 C60 190, 110 96, 220 74 C300 60, 352 110, 340 180 C330 260, 250 320, 160 330 C110 334, 78 310, 70 268 Z"
        fill={ill.leaf}
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <g stroke="#3D6F2E" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M86 300 C150 240, 240 150, 330 100" />
        <path d="M120 270 L110 230 M160 232 L146 186 M200 196 L190 150 M240 162 L234 118 M280 132 L278 96 M150 252 L190 282 M196 214 L240 246 M240 178 L286 206 M282 144 L320 164" />
      </g>
      {/* lettuce and cucumber */}
      <path
        d="M262 252 C258 232, 280 218, 298 226 C312 214, 336 222, 336 240 C352 250, 346 274, 330 278 C330 296, 306 304, 294 292 C276 300, 258 286, 264 270 C254 266, 254 256, 262 252 Z"
        fill="#86B957"
        stroke={N}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {[[284, 248], [314, 256], [298, 280]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="19" fill={ill.cucumber} stroke={N} strokeWidth="2" />
          <circle cx={x} cy={y} r="15" fill="none" stroke={ill.leaf} strokeWidth="3" />
          <circle cx={x} cy={y} r="6" fill="none" stroke="#B5CE95" strokeWidth="2" strokeDasharray="2 3" />
        </g>
      ))}
      {/* fried rice with corn, chilli and spring onion */}
      <path
        d="M150 160 C160 126, 210 112, 250 124 C290 132, 302 170, 290 204 C282 238, 240 256, 200 252 C160 250, 134 230, 136 200 C134 184, 140 170, 150 160 Z"
        fill={ill.friedRice}
        stroke={N}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {corn.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.6" fill={ill.lemon} stroke="#7E5426" strokeWidth="1" />
      ))}
      {chilli.map(([x, y, r], i) => (
        <rect key={i} x={x - 4} y={y - 2} width="8" height="4" rx="1.5" fill={ill.redVelvet} transform={`rotate(${r} ${x} ${y})`} />
      ))}
      {onion.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#7BB64C" />
      ))}
      {/* salted-egg chicken */}
      {[
        [112, 142, 24, -10],
        [150, 126, 21, 20],
        [142, 166, 20, 40],
      ].map(([x, y, r, rot], i) => (
        <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
          <path
            d={`M${x - r} ${y} C${x - r} ${y - r * 0.8}, ${x - r * 0.3} ${y - r}, ${x + r * 0.2} ${y - r * 0.9} C${x + r} ${y - r * 0.8}, ${x + r * 1.05} ${y + r * 0.3}, ${x + r * 0.6} ${y + r * 0.8} C${x + r * 0.1} ${y + r * 1.1}, ${x - r * 0.9} ${y + r * 0.8}, ${x - r} ${y} Z`}
            fill={ill.fried}
            stroke={N}
            strokeWidth="2.2"
          />
          <path
            d={`M${x - r * 0.7} ${y - r * 0.1} C${x - r * 0.6} ${y - r * 0.7}, ${x + r * 0.3} ${y - r * 0.8}, ${x + r * 0.6} ${y - r * 0.3} C${x + r * 0.8} ${y + r * 0.1}, ${x + r * 0.3} ${y + r * 0.2}, ${x + r * 0.2} ${y + r * 0.5} C${x - r * 0.1} ${y + r * 0.2}, ${x - r * 0.5} ${y + r * 0.4}, ${x - r * 0.7} ${y - r * 0.1} Z`}
            fill={ill.mango}
            stroke={N}
            strokeWidth="1.6"
          />
        </g>
      ))}
      {/* krupuk */}
      <g fill="#F6ECD6" stroke={N} strokeWidth="2" strokeLinejoin="round">
        <path d="M92 252 C86 232, 104 214, 124 220 C136 206, 160 210, 164 228 C180 236, 178 260, 162 266 C160 286, 136 292, 124 280 C104 286, 86 272, 92 252 Z" />
        <path d="M148 290 C146 272, 166 262, 180 270 C194 262, 214 272, 210 290 C220 304, 206 320, 190 316 C178 328, 156 322, 156 308 C144 304, 142 294, 148 290 Z" />
      </g>
      <g fill="#E2CFA6">
        {[[112, 240], [134, 232], [146, 254], [122, 262], [104, 256], [154, 240], [170, 284], [186, 296], [178, 308], [196, 284], [164, 300]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" />
        ))}
      </g>
    </Frame>
  );
}
