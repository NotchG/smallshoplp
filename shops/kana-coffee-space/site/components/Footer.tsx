import Container from "@/components/Container";
import { mock } from "@/lib/mockup";
import { footer, shop } from "@/content";

export default function Footer() {
  return (
    <footer className="ground-steel py-14 md:py-16">
      <Container className="grid-12 gap-y-8">
        <div className="lg:col-span-4">
          <p aria-label={shop.name} {...mock(shop.wordmarkMockup)}>
            <span className="script t-head block text-ochre">{shop.wordmark}</span>
            <span className="caps mt-1 block">{shop.caps}</span>
          </p>
        </div>
        <div className="lg:col-span-4">
          <address className="not-italic">
            <span className="block">{shop.street}</span>
            <span className="block">{shop.district}</span>
          </address>
          <p className="mt-3">{shop.hours.label}</p>
          <a
            className="text-link"
            href={shop.mapsUrl}
            target="_blank"
            rel="noopener"
            aria-label="Buka di Google Maps (tab baru)"
          >
            Buka di Google Maps
          </a>
        </div>
        <div className="lg:col-span-4">
          <p className="t-small max-w-[30ch]">{footer.draftNote}</p>
        </div>
      </Container>
    </footer>
  );
}
