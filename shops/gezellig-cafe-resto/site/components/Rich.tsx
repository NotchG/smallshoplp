import { Fragment } from "react";

// Renders copy from content.ts, turning _dutch words_ into Delft italics marked lang="nl".
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/_([^_]+)_/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} lang="nl" className="nl">
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
