import { groups, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "../Container";
import PlateButton from "../PlateButton";
import Reveal from "../Reveal";

const tone = { tembok: "text-tembok", kuning: "text-kuning" } as const;
const size = { small: "t-small", body: "t-body", lead: "t-lead" } as const;

export default function Groups() {
  return (
    <section id="rombongan" aria-labelledby="rombongan-h" className="wall-rumput section">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
            <div className="lg:col-span-6">
              <h2 id="rombongan-h" className="font-display t-head">
                {groups.heading[0]} <span className="nowrap">{groups.heading[1]}</span>
              </h2>
              <p className="t-lead font-semibold mt-5">{groups.lead}</p>
              <ul className="mt-5 space-y-2">
                {groups.occasions.map((o) => (
                  <li key={o.text} className="flex items-center gap-3" {...mock(o.mockup)}>
                    <span className="size-2.5 rounded-full bg-tembok flex-none" aria-hidden="true" />
                    {o.text}
                  </li>
                ))}
              </ul>
              <p className="mt-5 measure" {...mock(groups.lesehan.mockup)}>{groups.lesehan.text}</p>
              <div className="mt-8">
                <PlateButton href={shop.whatsapp.url} variant="white" external mockup={shop.whatsapp.mockup}>
                  {groups.cta}
                </PlateButton>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="easel" {...mock(groups.boardMockup)}>
                <div className="easel-board font-display uppercase">
                  {groups.board.map((l, i) => (
                    <div key={l.text}>
                      {i === 2 && <div className="chalk-rule" aria-hidden="true" />}
                      <p className={`${tone[l.tone]} ${size[l.size]} ${i > 0 ? "mt-2" : ""} tabular`}>{l.text}</p>
                    </div>
                  ))}
                </div>
                <span className="easel-leg left" aria-hidden="true" />
                <span className="easel-leg right" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
