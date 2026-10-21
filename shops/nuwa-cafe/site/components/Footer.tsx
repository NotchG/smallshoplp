import Container from "@/components/Container";
import RimBand from "@/components/RimBand";
import { footer, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-chalk">
      <RimBand id="rim-footer" />
      <Container className="footer-grid">
        <p className="footer-mark t-tracked t-lead">{shop.name}</p>
        <div className="footer-addr">
          <p>
            {footer.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
          <p className="font-bold">{footer.hoursLine}</p>
        </div>
        <p className="footer-note t-small text-ink-soft">{footer.draftNote}</p>
      </Container>
    </footer>
  );
}
