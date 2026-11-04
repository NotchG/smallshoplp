import { Fragment } from "react";

// Keeps hyphenated words (utang-piutang, surat-surat) on one line instead of breaking at the hyphen.
export function keepWhole(text: string) {
  return text.split(/(\S*-\S*)/).map((part, i) =>
    part.includes("-") && !/\s/.test(part) ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
