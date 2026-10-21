import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
import PriceCard from "@/components/PriceCard";
import ProductFigure from "@/components/ProductFigure";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";
import { IconArrowOut, IconDirections } from "@/components/Icons";
import {
  AbonJar,
  BoxStack,
  Pack,
  SoesIllus,
  TelurAsin,
  Tub,
  type AbonVariant,
  type Filling,
  type PackVariant,
  type TubVariant,
} from "@/components/Illustrations";
import { abon, actions, camilan, contact, hero, kotakan, meta, praise, shop, soes, visit } from "@/content";
import { mock } from "@/lib/mockup";

const OTHER_FILLINGS: Filling[] = ["vanila", "cokelat", "durian"];
const JARS: AbonVariant[] = ["pedas", "manis", "sapi"];
const TUBS: TubVariant[] = ["mete", "warna", "bawang", "bulat"];
const PACKS: PackVariant[] = ["brem", "kecik", "tengteng"];

export default function Home() {
  return (
    <>
      <Hero />
      <main id="konten">
        {/* ---------- Soes kami: the star, on the peach box print ---------- */}
        <section id="soes" aria-labelledby="soes-h" className="section bg-kotak-dots">
          <Reveal>
            <Container>
              <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
                  <h2 id="soes-h" className="h-section text-merdeka">
                    {soes.heading}
                  </h2>
                  <p {...mock(soes.lead.mockup)} className="t-lead measure mt-4 font-medium">
                    {soes.lead.text}
                  </p>
                </div>
                <ProductFigure
                  p={soes.star}
                  className="lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:self-center"
                  illusClassName="max-w-[280px] lg:max-w-[420px]"
                >
                  <SoesIllus filling="rum" label={soes.star.alt ?? soes.star.name} />
                </ProductFigure>
                <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
                  <p className="t-body measure">{soes.body.text}</p>
                  <p {...mock(soes.sizes.mockup)} className="t-body measure mt-2">
                    {soes.sizes.text}
                  </p>
                  <PriceCard p={soes.box10} as="p" standalone className="mt-6" />
                </div>
              </div>

              <div {...mock(true)} className="mt-16 lg:mt-24">
                <h3 className="h-group text-merdeka">{soes.othersHeading}</h3>
                <ul className="mt-6 grid grid-cols-3 gap-3 sm:gap-8">
                  {soes.others.map((o, i) => (
                    <li key={o.name}>
                      <ProductFigure p={o} illusClassName="max-w-[180px]">
                        <SoesIllus filling={OTHER_FILLINGS[i]} label={o.alt ?? o.name} />
                      </ProductFigure>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="t-small mt-10 text-merdeka">{meta.illustrationNote}</p>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Abon & telur asin: the wood counter ---------- */}
        <section id="abon" aria-labelledby="abon-h" className="section on-kayu bg-kayu text-kaca">
          <Reveal>
            <Container>
              <div className="grid gap-y-4 lg:grid-cols-12 lg:items-end lg:gap-x-8">
                <h2 id="abon-h" className="h-section text-kotak lg:col-span-5">
                  {abon.heading}
                </h2>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="t-lead measure font-medium">{abon.lead.text}</p>
                  <p className="t-body measure mt-3">{abon.body.text}</p>
                </div>
              </div>
              <ul className="counter mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 lg:mt-16 lg:gap-x-8">
                {abon.jars.map((j, i) => (
                  <li key={j.name}>
                    <ProductFigure p={j} illusClassName="counter-illus h-[170px] sm:h-[200px] lg:h-[300px]">
                      <AbonJar variant={JARS[i]} id={`jar-${JARS[i]}`} label={j.alt ?? j.name} />
                    </ProductFigure>
                  </li>
                ))}
                <li>
                  <ProductFigure p={abon.telur} illusClassName="counter-illus fit-w h-[170px] sm:h-[200px] lg:h-[300px]">
                    <TelurAsin label={abon.telur.alt ?? abon.telur.name} />
                  </ProductFigure>
                </li>
              </ul>
              <div className="shelf mt-8" />
              <p className="t-small mt-6 text-kotak">{meta.illustrationNote}</p>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Camilan & oleh-oleh: the long glass case ---------- */}
        <section id="camilan" aria-labelledby="camilan-h" className="section section-tail bg-kaca">
          <Reveal>
            <Container>
              <div className="grid gap-y-4 lg:grid-cols-12 lg:items-end lg:gap-x-8">
                <h2 id="camilan-h" className="h-section text-merdeka lg:col-span-5">
                  {camilan.heading}
                </h2>
                <p {...mock(camilan.lead.mockup)} className="t-lead measure font-medium lg:col-span-6 lg:col-start-7">
                  {camilan.lead.text}
                </p>
              </div>

              <ul className="counter mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 lg:mt-16 lg:gap-x-8">
                {camilan.tubs.map((t, i) => (
                  <li key={t.name}>
                    <ProductFigure p={t} illusClassName="counter-illus h-[130px] sm:h-[140px] lg:h-[200px]">
                      <Tub variant={TUBS[i]} id={`tub-${TUBS[i]}`} label={t.alt ?? t.name} />
                    </ProductFigure>
                  </li>
                ))}
              </ul>
              <div className="shelf mt-8" />
              <ul className="counter mt-10 grid grid-cols-3 gap-x-3 sm:gap-x-6 lg:gap-x-8">
                {camilan.packs.map((t, i) => (
                  <li key={t.name}>
                    <ProductFigure p={t} illusClassName="counter-illus h-[130px] sm:h-[170px] lg:h-[230px]">
                      <Pack variant={PACKS[i]} id={`pack-${PACKS[i]}`} label={t.alt ?? t.name} />
                    </ProductFigure>
                  </li>
                ))}
              </ul>
              <div className="shelf mt-8" />

              <div className="mt-14 grid gap-y-6 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
                <h3 className="h-group text-merdeka lg:col-span-4">{camilan.kueRotiHeading}</h3>
                <div className="lg:col-span-4">
                  <h4 className="t-body font-bold text-pintu">{camilan.kueLabel}</h4>
                  <ul className="list-rows mt-2">
                    {camilan.kue.map((k) => (
                      <li key={k.name} {...mock(k.mockup)} className="t-body">
                        {k.name}
                      </li>
                    ))}
                  </ul>
                  <p {...mock(camilan.lebaran.mockup)} className="t-body measure mt-5">
                    {camilan.lebaran.text}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="t-body font-bold text-pintu">{camilan.rotiLabel}</h4>
                  <ul className="list-rows mt-2">
                    {camilan.roti.map((r) => (
                      <li key={r.name} {...mock(r.mockup)} className="t-body">
                        {r.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="t-small mt-10 text-merdeka">{meta.illustrationNote}</p>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Pesan kotakan [MOCKUP] ---------- */}
        <section id="kotakan" aria-labelledby="kotakan-h" {...mock(kotakan.mockup)} className="bg-kaca">
          <Container>
            <div className="shelf" />
          </Container>
          <Reveal className="section section-head">
            <Container>
              <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end">
                  <h2 id="kotakan-h" className="h-section text-merdeka">
                    {kotakan.heading}
                  </h2>
                  <p {...mock(kotakan.lead.mockup)} className="t-lead measure mt-4 font-medium">
                    {kotakan.lead.text}
                  </p>
                </div>
                <div className="lg:col-span-6 lg:row-span-2 lg:row-start-1 lg:self-center">
                  <ProductFigure p={kotakan.box10} illusClassName="max-w-[460px]">
                    <BoxStack id="boxes" label={kotakan.alt} />
                  </ProductFigure>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2">
                  <p {...mock(kotakan.body.mockup)} className="t-body measure">
                    {kotakan.body.text}
                  </p>
                  <a href={shop.phoneHref} className="btn btn-primary mt-6">
                    {actions.callToOrder}
                  </a>
                </div>
              </div>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Kata mereka ---------- */}
        <section id="ulasan" aria-labelledby="ulasan-h" className="section bg-kotak">
          <Reveal>
            <Container>
              <h2 id="ulasan-h" className="h-section text-merdeka">
                {praise.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-6">
                <p className="t-lead num font-semibold">{praise.rating}</p>
                <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="link link-on-kotak t-body inline-flex min-h-11 items-center">
                  {actions.reviews}
                  <IconArrowOut />
                </a>
              </div>
              <ul className="mt-10 grid gap-8 lg:grid-cols-3">
                {praise.items.map((p) => (
                  <li key={p.text} className="praise-item t-body measure">
                    {p.text}
                  </li>
                ))}
              </ul>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Kunjungi kami ---------- */}
        <section id="kunjungi" aria-labelledby="kunjungi-h" className="section bg-kaca">
          <Reveal>
            <Container>
              <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:row-start-1">
                  <h2 id="kunjungi-h" className="h-section text-merdeka">
                    {visit.heading}
                  </h2>
                  <address className="t-body measure mt-5 not-italic">{shop.address}</address>
                  <p className="t-body mt-2">{shop.parking.text}</p>
                </div>
                <MapEmbed className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-stretch" />
                <div className="lg:col-span-5 lg:row-start-2">
                  <HoursTable />
                  <a href={shop.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                    <IconDirections />
                    {actions.directions}
                  </a>
                </div>
              </div>
            </Container>
          </Reveal>
        </section>

        {/* ---------- Hubungi kami ---------- */}
        <section id="hubungi" aria-labelledby="hubungi-h" className="section section-close on-kayu bg-kayu text-kaca">
          <Container>
            <div className="grid gap-y-8 lg:grid-cols-12 lg:items-end lg:gap-x-8">
              <div className="lg:col-span-7">
                <h2 id="hubungi-h" className="h-section text-kotak">
                  {contact.heading}
                </h2>
                <p {...mock(contact.lead.mockup)} className="t-lead measure mt-4 font-medium">
                  {contact.lead.text}
                </p>
              </div>
              <ActionButtons
                stack
                directionsFirst={false}
                callLabel={actions.callFull}
                className="lg:col-span-4 lg:col-start-9"
              />
            </div>
          </Container>
        </section>
      </main>

      <footer className="on-kayu bg-kayu text-kaca">
        <Container>
          <div className="shelf" />
          <div className="flex flex-col gap-2 py-10 lg:flex-row lg:flex-wrap lg:items-baseline lg:gap-x-8">
            <p className="font-display t-lead text-kotak">{hero.lockupScript}</p>
            <p className="t-small">{shop.address}</p>
            <p className="t-small num">
              {shop.hours.everyDay} {shop.hours.display}
            </p>
            <p className="t-small">{meta.footerDraft}</p>
            <p className="t-small">{meta.illustrationNote}</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
