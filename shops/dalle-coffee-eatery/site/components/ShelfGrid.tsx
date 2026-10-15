import { withNums } from "@/lib/nums";

// The four work facts on a black-steel shelf unit: 2px rails and uprights, like the
// syrup-bottle shelves behind the bar. 2 × 2 from 768px, stacked on phones.
export default function ShelfGrid({
  cells,
}: {
  cells: { title: string; text: string; mockup?: boolean }[];
}) {
  return (
    <div className="shelf">
      <span className="shelf-post l" aria-hidden="true" />
      <span className="shelf-post m" aria-hidden="true" />
      <span className="shelf-post r" aria-hidden="true" />
      {cells.map((c) => (
        <div key={c.title} className="shelf-cell" {...(c.mockup ? { "data-mockup": "" } : {})}>
          <h3 className="t-lead font-display whitespace-nowrap">{withNums(c.title)}</h3>
          <p className="t-body muted-plaster mt-2">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
