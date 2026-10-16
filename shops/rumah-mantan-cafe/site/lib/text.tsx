import { Fragment, type ReactNode } from "react";

// Keeps Indonesian reduplicated words ("rame-rame", "satu-satu") and phone numbers on one line,
// so they never break at the hyphen.
export function nb(text: string): ReactNode {
  return text.split(/(\S+-\S+)/g).map((part, i) =>
    /\S+-\S+/.test(part) ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
