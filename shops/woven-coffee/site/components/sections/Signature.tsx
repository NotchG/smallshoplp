import { products, shop, signature } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BoxButton from "@/components/BoxButton";
import LabelBox from "@/components/LabelBox";
import BottleKopiEnak from "@/components/drawings/BottleKopiEnak";
import GlassIceVietnamese from "@/components/drawings/GlassIceVietnamese";

// Kopi Enak on the pine field: copy beside a shelf holding the bottle and the Ice Vietnamese,
// each name boxed like their label, with its price directly below.
export default function Signature() {
  const { kopiEnak, iceVietnamese } = products;
  return (
    <section className="g-pinus section" aria-labelledby="kopi-enak">
      <Container>
        <Reveal className="grid-page gap-y-12 lg:items-start">
          <div className="md:col-span-2 lg:col-span-5 lg:pt-6">
            <h2 id="kopi-enak" className="t-head">
              {signature.heading}
            </h2>
            <div className="mt-5 space-y-3 measure">
              {signature.body.map((p) => (
                <p key={p.text} className="t-body" {...mock(p.mockup)}>
                  {p.text}
                </p>
              ))}
            </div>
            <p className="t-small text-muted mt-5 measure" {...mock(signature.spellingNote.mockup)}>
              {signature.spellingNote.text}
            </p>
            <BoxButton
              href={shop.whatsapp.href}
              variant="outline-dark"
              external
              mockup={shop.whatsapp.mockup}
              className="mt-7"
            >
              {signature.orderCta}
            </BoxButton>
          </div>

          <ul className="products md:col-span-2 lg:col-start-6 lg:col-span-7" aria-label="Produk andalan">
            <li className="product">
              <figure className="product__fig" {...mock(kopiEnak.drawingMockup)}>
                <BottleKopiEnak label={kopiEnak.drawingAlt} className="product__art" />
                <div className="shelf" aria-hidden="true" />
              </figure>
              <LabelBox name={kopiEnak.name} className="product__text">
                <ul className="t-body price-list">
                  {kopiEnak.sizes.map((s) => (
                    <li key={s.label} {...mock(s.mockup)}>
                      <span className="font-bold">{s.label}</span>
                      {s.price ? <span> · {s.price}</span> : <span className="text-muted"> · {s.note}</span>}
                    </li>
                  ))}
                </ul>
              </LabelBox>
            </li>
            <li className="product">
              <figure className="product__fig" {...mock(iceVietnamese.drawingMockup)}>
                <GlassIceVietnamese label={iceVietnamese.drawingAlt} className="product__art" />
                <div className="shelf" aria-hidden="true" />
              </figure>
              <LabelBox name={iceVietnamese.name} className="product__text">
                <p className="t-body font-bold" {...mock(iceVietnamese.price.mockup)}>
                  {iceVietnamese.price.text}
                </p>
                <p className="t-small text-muted">{iceVietnamese.note.text}</p>
              </LabelBox>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
