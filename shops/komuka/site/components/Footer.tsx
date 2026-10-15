import Container from "@/components/Container";
import { hoursRows, shop } from "@/content";

// Name, address and hours in one block.
export default function Footer() {
  return (
    <footer className="field-dark bg-jendela text-kapur">
      <Container>
        <div className="footer-block t-small">
          <p className="t-body font-display font-bold tracking-[0.04em]">{shop.name}</p>
          <p className="mt-1">{shop.address}</p>
          <p className="mt-1">
            {hoursRows.map((r, i) => (
              <span key={r.label}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                {r.label} {r.time}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
