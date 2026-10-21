// Paraphrased reviews: no quote marks, no names, no stars. A 1px roster rule above each one.
export default function Praise({ items }: { items: string[] }) {
  return (
    <ul className="praise">
      {items.map((text, i) => (
        <li key={i} className="praise-item">
          <p className="t-lead" {...(i === 0 ? { "data-check": "" } : {})}>
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}
