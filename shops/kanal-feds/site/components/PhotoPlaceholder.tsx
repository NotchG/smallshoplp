import { mock } from "@/lib/mockup";

// The terrace's crazy-paving floor as one seamless tile (periodic Voronoi), used as the
// placeholder texture. Rendered once per page by <PavingDefs />.
const PAVING =
  "M23 59L-6 72L-14 67L-15 66L14 15L51 23ZM263 59L234 72L226 67L225 66L254 15L291 23ZM41 111L21 117L7 108L-6 72L23 59ZM281 111L261 117L247 108L234 72L263 59ZM52 192L22 184L11 149L21 117L41 111L57 111L68 122L78 175ZM51 23L14 15L-15 -2L-3 -40L22 -56L52 -48L55 18L52 23ZM51 263L14 255L-15 238L-3 200L22 184L52 192L55 258L52 263ZM291 23L254 15L225 -2L237 -40L262 -56L292 -48L295 18L292 23ZM291 263L254 255L225 238L237 200L262 184L292 192L295 258L292 263ZM70 52L52 23L55 18L113 -1L124 5L141 49L140 50ZM70 292L52 263L55 258L113 239L124 245L141 289L140 290ZM128 88L131 113L68 122L57 111L70 78ZM78 175L68 122L131 113L145 129L129 170L103 181ZM55 18L52 -48L78 -65L103 -59L113 -1ZM55 258L52 192L78 175L103 181L113 239ZM172 49L141 49L124 5L170 -25L202 5L187 40ZM172 289L141 289L124 245L170 215L202 245L187 280ZM131 113L128 88L140 50L141 49L172 49L186 113L185 121L183 123L145 129ZM168 200L129 170L145 129L183 123L200 154L198 173ZM124 5L113 -1L103 -59L129 -70L168 -40L170 -25ZM124 245L113 239L103 181L129 170L168 200L170 215ZM14 15L-15 66L-53 40L-38 5L-15 -2ZM14 255L-15 306L-53 280L-38 245L-15 238ZM254 15L225 66L187 40L202 5L225 -2ZM254 255L225 306L187 280L202 245L225 238ZM-14 67L-6 72L7 108L-55 121L-54 113ZM226 67L234 72L247 108L185 121L186 113ZM11 149L22 184L-3 200L-42 173L-40 154ZM251 149L262 184L237 200L198 173L200 154ZM237 -40L225 -2L202 5L170 -25L168 -40L198 -67ZM237 200L225 238L202 245L170 215L168 200L198 173ZM225 66L226 67L186 113L172 49L187 40ZM57 111L41 111L23 59L51 23L52 23L70 52L70 78ZM128 88L70 78L70 52L140 50ZM7 108L21 117L11 149L-40 154L-57 123L-55 121ZM247 108L261 117L251 149L200 154L183 123L185 121Z";

export function PavingDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="paving" patternUnits="userSpaceOnUse" width="240" height="240">
          <path d={PAVING} fill="none" stroke="#5CBF98" strokeOpacity="0.28" strokeWidth="2" />
        </pattern>
      </defs>
    </svg>
  );
}

// palm-2 panel, crazy-paving pattern, label top-left inside. Stands in for the owner's photo.
export default function PhotoPlaceholder({
  label,
  alt,
  prefix,
  className = "",
  mockup = true,
}: {
  label: string;
  alt: string;
  prefix: string;
  className?: string;
  mockup?: boolean;
}) {
  return (
    <div role="img" aria-label={alt} className={`placeholder ${className}`} {...mock(mockup)}>
      <svg className="placeholder-texture" aria-hidden="true" focusable="false">
        <rect width="100%" height="100%" fill="url(#paving)" />
      </svg>
      <span className="placeholder-label">
        <span className="t-label block text-muted-palm">{prefix}</span>
        <span className="t-label block">{label}</span>
      </span>
    </div>
  );
}
