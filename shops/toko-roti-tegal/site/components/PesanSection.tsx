import Container from "./Container";
import Reveal from "./Reveal";
import ButtonLink from "./ButtonLink";
import KotakKueScene from "./KotakKueScene";
import { mock } from "@/lib/mockup";
import { pesan, shop } from "@/content";

// [MOCKUP] section: snack boxes for events and holiday cookie tins, on gift-box pink.
export default function PesanSection() {
  return (
    <section id="pesan" aria-labelledby="pesan-h" className="section bg-hati" {...mock(pesan.mockup)}>
      <Container>
        <Reveal className="grid items-center gap-x-12 gap-y-8 lg:grid-cols-12">
          <KotakKueScene label={pesan.sceneLabel} className="mx-auto w-full max-w-[340px] md:max-w-[480px] lg:col-span-6 lg:max-w-none" />
          <div className="lg:col-span-6">
            <h2 id="pesan-h" className="t-head">
              {pesan.heading}
            </h2>
            <p className="t-lead serif font-medium mt-6">{pesan.lead}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {pesan.offers.map((o) => (
                <div key={o.title}>
                  <h3 className="t-lead serif font-semibold">{o.title}</h3>
                  <p className="t-body measure mt-1">{o.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href={shop.phoneHref} icon="phone">
                {pesan.cta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
