// The practical reasons to stay: name at lead/700, a one-line note at body. No icons. 2×2 at ≥768px.
export default function Amenities({ items }: { items: { name: string; note: string }[] }) {
  return (
    <ul className="amenities">
      {items.map((a) => (
        <li key={a.name}>
          <p className="t-lead font-bold">{a.name}</p>
          <p className="t-body amenity-note">{a.note}</p>
        </li>
      ))}
    </ul>
  );
}
