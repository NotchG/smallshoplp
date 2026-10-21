import { hero, hoursSummary, shop, ui } from "@/content";
import { mock } from "@/lib/mockup";
import ActionButton from "./ActionButton";
import Container from "./Container";
import CrateBand from "./CrateBand";

// Recognise the shop, see it's open, act. Text never animates; the crate below carries the
// signature moment.
export default function Hero() {
  return (
    <header className="overflow-hidden">
      <Container className="grid-12 gap-y-5 pt-6 pb-7 md:pt-12 md:pb-10 lg:pt-16 lg:pb-12">
        <div className="lg:col-span-8">
          <h1 className="font-display t-display text-oranye-label" style={{ letterSpacing: "-0.01em" }}>
            {shop.nameScript}{" "}
            <span className="hero-suffix font-body font-extrabold text-biru-krat">{shop.nameSuffix}</span>
          </h1>
          <p className="t-lead mt-5 max-w-[26ch] font-semibold" {...mock(hero.line.mockup)}>
            {hero.line.text}
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 lg:self-end">
          <p className="t-body">
            <strong className="font-extrabold">{hoursSummary.openToday}</strong>{" "}
            <span className="font-extrabold text-biru-krat">{hoursSummary.time}</span>
            <span aria-hidden="true"> · </span>
            {hoursSummary.everyday}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ActionButton
              href={shop.whatsappHref.text}
              mockup={shop.whatsappHref.mockup}
              icon="whatsapp"
              external
            >
              {ui.pesanWhatsapp}
            </ActionButton>
            <ActionButton href={shop.mapsUrl} variant="secondary" icon="pin" external>
              {ui.petunjukArah}
            </ActionButton>
          </div>
          <p className="t-body">
            {ui.atauTelepon}{" "}
            <a href={shop.phoneHref} className="inline-flex min-h-11 items-center font-extrabold text-biru-krat underline">
              {shop.phone}
            </a>
          </p>
        </div>
      </Container>
      <CrateBand />
    </header>
  );
}
