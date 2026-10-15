import Container from "@/components/Container";
import { footer } from "@/content";

// Small text on the wall.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <p className="t-small">
          {footer.parts.map((part) => (
            <span key={part}>{part}</span>
          ))}
        </p>
      </Container>
    </footer>
  );
}
