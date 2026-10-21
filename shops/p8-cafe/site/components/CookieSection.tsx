import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { KueBeruang } from "@/components/Illustrations";
import { cookies } from "@/content";

// The P8 tray paper: a faint repeat of "P8 Cafe", like the liners under every drink.
function LinerPattern() {
  return (
    <svg className="liner-pattern" aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id="p8-liner" width="180" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
          <text
            x="10"
            y="40"
            fill="#24211F"
            fillOpacity="0.07"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}
          >
            P8 Cafe
          </text>
          <text
            x="100"
            y="85"
            fill="#24211F"
            fillOpacity="0.07"
            style={{ fontFamily: "var(--font-display)", fontSize: "22px" }}
          >
            P8 Cafe
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p8-liner)" />
    </svg>
  );
}

// 2. Kopi + kue, gratis: the offer, shown big on the steel tray with the P8 liner.
export default function CookieSection() {
  return (
    <section id="kopi-kue" aria-labelledby="kopi-kue-judul" className="section bg-paper">
      <Container>
        <Reveal className="kk-grid">
          <div className="kk-head">
            <h2 id="kopi-kue-judul" className="t-head">
              {cookies.title}
            </h2>
            <p className="t-lead mt-4 max-w-[22ch]">{cookies.lead}</p>
          </div>
          <div className="kk-tray">
            <div className="tray">
              <div className="liner">
                <LinerPattern />
                <ul className="liner-cookies">
                  {cookies.items.map((c) => (
                    <li key={c.variant}>
                      <KueBeruang variant={c.variant} className="liner-cookie" />
                      <span className="t-small font-semibold">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="kk-body t-body max-w-[46ch]">{cookies.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
