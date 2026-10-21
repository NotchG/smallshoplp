import Container from "./Container";
import Reveal from "./Reveal";
import BaggedBun from "./BaggedBun";
import { mock } from "@/lib/mockup";
import { roti, rotiSection } from "@/content";

const TILTS = [-3, -2, -4, -3, -2, -4, -3];

// The buns on a wooden tray, chocolate first.
export default function RotiSection() {
  const [featured, ...rest] = roti;
  return (
    <section id="roti" aria-labelledby="roti-h" className="section bg-kotak">
      <Container>
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-12 lg:items-end">
          <h2 id="roti-h" className="t-head lg:col-span-5">
            {rotiSection.heading}
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-lead serif font-medium" {...mock(rotiSection.lead.mockup)}>
              {rotiSection.lead.text}
            </p>
            <p className="t-body measure mt-2">{rotiSection.body.text}</p>
          </div>
        </div>

        <Reveal className="mt-8 lg:mt-10">
          <ul
            aria-label={rotiSection.trayLabel}
            className="roti-tray on-kayu grid grid-cols-2 gap-x-4 gap-y-6 p-4 text-kotak sm:p-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8 lg:p-8"
          >
            <li className="col-span-2 md:col-span-3 md:flex md:items-center md:gap-8 lg:col-span-2 lg:row-span-2 lg:block">
              <BaggedBun
                variant={featured.variant}
                sticker={featured.sticker}
                label={`${featured.name} dalam kantong Toko Roti Tegal, berstiker ${featured.sticker}, bertabur serutan cokelat`}
                className="md:w-1/2 md:flex-none lg:w-full"
                tilt={TILTS[0]}
              />
              <div className="mt-4 md:mt-0 lg:mt-5">
                <p className="t-lead serif font-semibold" data-check>
                  {featured.name}
                  {featured.price && (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span {...mock(featured.priceMockup)}>
                        {featured.price}
                      </span>
                    </>
                  )}
                </p>
                {featured.note && <p className="t-body measure mt-2">{featured.note}</p>}
              </div>
            </li>
            {rest.map((r, i) => (
              <li key={r.variant} {...mock(r.mockup)}>
                <BaggedBun
                  variant={r.variant}
                  sticker={r.sticker}
                  label={`${r.name} dalam kantong Toko Roti Tegal, berstiker ${r.sticker}`}
                  tilt={TILTS[i + 1]}
                />
                <p className="t-body mt-2" data-check>
                  {r.name}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
