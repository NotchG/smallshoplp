import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import TileBand from "@/components/TileBand";
import { IconArrow } from "@/components/icons";
import { contact, footer, shop } from "@/content";
import { mock } from "@/lib/mockup";

const HREF = { wa: shop.whatsapp.text, tel: shop.tel, map: shop.mapsUrl };

// Hubungi kami + footer (malam). Three big actions, then the courtyard floor again.
export default function Contact() {
  return (
      <section id="hubungi" className="on-malam section pt-0" aria-labelledby="hubungi-title">
        <Container>
          <Reveal className="border-t border-redup/25 pt-16 md:pt-20">
            <h2 id="hubungi-title" className="t-head">
              {contact.title}
            </h2>
            <p className="t-lead mt-3 text-redup" {...mock(contact.signoff.mockup)}>
              {contact.signoff.text}
            </p>
            <ul className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {contact.tiles.map((t) => (
                <li key={t.key} className={t.key === "map" ? "md:col-span-2 lg:col-span-1" : undefined}>
                  <a
                    className="tile"
                    href={HREF[t.key]}
                    {...(t.key === "tel" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    {...mock(t.mockup)}
                  >
                    <span className="t-small text-redup">{t.label}</span>
                    <span className="t-lead t-num flex items-center gap-3 font-semibold whitespace-nowrap">
                      {t.value}
                      <IconArrow className="tile-arrow shrink-0" size={22} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
  );
}

export function Footer() {
  return (
      <footer className="on-malam">
        <Container className="t-small flex flex-col gap-1 pb-8 text-redup md:flex-row md:justify-between">
          <p>{footer.line}</p>
          <p>{footer.draft}</p>
        </Container>
        <TileBand id="floor-footer" />
      </footer>
  );
}
