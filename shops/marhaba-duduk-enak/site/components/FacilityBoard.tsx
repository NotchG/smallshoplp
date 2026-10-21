import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { mock } from "@/lib/mockup";
import { facilities, type FacilityIcon } from "@/content";

// Wayfinding pictograms: 28px, 2px stroke, drawn in bohlam on the steel board.
function Pictogram({ icon }: { icon: FacilityIcon }) {
  const common = {
    className: "pictogram",
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };
  switch (icon) {
    case "mushala": // a dome on a low building, finial on top
      return (
        <svg {...common}>
          <path d="M14 3v3" />
          <path d="M6 15a8 8 0 0 1 16 0z" />
          <path d="M5 15h18" />
          <path d="M7 15v10h14V15" />
          <path d="M12 25v-4.5a2 2 0 0 1 4 0V25" />
        </svg>
      );
    case "ac": // snowflake
      return (
        <svg {...common}>
          <path d="M14 3v22M4.5 8.5l19 11M4.5 19.5l19-11" />
          <path d="M11 4.8l3 2.4 3-2.4M11 23.2l3-2.4 3 2.4" />
          <path d="M4.2 12.2l3.6-1.4-.6-3.8M23.8 15.8l-3.6 1.4.6 3.8" />
          <path d="M4.2 15.8l3.6 1.4-.6 3.8M23.8 12.2l-3.6-1.4.6-3.8" />
        </svg>
      );
    case "garden": // a shade tree on grass
      return (
        <svg {...common}>
          <path d="M14 24V14" />
          <path d="M14 15.5l-3.5-3M14 18l3.5-3" />
          <path d="M8.2 15.5A6 6 0 0 1 9 5.2a6 6 0 0 1 10 0 6 6 0 0 1 .8 10.3z" />
          <path d="M4 25h20" />
        </svg>
      );
    case "kids": // a child with arms up
      return (
        <svg {...common}>
          <circle cx="14" cy="6.5" r="3" />
          <path d="M14 11v8M14 19l-3.5 6M14 19l3.5 6" />
          <path d="M7 9.5l7 3 7-3" />
        </svg>
      );
    case "parking": // P sign
      return (
        <svg {...common}>
          <rect x="4" y="4" width="20" height="20" rx="3" />
          <path d="M11 20V8h4.2a3.6 3.6 0 0 1 0 7.2H11" />
        </svg>
      );
  }
}

// The facilities as a black signboard on the olive pavilion wall, Mushala first.
export default function FacilityBoard() {
  return (
    <section id="fasilitas" className="section bg-paviliun text-lis on-dark" aria-labelledby="fasilitas-title">
      <Container className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5 lg:pt-4">
          <h2 id="fasilitas-title" className="t-head font-bold">
            {facilities.heading}
          </h2>
          <p className="t-lead mt-3 max-w-[22ch]" {...mock(facilities.intro.mockup)}>
            {facilities.intro.text}
          </p>
        </div>
        <Reveal className="mt-8 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <ul className="signboard">
            {facilities.rows.map((r) => (
              <li key={r.icon} className="signboard__row">
                <Pictogram icon={r.icon} />
                <div>
                  <h3 className="t-lead font-semibold" {...mock(r.name.mockup)}>
                    {r.name.text}
                  </h3>
                  <p className="t-body mt-0.5 text-lis-soft" {...mock(r.detail.mockup)}>
                    {r.detail.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
