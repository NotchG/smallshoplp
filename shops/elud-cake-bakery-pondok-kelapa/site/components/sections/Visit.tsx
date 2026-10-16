import { actions, shop, visit } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SignPlaque from "@/components/SignPlaque";
import ButtonLink from "@/components/ButtonLink";
import { ChatIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export default function Visit() {
  const hid = `${visit.id}-judul`;
  return (
    <section id={visit.id} aria-labelledby={hid} className="ground-ink section">
      <Container>
        <Reveal>
          <SignPlaque id={hid}>{visit.heading}</SignPlaque>
          <div className="after-plaque grid gap-y-10 gap-x-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:col-start-8">
              <dl className="grid gap-y-5">
                <div>
                  <dt className="t-small font-semibold text-lemon">{visit.labels.address}</dt>
                  <dd className="t-body mt-1 measure">{shop.address}</dd>
                </div>
                <div>
                  <dt className="t-small font-semibold text-lemon">{visit.labels.hours}</dt>
                  <dd className="t-body mt-1">{shop.hours}</dd>
                </div>
                <div>
                  <dt className="t-small font-semibold text-lemon">{visit.labels.phone}</dt>
                  <dd className="t-body">
                    <a href={shop.phoneHref} className="inline-flex min-h-12 items-center underline decoration-2">
                      {shop.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={shop.directionsUrl} external icon={<PinIcon />}>
                  {actions.directions}
                </ButtonLink>
                <ButtonLink href={shop.phoneHref} variant="secondary" icon={<PhoneIcon />}>
                  {actions.call}
                </ButtonLink>
                <ButtonLink
                  href={shop.whatsapp.href}
                  external
                  variant="secondary"
                  icon={<ChatIcon />}
                  {...mock(shop.whatsapp.mockup)}
                >
                  {shop.whatsapp.text}
                </ButtonLink>
              </div>
              <p className="t-small mt-5" {...mock(shop.instagram.mockup)}>
                {shop.instagram.text}
              </p>
            </div>
            <div className="lg:col-span-7 lg:row-start-1 lg:col-start-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-tray text-ink md:aspect-video lg:aspect-[4/3]">
                <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <PinIcon />
                  <p className="t-small font-semibold">{visit.mapLoading}</p>
                </div>
                <iframe
                  src={shop.mapEmbedUrl}
                  title={visit.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
