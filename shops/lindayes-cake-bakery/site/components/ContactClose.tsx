import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Awning from "@/components/Awning";
import Button from "@/components/Button";
import { IconBag, IconChat, IconPhone, IconPin } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { hero, hours, hubungi, newTab, shop } from "@/content";

// Last chance to act: the awning again, over the charcoal of the sign.
export function ContactClose() {
  return (
    <div className="ground-dark bg-fascia text-glass">
      <Awning id="awning-close" className="bg-glass" />
      <section id="hubungi" aria-labelledby="hubungi-h" className="section">
        <Reveal>
          <Container className="grid-12 items-start gap-y-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 id="hubungi-h" className="t-head font-display">
                {hubungi.heading}
              </h2>
              <p className="t-body mt-4 text-muted-dark">{hubungi.line}</p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`tel:${shop.phoneTel}`} variant="primary-dark" icon={<IconPhone />}>
                  {hubungi.call} {shop.phoneDisplay}
                </Button>
                <Button
                  href={shop.whatsapp.href}
                  variant="secondary"
                  external
                  mockup={shop.whatsapp.mockup}
                  icon={<IconChat />}
                >
                  {shop.whatsapp.label}
                </Button>
                <Button href={shop.directionsHref} variant="secondary" external icon={<IconPin />}>
                  {hero.directions}
                </Button>
              </div>
              <a
                href={shop.tokopedia.href}
                target="_blank"
                rel="noopener"
                aria-label={`${shop.tokopedia.label} ${newTab}`}
                className="text-link t-body mt-3 text-blush"
                {...mock(shop.tokopedia.mockup)}
              >
                <IconBag className="size-5" />
                {shop.tokopedia.label}
              </a>
            </div>
          </Container>
        </Reveal>
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="ground-dark bg-fascia text-muted-dark">
      <Container className="footer-inner t-small grid-12 gap-y-4">
        <p className="t-lead col-span-12 font-display text-sign lg:col-span-3">{shop.name}</p>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <p>{shop.address}</p>
          <p>{hours.label}</p>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 lg:text-right">
          <p>{hubungi.ratingSource}</p>
          <p>{hubungi.draftNote}</p>
        </div>
      </Container>
    </footer>
  );
}
