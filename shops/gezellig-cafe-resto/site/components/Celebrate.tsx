import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ChatIcon } from "@/components/Icons";
import { celebrate, shop } from "@/content";
import { mock } from "@/lib/mockup";

// Rayakan di sini: occasions on the plaster, and the one Delft object on the page,
// a "Gereserveerd" table card like the reserved card in the guests' photo.
export default function Celebrate() {
  const { card } = celebrate;
  return (
    <section aria-labelledby="rayakan-title" className="section">
      <Container>
        <Reveal className="grid-12 items-start gap-y-10">
          <div className="lg:col-span-7">
            <h2 id="rayakan-title" className="t-head">
              {celebrate.heading}
            </h2>
            <p className="t-lead measure mt-4 text-balance font-display md:mt-5" {...mock(celebrate.lead.mockup)}>
              {celebrate.lead.text}
            </p>
            <ul className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8 lg:grid-cols-1 lg:gap-6 xl:grid-cols-3">
              {celebrate.occasions.map((o) => (
                <li key={o.title}>
                  <h3 className="t-body font-semibold">{o.title}</h3>
                  <p className="t-body mt-1 text-besi-soft">{o.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside
            aria-label="Reservasi"
            className="relative bg-delft p-7 text-kapur on-dark md:max-w-[440px] md:p-9 lg:col-span-4 lg:col-start-9 lg:max-w-none"
          >
            <span aria-hidden className="pointer-events-none absolute inset-2.5 border border-kapur/35" />
            <p lang="nl" className="t-lead font-display italic">
              {card.word}
            </p>
            <p className="t-small mt-1 opacity-85">{card.gloss}</p>
            <p className="t-body mt-6" {...mock(card.copy.mockup)}>
              {card.copy.text}
            </p>
            <Button
              href={shop.whatsapp.url}
              variant="card"
              icon={<ChatIcon />}
              mockup={shop.whatsapp.mockup}
              className="relative mt-6 w-full"
            >
              {card.cta}
            </Button>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
