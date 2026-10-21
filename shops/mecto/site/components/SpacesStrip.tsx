import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { spaces } from "@/content";

// The three spaces drawn as flat elevations from the building's own forms (no owner photos
// of these yet). One 2px baja ground line under Ruang dalam + Halaman dalam, a gap before Taman.
// Drawings are aria-hidden; the zone text beside each carries the meaning.

const ns = "non-scaling-stroke" as const;

function RuangDalam() {
  return (
    <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      {/* concrete gable end wall */}
      <polygon points="30,106 240,12 450,106 450,240 30,240" className="fill-beton" />
      {/* plywood ceiling under the roof */}
      <polygon points="30,106 240,12 450,106" className="fill-kayu" />
      <line x1={135} y1={59} x2={135} y2={106} className="stroke-baja" strokeOpacity={0.35} strokeWidth={1.5} vectorEffect={ns} />
      <line x1={240} y1={12} x2={240} y2={106} className="stroke-baja" strokeOpacity={0.35} strokeWidth={1.5} vectorEffect={ns} />
      <line x1={345} y1={59} x2={345} y2={106} className="stroke-baja" strokeOpacity={0.35} strokeWidth={1.5} vectorEffect={ns} />
      {/* black steel tie beam */}
      <rect x={30} y={102} width={420} height={8} className="fill-baja" />
      {/* warm LED along the roof edges */}
      <polyline points="40,104 240,14 440,104" className="fill-none stroke-kuning" strokeWidth={3} strokeLinecap="round" vectorEffect={ns} />
      {/* house-shaped plywood niche set into the wall */}
      <polygon points="88,170 108,154 128,170 128,192 88,192" className="fill-kayu" />
      <rect x={86} y={190} width={44} height={4} className="fill-baja" />
      {/* long leather bench along the glass, high tables */}
      <rect x={236} y={210} width={204} height={14} rx={3} className="fill-kayu" />
      <rect x={276} y={180} width={44} height={5} rx={2} className="fill-baja" />
      <rect x={296} y={185} width={4} height={51} className="fill-baja" />
      <rect x={286} y={234} width={24} height={6} rx={2} className="fill-baja" />
      <rect x={360} y={180} width={44} height={5} rx={2} className="fill-baja" />
      <rect x={380} y={185} width={4} height={51} className="fill-baja" />
      <rect x={370} y={234} width={24} height={6} rx={2} className="fill-baja" />
      {/* the outline last, so it sits on top */}
      <polygon points="30,106 240,12 450,106 450,240 30,240" className="fill-none stroke-baja" strokeWidth={2} strokeLinejoin="miter" vectorEffect={ns} />
    </svg>
  );
}

function HalamanDalam() {
  const gravel = [];
  for (let i = 0; i < 26; i++) {
    const x = 18 + ((i * 37) % 244);
    const y = 212 + ((i * 13) % 22);
    gravel.push(<circle key={i} cx={x} cy={y} r={2.2} className="fill-semen" />);
  }
  return (
    <svg viewBox="0 0 280 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      {/* courtyard behind the glass */}
      <rect x={10} y={26} width={260} height={214} className="fill-beton" />
      <rect x={22} y={74} width={170} height={130} className="fill-kuning" />
      <rect x={192} y={96} width={70} height={108} className="fill-beton" />
      <rect x={10} y={204} width={260} height={36} fill="#F6F5F1" />
      {gravel}
      {/* glass sheen */}
      <line x1={24} y1={150} x2={58} y2={112} stroke="#fff" strokeOpacity={0.55} strokeWidth={2} vectorEffect={ns} />
      <line x1={154} y1={130} x2={188} y2={92} stroke="#fff" strokeOpacity={0.55} strokeWidth={2} vectorEffect={ns} />
      {/* steel frame and three mullions */}
      <rect x={10} y={18} width={260} height={10} className="fill-baja" />
      <rect x={74} y={28} width={4} height={212} className="fill-baja" />
      <rect x={138} y={28} width={4} height={212} className="fill-baja" />
      <rect x={202} y={28} width={4} height={212} className="fill-baja" />
      <rect x={10} y={18} width={260} height={222} className="fill-none stroke-baja" strokeWidth={2} vectorEffect={ns} />
    </svg>
  );
}

function Taman() {
  const grid = [];
  for (let x = 40; x <= 340; x += 20) {
    grid.push(<line key={`v${x}`} x1={x} y1={110} x2={x} y2={240} stroke="#3A3835" strokeWidth={1.5} vectorEffect={ns} />);
  }
  for (let y = 110; y <= 240; y += 20) {
    grid.push(<line key={`h${y}`} x1={40} y1={y} x2={340} y2={y} stroke="#3A3835" strokeWidth={1.5} vectorEffect={ns} />);
  }
  return (
    <svg viewBox="0 0 380 240" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      {/* night */}
      <rect x={0} y={0} width={380} height={240} className="fill-baja" />
      {/* tree canopy */}
      <circle cx={64} cy={58} r={46} fill="#2B2A27" />
      <circle cx={112} cy={40} r={38} fill="#2B2A27" />
      <circle cx={318} cy={46} r={50} fill="#2B2A27" />
      {/* gabion wall behind */}
      {grid}
      {/* tree trunks */}
      <rect x={84} y={70} width={8} height={170} rx={3} className="fill-abu" />
      <rect x={322} y={80} width={8} height={160} rx={3} className="fill-abu" />
      {/* concrete doorway frame */}
      <path d="M120 66 H290 V240 H264 V92 H146 V240 H120 Z" className="fill-beton" />
      {/* two warm uplights in the gravel */}
      <circle cx={170} cy={230} r={18} className="fill-kuning" fillOpacity={0.22} />
      <circle cx={170} cy={230} r={5} className="fill-kuning" />
      <circle cx={244} cy={230} r={18} className="fill-kuning" fillOpacity={0.22} />
      <circle cx={244} cy={230} r={5} className="fill-kuning" />
    </svg>
  );
}

const ART = { dalam: RuangDalam, halaman: HalamanDalam, taman: Taman };
const SPANS = {
  dalam: "lg:col-span-5",
  halaman: "lg:col-span-3",
  taman: "lg:col-span-4",
};

export default function SpacesStrip() {
  return (
    <section id="tempat" className="section bg-semen" aria-labelledby="tempat-title">
      <Container>
        <div className="head-gap lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <h2 id="tempat-title" className="t-head lg:col-span-5">
            {spaces.heading}
          </h2>
          <p className="t-body measure mt-3 lg:col-span-7 lg:col-start-6 lg:mt-0">{spaces.sub}</p>
        </div>
        <Reveal as="ul" className="grid gap-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-12 lg:gap-x-6">
          {spaces.zones.map((z) => {
            const Art = ART[z.key];
            return (
              <li key={z.key} className={`${SPANS[z.key]} ${z.key === "dalam" ? "md:col-span-2" : ""}`}>
                <div className={`space-art ${z.key === "dalam" ? "space-art-join" : ""}`}>
                  <Art />
                </div>
                <h3 className="t-lead mt-5">{z.name}</h3>
                <p className="t-body measure mt-2">{z.text}</p>
              </li>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
