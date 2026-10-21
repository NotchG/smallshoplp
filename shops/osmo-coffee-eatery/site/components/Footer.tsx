import Container from "@/components/Container";
import { footer, shop } from "@/content";

// The lit sign at night, without the glow. The wordmark is decorative next to visible text.
export default function Footer() {
  return (
    <footer className="site-footer on-dark">
      <Container>
        <div className="grid-12 footer-inner">
          <p className="footer-mark wordmark t-display track-mark" aria-hidden="true">
            {shop.shortName}
          </p>
          <div className="footer-text">
            <p>{footer.line}</p>
            <p className="t-small footer-draft">{footer.draft}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
