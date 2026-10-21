import { footer, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "./Container";

export default function SiteFooter() {
  const link = "inline-flex min-h-11 items-center underline underline-offset-4 decoration-2 hover:decoration-kuning";
  return (
    <footer className="wall-malam t-small">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display t-body leading-snug">D’rooftop & Garage Brew House</p>
            <p className="mt-2 text-tembok/85">{shop.address}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-widest">Jam buka</p>
            <p className="mt-2 t-body tabular">{visit.hoursLine.days} <span className="nowrap">{visit.hoursLine.time}</span></p>
            <p className="text-tembok/85">{shop.hoursNote}</p>
          </div>
          <div>
            <p className="t-body tabular">
              <a className={link} href={shop.tel}>{shop.phone}</a>
            </p>
            <p className="flex flex-wrap gap-x-4">
              <a className={link} href={shop.whatsapp.url} target="_blank" rel="noopener noreferrer" {...mock(shop.whatsapp.mockup)}>
                {footer.links.whatsapp}
              </a>
              <a className={link} href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
                {footer.links.directions}
              </a>
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-tembok/20 pt-6 text-tembok/85">{footer.draft}</p>
      </Container>
    </footer>
  );
}
