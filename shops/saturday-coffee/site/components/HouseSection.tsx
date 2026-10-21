import { mock } from "@/lib/mockup";

// Suasana: cross-section of the house (photo 1). Night sky over the open court with a light
// string, white columns, the wooden stair with its white square-key balustrade, a brick
// planter with snake plants, the tile floor, and the lit upstairs room. Labels are HTML,
// placed on what they name. Placeholder drawing until the owner sends photos.

const STEPS = 8;
const SX = 322; // stair foot x
const SY = 310; // ground floor level
const TOPY = 176; // upper floor level
const RISE = (SY - TOPY) / STEPS;
const RUN = 12;

const stair = (() => {
  let d = `M${SX} ${SY}`;
  for (let k = 1; k <= STEPS; k++) {
    d += `V${(SY - RISE * k).toFixed(2)}H${SX + RUN * k}`;
  }
  return `${d}L${SX + RUN * STEPS} ${TOPY + 16}L${SX + 22} ${SY}Z`;
})();

const balustrade = (() => {
  const slope = RISE / RUN;
  const yRail = (x: number) => SY - RISE - 30 - (x - (SX + 6)) * slope;
  let d = `M${SX} ${yRail(SX).toFixed(1)}L${SX + RUN * STEPS} ${yRail(SX + RUN * STEPS).toFixed(1)}`;
  for (let k = 0; k < STEPS; k++) {
    const x = SX + 6 + RUN * k;
    const yt = SY - RISE * (k + 1);
    d += `M${x} ${yt.toFixed(1)}V${(yt - 30).toFixed(1)}`;
    d += `M${x + 1.5} ${(yt - 20).toFixed(1)}h8v8h-8z`;
  }
  return d;
})();

// Light string over the court: quadratic from the pole to the house.
const P0 = [16, 96], P1 = [120, 172], P2 = [228, 92];
const bulbs = [1, 2, 3, 4, 5, 6].map((i) => {
  const t = i / 7;
  const u = 1 - t;
  return [u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0], u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1] + 7];
});
const circles = (r: number) =>
  bulbs.map(([x, y]) => `M${(x - r).toFixed(1)} ${y.toFixed(1)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`).join("");

export default function HouseSection({
  alt,
  labels,
}: {
  alt: string;
  labels: { upstairs: string; court: string };
}) {
  return (
    <figure className="relative overflow-hidden rounded-2xl bg-paper" {...mock(true)}>
      <svg viewBox="0 0 480 360" role="img" aria-label={alt} className="block h-auto w-full">
        <defs>
          <pattern id="house-floor" width="128" height="64" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <rect width="128" height="64" fill="#A8452A" />
            <polygon points="-5,3 69,3 53,61 11,61" fill="#5A6066" />
            <polygon points="123,3 197,3 181,61 139,61" fill="#5A6066" />
            <polygon points="75,3 117,3 133,61 59,61" fill="#4F555B" />
            <polygon points="-53,3 -11,3 5,61 -69,61" fill="#4F555B" />
          </pattern>
        </defs>
        {/* night sky */}
        <rect width="480" height="312" fill="#22282C" />
        {/* ground floor, covered */}
        <rect x="226" y="188" width="254" height="122" fill="#ECE7DC" />
        <rect x="306" y="188" width="132" height="122" fill="#DCD5C8" />
        <path d={stair} fill="#8C5A2E" />
        <path d={balustrade} transform="translate(1.5 1.5)" stroke="#5A6066" strokeOpacity="0.55" strokeWidth="2.2" fill="none" />
        <path d={balustrade} stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
        <rect x="232" y="188" width="18" height="122" fill="#FFFFFF" />
        <rect x="454" y="188" width="18" height="122" fill="#FFFFFF" />
        {/* upper floor: wall, lit room, slabs */}
        <rect x="226" y="66" width="254" height="110" fill="#F3EFE6" />
        <rect x="252" y="84" width="204" height="78" rx="2" fill="#F6D58E" />
        <path d="M352 84V98" stroke="#8C5A2E" strokeWidth="1.5" />
        <circle cx="352" cy="102" r="6" fill="#F2BD5E" />
        <path d="M322 140h46v4h-4v18h-4v-18h-30v18h-4v-18h-4z" fill="#8C5A2E" />
        <rect x="414" y="144" width="20" height="18" rx="2" fill="#A8452A" />
        <path d="M424 144Q412 128 416 112Q426 128 424 144ZM424 144Q432 124 446 120Q438 136 424 144Z" fill="#3D6B4A" />
        <rect x="218" y="54" width="262" height="12" fill="#E4DFD5" />
        <rect x="218" y="176" width="262" height="12" fill="#E4DFD5" />
        {/* open court: boundary wall, pole, light string */}
        <rect x="0" y="198" width="22" height="112" fill="#F3EFE6" />
        <rect x="13" y="90" width="5" height="110" fill="#C5C2B9" />
        <path d={`M${P0[0]} ${P0[1]}Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`} stroke="#C5C2B9" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
        <path d={circles(11)} fill="#F2BD5E" fillOpacity="0.22" />
        <path d={circles(4.5)} fill="#F2BD5E" />
        {/* snake plants in the brick planter */}
        <path d="M64 252Q58 214 56 176Q70 214 76 252ZM118 252Q122 208 136 168Q134 212 132 252Z" fill="#3D6B4A" />
        <path d="M84 252Q80 200 88 150Q100 200 98 252ZM142 252Q150 220 166 190Q164 222 156 252Z" fill="#86A86B" />
        <path d="M100 252Q100 196 112 158Q116 204 114 252Z" fill="#2F5539" />
        <rect x="44" y="258" width="150" height="52" fill="#A8452A" />
        <path d="M44 275H194M44 292H194M76 258v17M120 258v17M160 258v17M98 275v17M140 275v17M180 275v17M76 292v18M120 292v18M160 292v18" stroke="#8E3820" strokeWidth="1.6" fill="none" />
        <rect x="38" y="250" width="162" height="10" rx="2" fill="#EDE6D6" />
        {/* tile floor */}
        <rect y="310" width="480" height="50" fill="url(#house-floor)" />
      </svg>
      <span className="house-label" style={{ left: "55.5%", top: "26.5%" }}>
        {labels.upstairs}
      </span>
      <span className="house-label house-label-court" style={{ left: "5%", top: "37%" }}>
        {labels.court}
      </span>
    </figure>
  );
}
