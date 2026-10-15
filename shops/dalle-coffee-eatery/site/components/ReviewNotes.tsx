// Paraphrases of real reviews: no quote marks, no names, no star graphics.
export default function ReviewNotes({ items }: { items: string[] }) {
  return (
    <ul className="notes">
      {items.map((t) => (
        <li key={t}>
          <p className="t-lead font-display">{t}</p>
        </li>
      ))}
    </ul>
  );
}
