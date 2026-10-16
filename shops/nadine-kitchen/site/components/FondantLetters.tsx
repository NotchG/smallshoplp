// Fondant name letters: chunky capitals, one colour per letter (Strawberry, Laut, Grape),
// with a fondant edge. Used in exactly two places: the hero name and the order plaque.
// Always aria-hidden: the parent carries the readable text.

export function letterSpans(word: string, offset = 0, placeholder = false) {
  return [...word.toUpperCase()].map((ch, i) => (
    <span
      key={`${i}-${ch}`}
      aria-hidden="true"
      data-c={(offset + i) % 3}
      className={`fondant-letter${placeholder ? " is-placeholder" : ""}`}
    >
      {ch === " " ? " " : ch}
    </span>
  ));
}

export function FondantWord({
  text,
  offset = 0,
  placeholder = false,
  className = "",
}: {
  text: string;
  offset?: number;
  placeholder?: boolean;
  className?: string;
}) {
  return (
    <span className={`fondant-word ${className}`} aria-hidden="true">
      {letterSpans(text, offset, placeholder)}
    </span>
  );
}
