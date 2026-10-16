// A section heading drawn as one of Elud's hanging shelf signs: white plaque, brick border,
// two wires (decorative). The h2 is the real heading; sections are labelled by its id.
export default function SignPlaque({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="plaque-wrap">
      <span aria-hidden="true" className="plaque-wire" style={{ left: "20%" }} />
      <span aria-hidden="true" className="plaque-wire" style={{ left: "80%" }} />
      <h2 id={id} className="plaque">
        {children}
      </h2>
    </div>
  );
}
