import {
  breads,
  copy,
  flavours,
  hoursSummary,
  orders,
  praise,
  shop,
  treats,
  ui,
} from "@/content";
import { mock } from "@/lib/mockup";
import ActionButton from "./ActionButton";
import Container from "./Container";
import HoursTable from "./HoursTable";
import MapEmbed from "./MapEmbed";
import OrderSign from "./OrderSign";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import SlotStrip from "./SlotStrip";

// ---------- Roti kami ----------
export function RotiKami() {
  return (
    <section id="roti" aria-labelledby="roti-title" className="section">
      <Container>
        <Reveal className="grid-12 gap-y-8 lg:gap-y-10">
          <div className="md:col-span-8 lg:col-span-6">
            <h2 id="roti-title" className="t-head h-script text-oranye-label">
              {ui.headings.roti}
            </h2>
            <p className="t-lead mt-4 font-semibold" {...mock(copy.rotiIntro.mockup)}>
              {copy.rotiIntro.text}
            </p>
          </div>
          <ProductCard product={breads[0]} variant="featured" className="md:col-span-6 md:row-start-2" />
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7 md:row-start-2 md:justify-between">
            <ProductCard product={breads[1]} variant="row" />
            <ProductCard product={breads[2]} variant="row" />
          </div>
          <div className="t-body">
            <span className="font-extrabold">{ui.rasaLain}:</span>{" "}
            <ul className="dot-list">
              {flavours.map((f) => (
                <li key={f.text} {...mock(f.mockup)}>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ---------- Kue & camilan (kuning field) ----------
export function KueCamilan() {
  return (
    <section aria-labelledby="kue-title" className="section bg-kuning-keju">
      <Container>
        <Reveal>
          <h2 id="kue-title" className="t-head h-script text-biru-krat">
            {ui.headings.kue}
          </h2>
          <div className="grid-12 mt-8 gap-y-12 md:mt-10">
            <ProductCard product={treats[0]} variant="round" className="md:col-span-6 md:justify-self-center" />
            <ProductCard product={treats[1]} variant="round" className="md:col-span-6 md:mt-16 md:justify-self-center" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ---------- Pesan untuk acara & reseller (biru field) ----------
export function Pesan() {
  return (
    <section aria-labelledby="pesan-title" className="on-biru bg-biru-krat text-putih-ubin">
      <SlotStrip variant="edge" id="slots-edge" />
      <div className="section pt-14 md:pt-20">
        <Container>
          <Reveal className="grid-12 gap-y-8">
            <div className="lg:col-span-5 lg:row-start-1">
              <h2 id="pesan-title" className="t-head h-script text-kuning-keju" {...mock(orders.heading.mockup)}>
                {orders.heading.text}
              </h2>
              <p className="t-body mt-4 max-w-[40ch] text-krim" {...mock(orders.intro.mockup)}>
                {orders.intro.text}
              </p>
            </div>
            <ul className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
              {orders.rows.map((row, i) => (
                <li key={row.title.text} className="flex flex-col gap-6">
                  {i > 0 && <SlotStrip variant="divider" id={`slots-div-${i}`} />}
                  <div>
                    <h3 className="t-lead font-extrabold text-putih-ubin" {...mock(row.title.mockup)}>
                      {row.title.text}
                    </h3>
                    <p className="t-body mt-1 text-krim" {...mock(row.line.mockup)}>
                      {row.line.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="lg:col-span-5 lg:row-start-2 lg:self-start">
              <ActionButton
                href={orders.whatsappHref.text}
                mockup={orders.whatsappHref.mockup}
                variant="onBlue"
                icon="whatsapp"
                external
              >
                {ui.tanyaWhatsapp}
              </ActionButton>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

// ---------- Kata mereka ----------
export function KataMereka() {
  return (
    <section aria-labelledby="kata-title" className="section">
      <Container>
        <Reveal className="mx-auto max-w-[720px] text-center">
          <h2 id="kata-title" className="t-head h-script text-oranye-label">
            {ui.headings.kata}
          </h2>
          <p className="t-lead mt-4">
            <strong className="font-extrabold text-biru-krat">{shop.rating}</strong> {ui.ratingFrom}{" "}
            {shop.ratingCount} {ui.ratingSuffix}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {praise.map((p) => (
              <li key={p.text} className="t-lead font-semibold" {...mock(p.mockup)}>
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

// ---------- Kunjungi kami ----------
export function Kunjungi() {
  return (
    <section aria-labelledby="kunjungi-title" className="section pt-0">
      <Container>
        <Reveal>
          <h2 id="kunjungi-title" className="t-head h-script text-oranye-label">
            {ui.headings.kunjungi}
          </h2>
          <div className="grid-12 mt-6 gap-y-8 md:mt-10">
            <div className="order-2 md:order-1 md:col-span-7">
              <MapEmbed />
            </div>
            <div className="order-1 flex flex-col items-start gap-6 md:order-2 md:col-span-5 lg:col-start-8">
              <address className="t-lead font-semibold not-italic">
                {shop.addressLines[0]}
                <br />
                {shop.addressLines[1]}
                <br />
                {shop.addressLines[2]}
              </address>
              <ActionButton href={shop.mapsUrl} variant="secondary" icon="pin" external>
                {ui.petunjukArah}
              </ActionButton>
              <HoursTable />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ---------- Hubungi kami ----------
export function Hubungi() {
  return (
    <section aria-labelledby="hubungi-title" className="section pt-0">
      <Container>
        <Reveal className="grid-12 items-center gap-y-10">
          <div className="lg:col-span-5">
            <h2 id="hubungi-title" className="t-head h-script text-oranye-label">
              {ui.headings.hubungi}
            </h2>
            <p className="t-lead mt-4 max-w-[22ch] font-semibold" {...mock(copy.hubungiLine.mockup)}>
              {copy.hubungiLine.text}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionButton
                href={shop.whatsappHref.text}
                mockup={shop.whatsappHref.mockup}
                icon="whatsapp"
                external
              >
                {ui.whatsapp}
              </ActionButton>
              <ActionButton href={shop.phoneHref} variant="secondary" icon="phone">
                {ui.telepon} {shop.phone}
              </ActionButton>
            </div>
          </div>
          <div className="w-full max-w-[480px] lg:col-span-6 lg:col-start-7 lg:justify-self-end">
            <OrderSign />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// ---------- Footer ----------
export function Footer({ draft }: { draft: string }) {
  return (
    <footer className="on-biru bg-tinta text-krim">
      <Container className="py-12 md:py-16">
        <div className="grid-12 gap-y-4">
          <p className="t-lead font-extrabold md:col-span-4">{shop.name}</p>
          <p className="md:col-span-4">
            {shop.addressLines[0]}
            <br />
            {shop.addressLines[1]}, {shop.addressLines[2]}
          </p>
          <p className="md:col-span-4">
            {hoursSummary.footer}
            <br />
            <a href={shop.phoneHref} className="inline-flex min-h-11 items-center underline">
              {shop.phone}
            </a>
          </p>
        </div>
        <p className="t-small mt-10 border-t border-krim/25 pt-5">{draft}</p>
      </Container>
    </footer>
  );
}
