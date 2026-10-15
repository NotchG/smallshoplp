import { Fragment, type ReactNode } from "react";

// Wraps runs of figures (10, 10.00–21.00, 0851-8337-5752) in <span class="num"> so text set in
// Marcellus keeps legible lining figures from Hanken Grotesk.
export function withNums(text: string): ReactNode {
  const parts = text.split(/(\d[\d.,:–\-]*\d|\d)/g);
  return parts.map((p, i) =>
    /^\d/.test(p) ? (
      <span key={i} className="num">
        {p}
      </span>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}
