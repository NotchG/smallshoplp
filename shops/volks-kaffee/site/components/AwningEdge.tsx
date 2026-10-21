import { C } from "@/lib/palette";

// The awning's scalloped valance. Drawn with an SVG <pattern> in user space, so each scallop
// keeps its 28px shape at any width (never stretched). Used exactly twice: hero and footer.
export default function AwningEdge({ id, className = "" }: { id: string; className?: string }) {
  return (
    <svg
      className={`pointer-events-none block w-full ${className}`}
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width="28" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 0H28V1A14 14 0 0 1 0 1Z" fill={C.awning} />
          <path d="M1.5 1.5A12.5 12.5 0 0 0 26.5 1.5" fill="none" stroke={C.piring} strokeOpacity="0.32" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="16" fill={`url(#${id})`} />
    </svg>
  );
}
