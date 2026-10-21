import { footer, shop } from "@/content";
import Container from "@/components/Container";
import UisBand from "@/components/UisBand";

export default function Footer() {
  return (
    <footer className="site-footer ground-tinta">
      <UisBand />
      <Container className="t-small footer-inner">
        <ul>
          <li>{shop.name}</li>
          <li>{shop.addressShort}</li>
          <li>{shop.hours.headline}</li>
          <li>{footer.source}</li>
        </ul>
      </Container>
    </footer>
  );
}
