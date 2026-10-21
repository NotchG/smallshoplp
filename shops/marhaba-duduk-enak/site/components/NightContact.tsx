import Container from "@/components/Container";
import Button, { IconChat, IconPhone, IconPin } from "@/components/Button";
import { mock } from "@/lib/mockup";
import { contact, cta, footer, shop } from "@/content";

// Static festoon across the full width: 9 lit Edison bulbs on a sagging wire.
// viewBox 1440×120; three spans with three bulbs each.
const SPANS = [0, 480, 960];
const BULBS = SPANS.flatMap((s) => [
  [s + 120, 36.5],
  [s + 240, 44],
  [s + 360, 36.5],
]);

function Festoon() {
  return (
    <svg className="festoon" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="fs-glow">
          <stop offset="0" stopColor="#F2B441" stopOpacity="0.42" />
          <stop offset="0.5" stopColor="#F2B441" stopOpacity="0.12" />
          <stop offset="1" stopColor="#F2B441" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fs-bulb" cx="0.45" cy="0.4" r="0.65">
          <stop offset="0" stopColor="#FFF6DC" />
          <stop offset="0.55" stopColor="#FBD98A" />
          <stop offset="1" stopColor="#F2B441" />
        </radialGradient>
      </defs>
      <path d="M0 14Q240 74 480 14Q720 74 960 14Q1200 74 1440 14" fill="none" stroke="#3A4236" strokeWidth="2" />
      {BULBS.map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y + 30} r="34" fill="url(#fs-glow)" />
          <path d={`M${x} ${y}v7`} stroke="#3A4236" strokeWidth="2" />
          <rect x={x - 3.5} y={y + 6} width="7" height="8" rx="1" fill="#3A4236" />
          <path
            d={`M${x - 4} ${y + 14}h8q6 8 4.5 15q-1.5 7-8.5 7q-7 0-8.5-7q-1.5-7 4.5-15z`}
            fill="url(#fs-bulb)"
          />
        </g>
      ))}
    </svg>
  );
}

export default function NightContact() {
  return (
    <section id="hubungi" className="bg-kaca text-lis on-dark" aria-labelledby="hubungi-title">
      <Festoon />
      <Container className="pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 id="hubungi-title" className="t-head font-bold">
            {contact.heading}
          </h2>
          <p className="t-lead mt-4" {...mock(contact.reservation.mockup)}>
            {contact.reservation.text}
          </p>
          <p className="t-body mt-3 text-lis-soft nums">{contact.lateNote}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              href={shop.whatsapp.href}
              external
              variant="amber"
              icon={<IconChat />}
              {...mock(shop.whatsapp.mockup)}
            >
              {cta.whatsapp}
            </Button>
            <Button href={shop.phoneHref} variant="outline-dark" icon={<IconPhone />} className="nums">
              {cta.call}
            </Button>
            <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-link px-3 text-lis">
              <IconPin />
              {cta.directions}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-kaca text-lis-soft on-dark">
      <Container>
        <div className="border-t border-lis/15 py-6 md:flex md:items-baseline md:justify-between md:gap-6">
          <p className="t-small">{footer.line}</p>
          <p className="t-small mt-2 md:mt-0">{footer.draft}</p>
        </div>
      </Container>
    </footer>
  );
}
