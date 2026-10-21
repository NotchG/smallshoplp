// Flat drawings of the drinks from the shop's own photos. One shared 200×240 viewBox, so every
// drink stands on the counter at the same scale. Flat fills plus a 2px arang outline.
const C = {
  arang: "#1C1D1F",
  putih: "#F7F4EE",
  daun: "#8C9A5B",
  kopi: "#4A2A18",
  krema: "#B87A3E",
  susu: "#EFE6D2",
};
const line = { stroke: C.arang, strokeWidth: 2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 240" role="img" aria-label={label} className="block w-full h-auto">
      {children}
    </svg>
  );
}

// White cup in 3/4 view: olive-green surface with a white rosetta, on a saucer.
export function GreenTeaLatte({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <ellipse cx="96" cy="226" rx="80" ry="11" fill={C.putih} {...line} />
      <ellipse cx="96" cy="223" rx="40" ry="5" fill="none" {...line} />
      {/* handle */}
      <path
        d="M150 160c18-6 34 2 34 18s-16 26-40 26l2-10c16 0 27-6 27-16s-10-13-24-9z"
        fill={C.putih}
        {...line}
      />
      {/* cup body */}
      <path d="M34 150c0 44 22 70 62 70s62-26 62-70z" fill={C.putih} {...line} />
      {/* rim and green surface */}
      <ellipse cx="96" cy="150" rx="62" ry="16" fill={C.putih} {...line} />
      <ellipse cx="96" cy="151" rx="54" ry="12" fill={C.daun} />
      {/* rosetta */}
      <path d="M66 152c8-11 52-11 60 0-8 9-52 9-60 0z" fill={C.susu} />
      <path d="M76 151c6-5 34-5 40 0M84 152c4-3 20-3 24 0M70 153c8 4 44 4 52 0" fill="none" stroke={C.daun} strokeWidth="2" strokeLinecap="round" />
      <path d="M96 143v16" stroke={C.daun} strokeWidth="2" strokeLinecap="round" />
    </Frame>
  );
}

// White V60 cone with its paper filter, on a glass server of dark coffee.
export function PourOver({ label }: { label: string }) {
  return (
    <Frame label={label}>
      {/* server handle */}
      <path d="M156 158c20 0 26 14 26 26s-6 26-26 26v-10c10 0 15-6 15-16s-5-16-15-16z" fill={C.putih} {...line} />
      {/* glass server */}
      <path d="M50 236h100c8 0 12-6 12-14v-62c0-10-8-18-18-18H56c-10 0-18 8-18 18v62c0 8 4 14 12 14z" fill={C.putih} fillOpacity="0.55" />
      {/* coffee */}
      <path d="M39 190h122v32c0 7-4 12-11 12H50c-7 0-11-5-11-12z" fill={C.kopi} />
      <path d="M50 236h100c8 0 12-6 12-14v-62c0-10-8-18-18-18H56c-10 0-18 8-18 18v62c0 8 4 14 12 14z" fill="none" {...line} />
      {/* dripper base */}
      <rect x="52" y="130" width="96" height="12" fill={C.putih} {...line} />
      {/* paper filter */}
      <path d="M48 56l8-14h88l8 14z" fill={C.susu} {...line} />
      {/* cone */}
      <path d="M40 56h120l-40 74H80z" fill={C.putih} {...line} />
      <path d="M62 66l24 54M100 66v54M138 66l-24 54" fill="none" {...line} />
      {/* cone handle */}
      <path d="M150 74c22-2 30 10 28 22s-14 18-30 16l4-10c10 1 15-2 16-7 1-6-4-11-15-11z" fill={C.putih} {...line} />
    </Frame>
  );
}

// Small faceted glass: condensed milk under espresso and crema, on a white saucer.
export function EspressoSusu({ label }: { label: string }) {
  return (
    <Frame label={label}>
      <ellipse cx="100" cy="226" rx="74" ry="11" fill={C.putih} {...line} />
      <ellipse cx="100" cy="223" rx="34" ry="5" fill="none" {...line} />
      {/* layers inside the glass */}
      <path d="M66 196h68l-3 24H69z" fill={C.susu} />
      <path d="M64 150h72l-2 46H66z" fill={C.kopi} />
      <path d="M63 136h74l-1 14H64z" fill={C.krema} />
      {/* glass outline, rim and facets */}
      <path d="M60 124h80l-8 98H68z" fill={C.putih} fillOpacity="0.25" {...line} />
      <path d="M60 124h80" {...line} />
      <path d="M82 168l2 54M100 168v54M118 168l-2 54M64 168h72" fill="none" stroke={C.arang} strokeWidth="2" strokeOpacity="0.55" />
      {/* spoon */}
      <path d="M146 214l26-16" {...line} />
      <ellipse cx="178" cy="194" rx="8" ry="4" transform="rotate(-30 178 194)" fill={C.putih} {...line} />
    </Frame>
  );
}
