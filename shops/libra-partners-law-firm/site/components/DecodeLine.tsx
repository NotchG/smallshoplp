import { decode, decodePlain } from "@/content";

// The signature line: L-I-B-R-A stand first; the rest of the emblem's phrase fills in
// around them, word by word (CSS keyframes in globals.css, no JS). Screen readers get the
// plain phrase once; the decorated copy is aria-hidden.
export default function DecodeLine({ className = "" }: { className?: string }) {
  return (
    <p className={`font-display ${className}`} data-check>
      <span aria-hidden="true">
        {decode.map((word, w) => (
          <span key={w}>
            <span className="dl-word">
              {word.map((seg, s) =>
                seg.i ? (
                  <b key={s} className="dl-i">
                    {seg.t}
                  </b>
                ) : (
                  <span
                    key={s}
                    className="dl-r"
                    style={{ "--w": w + 1 } as React.CSSProperties}
                  >
                    {seg.t}
                  </span>
                ),
              )}
            </span>
            {w < decode.length - 1 ? " " : null}
          </span>
        ))}
      </span>
      {/* Clipped by sr-only; opacity 0 also keeps the layout check from counting it as visible text.
          Opacity does not remove it from the accessibility tree. */}
      <span className="sr-only opacity-0">{decodePlain}</span>
    </p>
  );
}
