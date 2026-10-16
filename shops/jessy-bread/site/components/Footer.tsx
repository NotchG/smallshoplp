import { footer, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "./Container";
import Logotype from "./Logotype";

export default function Footer() {
  return (
    <footer className="on-dark bg-arang text-abu">
      <Container className="grid-12 py-12 md:py-16">
        <div className="lg:col-span-4">
          <Logotype onDark className="t-lead" />
        </div>
        <div className="lg:col-span-4">
          <address className="not-italic">{shop.address}</address>
          <p className="mt-2">{shop.hours}</p>
        </div>
        <div className="lg:col-span-4">
          <p className="font-display" {...mock(shop.tagline.mockup)}>
            {shop.tagline.text}
          </p>
          <p className="t-small mt-2 text-redup-gelap">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
