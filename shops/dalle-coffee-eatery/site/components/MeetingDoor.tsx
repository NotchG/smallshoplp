import { mock } from "@/lib/mockup";

// The arched glass door: a 2px light outline with a transom at the spring of the arch.
// The room facts sit in its rectangular lower part only.
export default function MeetingDoor({
  title,
  facts,
}: {
  title: string;
  facts: { term: string; text: string; mockup?: boolean }[];
}) {
  return (
    <div className="door">
      <span className="door-transom" aria-hidden="true" />
      <div className="door-body">
        <h3 className="t-lead font-display">{title}</h3>
        <dl className="mt-5 space-y-4">
          {facts.map((f) => (
            <div key={f.term} {...mock(f.mockup)}>
              <dt className="t-small muted-walnut">{f.term}</dt>
              <dd className="t-body font-medium">{f.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
