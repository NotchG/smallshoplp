// The rooftop's string lights (photo-2 as reference), drawn as geometry: each wire is a parabola
// y = y0 + 4·sag·t(1−t) across the container. The SVG stretches only horizontally
// (preserveAspectRatio="none", non-scaling stroke), so bulbs are HTML dots placed on the same curve.
// Static and decorative: no animation, aria-hidden.
type Wire = { y0: number; sag: number; bulbs: number[] };

function Strand({ height, wires }: { height: number; wires: Wire[] }) {
  return (
    <div className="festoon" style={{ height }}>
      <svg viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" focusable="false">
        {wires.map((w, i) => (
          <path key={i} d={`M0 ${w.y0} Q500 ${w.y0 + 2 * w.sag} 1000 ${w.y0}`} />
        ))}
      </svg>
      {wires.flatMap((w, i) =>
        w.bulbs.map((t, j) => (
          <span
            key={`${i}-${j}`}
            className="bulb"
            style={{ left: `${(t * 100).toFixed(2)}%`, top: `${(w.y0 + 4 * w.sag * t * (1 - t)).toFixed(1)}px` }}
          >
            <i />
          </span>
        )),
      )}
    </div>
  );
}

const spread = (n: number, offset = 0.5) => Array.from({ length: n }, (_, i) => (i + offset) / n);

export default function Festoon() {
  return (
    <div aria-hidden="true">
      <div className="md:hidden">
        <Strand height={84} wires={[{ y0: 6, sag: 46, bulbs: spread(6) }]} />
      </div>
      <div className="hidden md:block">
        <Strand
          height={132}
          wires={[
            { y0: 6, sag: 50, bulbs: spread(10) },
            { y0: 24, sag: 74, bulbs: Array.from({ length: 10 }, (_, i) => (i + 1) / 11) },
          ]}
        />
      </div>
    </div>
  );
}
