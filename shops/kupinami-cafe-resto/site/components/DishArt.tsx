// Flat top-down dish illustrations for the menu placemats (design brief §6).
// No outlines, one tinta shadow at 8% offset 6px, same 220-unit circle footprint.
type ArtProps = { className?: string };

const SHADOW = <circle cx="116" cy="116" r="100" fill="#12302C" fillOpacity="0.08" />;

export function MieAceh({ className = "" }: ArtProps) {
  const noodles = [
    "M66 112C76 92 94 128 108 104S134 96 140 112",
    "M70 132C84 114 98 146 116 126S142 120 152 136",
    "M78 92C92 76 104 108 120 88S146 84 154 98",
    "M74 150C90 138 104 164 122 148S146 146 156 154",
    "M90 78C102 70 112 90 126 78",
    "M64 122C78 140 96 110 110 132S134 140 148 124",
    "M84 104C96 120 112 92 124 110S144 118 156 108",
    "M84 164C96 156 112 170 128 162",
    "M100 94C108 112 124 98 132 120",
    "M96 140C104 124 118 152 130 138S148 132 158 120",
    "M70 100C80 86 88 104 96 92",
  ];
  const beef: [number, number, number][] = [
    [80, 112, 15], [120, 96, -20], [104, 136, 30], [136, 124, 6], [92, 88, -12],
  ];
  const peanuts: [number, number, number][] = [
    [150, 162, 20], [161, 158, -30], [170, 168, 60], [157, 171, 0], [146, 173, 40], [165, 179, -10], [153, 183, 30],
  ];
  return (
    <svg
      viewBox="0 0 222 222"
      role="img"
      aria-label="Ilustrasi Mie Aceh beef wagyu: mie kuning berkuah dengan potongan daging, emping, mentimun, tomat, dan kacang."
      className={className}
    >
      {SHADOW}
      <circle cx="110" cy="110" r="100" fill="#CDE9EC" />
      <path d="M48 122C44 86 70 60 108 58C150 56 178 84 176 120C174 158 146 180 108 180C70 180 52 156 48 122Z" fill="#8A4B22" />
      <g fill="none" stroke="#E3B23C" strokeWidth="6.5" strokeLinecap="round">
        {noodles.map((d) => <path key={d} d={d} />)}
      </g>
      <g fill="#6B3A22">
        {beef.map(([x, y, r]) => (
          <rect key={`${x}${y}`} x={x - 9} y={y - 7} width="18" height="14" rx="4" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
      <g fill="#F4EBD8">
        <path d="M44 84C40 68 56 56 70 62C84 56 94 72 86 84C90 98 72 104 62 98C48 102 38 94 44 84Z" />
        <path d="M76 52C78 38 96 32 104 42C116 40 122 54 114 62C114 74 98 76 92 68C80 70 70 62 76 52Z" />
      </g>
      <circle cx="170" cy="86" r="17" fill="#CFE8C0" />
      <path d="M144 62a16 16 0 0 1 32 0Z" transform="rotate(24 160 62)" fill="#E0533D" />
      <g fill="#9C4F2E">
        {peanuts.map(([x, y, r]) => (
          <ellipse key={`${x}${y}`} cx={x} cy={y} rx="5.2" ry="3.8" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export function Carbonara({ className = "" }: ArtProps) {
  // a twirl of pasta: arcs of growing radius around the centre
  const arcs: [number, number, number][] = [
    [8, 0, 300], [15, 120, 430], [22, 230, 520], [29, 20, 320], [36, 160, 450],
    [43, 280, 560], [50, 60, 300], [50, 340, 420], [57, 200, 330], [36, 470, 520],
  ];
  const arc = (r: number, a0: number, a1: number) => {
    const p = (a: number) => [110 + r * Math.cos((a * Math.PI) / 180), 110 + r * Math.sin((a * Math.PI) / 180)];
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    const large = a1 - a0 > 180 ? 1 : 0;
    return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  };
  const chicken: [number, number, number][] = [
    [80, 92, -18], [136, 84, 22], [146, 128, -8], [96, 146, 30], [122, 112, 4], [70, 124, 50],
  ];
  const pepper: [number, number][] = [
    [74, 108], [92, 72], [126, 66], [154, 104], [150, 150], [118, 160], [82, 156], [104, 88], [130, 128], [92, 118], [62, 96], [162, 128], [110, 132], [140, 100],
  ];
  const parsley: [number, number, number][] = [
    [100, 80, 20], [150, 96, -30], [126, 150, 60], [78, 138, 10], [116, 98, -50], [64, 112, 30], [140, 160, 15], [104, 124, 70], [88, 104, -20], [156, 140, 40],
  ];
  return (
    <svg
      viewBox="0 0 222 222"
      role="img"
      aria-label="Ilustrasi chicken carbonara: pasta bersaus krim dengan potongan ayam dan peterseli."
      className={className}
    >
      {SHADOW}
      <circle cx="110" cy="110" r="100" fill="#E2EBE5" />
      <circle cx="110" cy="110" r="84" fill="#FFFFFF" />
      <path d="M48 110C46 76 74 50 110 50C148 50 174 76 172 112C170 148 144 172 108 170C72 168 50 144 48 110Z" fill="#F3E3C3" />
      <g fill="none" stroke="#DFAE55" strokeWidth="8" strokeLinecap="round">
        {arcs.map(([r, a0, a1]) => <path key={`${r}${a0}`} d={arc(r, a0, a1)} />)}
      </g>
      <g fill="#F1D3A8">
        {chicken.map(([x, y, r]) => (
          <rect key={`${x}${y}`} x={x - 13} y={y - 9} width="26" height="18" rx="7" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
      <g fill="#12302C" fillOpacity="0.75">
        {pepper.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.7" />)}
      </g>
      <g fill="#4C8C4A">
        {parsley.map(([x, y, r]) => (
          <rect key={`${x}${y}`} x={x - 3.5} y={y - 2} width="7" height="4" rx="2" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
    </svg>
  );
}

export function CappuccinoSet({ className = "" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 222 222"
      role="img"
      aria-label="Ilustrasi cappuccino di cangkir hijau toska, dengan kue kacang dan dua bungkus gula."
      className={className}
    >
      <circle cx="110" cy="110" r="100" fill="#EBD3B5" />
      {/* saucer, cup and handle */}
      <circle cx="104" cy="104" r="64" fill="#12302C" fillOpacity="0.08" />
      <circle cx="98" cy="98" r="64" fill="#0BB8A5" />
      <rect x="132" y="90" width="34" height="16" rx="8" fill="#0A9E8E" />
      <circle cx="98" cy="98" r="47" fill="#0A9E8E" />
      <circle cx="98" cy="98" r="42" fill="#FFFFFF" />
      <circle cx="98" cy="98" r="37" fill="#B07A45" />
      {/* a rosetta: heart on top, curved bands below, the pour line through them */}
      <g fill="#F4E6D0">
        <path d="M76 124Q98 102 120 124Q98 112 76 124Z" />
        <path d="M79 114Q98 96 117 114Q98 105.0 79 114Z" />
        <path d="M83 105Q98 91 113 105Q98 98.0 83 105Z" />
        <path d="M98 94C90 88 86 81 90 76C93 72 97 74 98 77C99 74 103 72 106 76C110 81 106 88 98 94Z" />
      </g>
      <path d="M98 86V126" stroke="#F4E6D0" strokeWidth="2" strokeLinecap="round" />
      {/* peanut cookie */}
      <circle cx="160" cy="160" r="21" fill="#C98545" />
      <g fill="#7A3E22">
        <ellipse cx="152" cy="154" rx="3.6" ry="2.6" transform="rotate(20 152 154)" />
        <ellipse cx="166" cy="152" rx="3.6" ry="2.6" transform="rotate(-30 166 152)" />
        <ellipse cx="160" cy="166" rx="3.6" ry="2.6" transform="rotate(60 160 166)" />
        <ellipse cx="170" cy="166" rx="3" ry="2.2" />
        <ellipse cx="150" cy="166" rx="3" ry="2.2" transform="rotate(40 150 166)" />
      </g>
      {/* two sugar sachets, two colours, unlabelled */}
      <rect x="38" y="148" width="44" height="22" rx="3" transform="rotate(-24 60 159)" fill="#FFFFFF" />
      <rect x="62" y="166" width="44" height="22" rx="3" transform="rotate(-8 84 177)" fill="#9A6136" />
    </svg>
  );
}
