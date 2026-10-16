import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Logotype from "@/components/Logotype";
import ActionButton from "@/components/ActionButton";
import HeroCake from "@/components/HeroCake";
import CakeCase from "@/components/CakeCase";
import BreadArt from "@/components/BreadArt";
import CupsArt from "@/components/CupsArt";
import FacadeArt from "@/components/FacadeArt";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";
import { mock } from "@/lib/mockup";
import {
  actions,
  breadMore,
  breadSection,
  breads,
  cakeOrder,
  cakeSection,
  cakes,
  contact,
  hero,
  heroCake,
  praise,
  praiseSection,
  shop,
  upstairs,
  visit,
} from "@/content";

export default function Home() {
  return (
    <>
      <main id="konten" tabIndex={-1} className="outline-none">
        {/* ---------- Hero (abu): recognition, hours, the two actions ---------- */}
        <section aria-labelledby="hero-title" className="bg-abu">
          <Container className="grid-12 items-end pt-7 md:pt-12 lg:pt-14">
            <div className="lg:col-span-6 lg:pb-16">
              <Logotype as="h1" id="hero-title" className="t-display" />
              <p className="t-lead mt-4 font-medium md:mt-6">{hero.sub}</p>
              <p className="t-lead mt-1 font-display" {...mock(shop.tagline.mockup)}>
                {shop.tagline.text}
              </p>
              <p className="measure mt-3">{hero.line}</p>
              <p className="pill mt-5">{hero.hours}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ActionButton kind="call" label={actions.call} />
                <ActionButton kind="directions" label={actions.directions} variant="secondary" />
              </div>
            </div>
            <div className="mt-6 lg:col-span-6 lg:mt-0">
              <HeroCake cake={heroCake} />
            </div>
          </Container>
          <div className="hero-band" aria-hidden="true" />
        </section>

        {/* ---------- Kue untuk setiap perayaan (arang): the case ---------- */}
        <section aria-labelledby="kue-title" className="on-dark section bg-arang text-abu">
          <Container>
            <Reveal>
              <div className="grid-12 items-end">
                <h2 id="kue-title" className="t-head font-display lg:col-span-7">
                  {cakeSection.title}
                </h2>
                <p className="t-lead font-medium lg:col-span-5" {...mock(cakeSection.lead.mockup)}>
                  {cakeSection.lead.text}
                </p>
              </div>
              <div className="mt-10 md:mt-14">
                <CakeCase cakes={cakes} />
              </div>
              <p className="t-small mt-6 text-redup-gelap">{cakeSection.note}</p>
              <div className="mt-8 flex max-w-[760px] flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
                <p {...mock(cakeOrder.mockup)}>{cakeOrder.text}</p>
                <ActionButton kind="call" label={actions.order.text} variant="order" mockup={actions.order.mockup} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Roti setiap hari (abu): everyday bread on the rack ---------- */}
        <section aria-labelledby="roti-title" className="section bg-abu">
          <Container>
            <Reveal className="grid-12 items-start lg:grid-rows-[auto_1fr]">
              <div className="lg:col-span-5">
                <h2 id="roti-title" className="t-head font-display">
                  {breadSection.title}
                </h2>
                <p className="t-lead measure mt-4 font-medium">{breadSection.lead}</p>
                <p className="mt-4" {...mock(breadSection.morning.mockup)}>
                  {breadSection.morning.text}
                </p>
              </div>
              <div className="mt-8 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:mt-2">
                <ul className="rack">
                  {breads.map((b) => (
                    <li key={b.art} className="rack-item">
                      <div className="rack-art">
                        <BreadArt kind={b.art} label={b.alt} />
                      </div>
                      <div className="rack-label text-center">
                        <p className="font-bold leading-snug" {...mock(b.name.mockup)}>
                          {b.name.text}
                        </p>
                        {b.price && (
                          <p className="price mt-0.5 text-redup" {...mock(b.price.mockup)}>
                            {b.price.text}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:mt-6">
                <BreadMore />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Makan di lantai dua (madu): the restaurant upstairs ---------- */}
        <section aria-labelledby="lantai-title" className="section bg-madu">
          <Container>
            <Reveal className="grid-12 items-center">
              <div className="lg:col-span-7">
                <h2 id="lantai-title" className="t-head font-display">
                  {upstairs.title}
                </h2>
                <p className="t-lead measure mt-4 font-medium">{upstairs.lead}</p>
                <p className="measure mt-3">{upstairs.body}</p>
                <p className="mt-3 font-bold">{upstairs.facts.join(" · ")}</p>
                <p className="mt-8 font-bold">{upstairs.dishesLabel}</p>
                <ul className="menu-list mt-2 grid max-w-[560px] sm:grid-cols-2 sm:gap-x-8">
                  {upstairs.dishes.map((d) => (
                    <li key={d.text} {...mock(d.mockup)}>
                      {d.text}
                    </li>
                  ))}
                </ul>
                <p className="price mt-4 font-bold" {...mock(upstairs.fromPrice.mockup)}>
                  {upstairs.fromPrice.text}
                </p>
              </div>
              <div className="mt-10 lg:col-span-5 lg:mt-0">
                <CupsArt drinks={upstairs.drinks} label={upstairs.drinksAlt} />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Kata mereka (kartu): rating + paraphrased themes ---------- */}
        <section aria-labelledby="kata-title" className="section bg-kartu">
          <Container>
            <Reveal className="grid-12">
              <div className="lg:col-span-4">
                <h2 id="kata-title" className="t-head font-display">
                  {praiseSection.title}
                </h2>
                <p className="t-lead mt-4">
                  <span className="font-bold">{praiseSection.rating}</span>
                  <br />
                  <span className="font-medium">{praiseSection.count}</span>
                </p>
                <p className="t-small mt-3 text-redup">{praiseSection.note}</p>
              </div>
              <ul className="praise-grid mt-8 lg:col-span-8 lg:mt-0">
                {praise.map((p) => (
                  <li key={p.title}>
                    <h3 className="t-lead font-display">{p.title}</h3>
                    <p className="measure mt-2">{p.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Kunjungi kami (abu): find the shop ---------- */}
        <section aria-labelledby="kunjungi-title" className="section bg-abu">
          <Container>
            <Reveal className="grid-12 items-start">
              <div className="lg:col-span-5">
                <h2 id="kunjungi-title" className="t-head font-display">
                  {visit.title}
                </h2>
                <address className="t-lead mt-4 font-medium not-italic">{shop.address}</address>
                <p className="mt-3">{shop.hours}</p>
                <p>{visit.parking}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-[148px] shrink-0 md:w-[176px] lg:w-[200px]">
                    <FacadeArt label={visit.facadeAlt} />
                  </div>
                  <p className="text-redup" {...mock(visit.wayfinding.mockup)}>
                    {visit.wayfinding.text}
                  </p>
                </div>
                <div className="mt-6">
                  <ActionButton kind="directions" label={actions.directions} />
                </div>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <MapEmbed />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------- Hubungi kami (oranye): close with the call ---------- */}
        <section aria-labelledby="hubungi-title" className="section bg-oranye">
          <Container>
            <div className="mx-auto max-w-[720px] text-center">
              <h2 id="hubungi-title" className="t-head font-display">
                {contact.title}
              </h2>
              <p className="t-lead mt-4">{contact.text}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ActionButton kind="call" label={actions.callFull} />
                <ActionButton kind="directions" label={actions.directions} variant="secondary" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BreadMore() {
  return (
    <div>
      <p className="font-bold">{breadSection.moreLabel}</p>
      <ul className="mt-1 flex flex-wrap gap-x-2">
        {breadMore.map((b, i) => (
          <li key={b.text} {...mock(b.mockup)}>
            {b.text}
            {i < breadMore.length - 1 && <span aria-hidden="true"> ·</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
