import Container from "@/components/Container";
import { footer, shop, visit } from "@/content";

export default function Footer() {
  return (
    <footer className="ground-arang">
      <Container className="footer-row t-small">
        <span className="footer-name">{shop.name}</span>
        <span>{shop.addressShort}</span>
        <span className="tnum">{visit.hoursLine}</span>
        <a href={shop.mapsHref} target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center min-h-11">
          {footer.source}
        </a>
      </Container>
    </footer>
  );
}
