import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ToplesP8 } from "@/components/Illustrations";
import { IconChat } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { takeHome, whatsappHref, whatsappSub } from "@/content";

// 6. Bawa pulang: the P8 Butter Cookies jar, large, with the list and the action beside it.
export default function TakeHomeSection() {
  return (
    <section id="bawa-pulang" aria-labelledby="bawa-judul" className="section bg-butter">
      <Container>
        <Reveal className="th-grid">
          <div className="th-head">
            <h2 id="bawa-judul" className="t-head">
              {takeHome.title}
            </h2>
            <p className="t-lead mt-4 max-w-[26ch]">{takeHome.lead}</p>
          </div>
          <div className="th-jar">
            <ToplesP8 className="jar" />
          </div>
          <div className="th-list">
            <ul className="space-y-5">
              <li>
                <h3 className="t-h3 feature-name">
                  <span>{takeHome.jar.text}</span>{" "}
                  <span className="feature-price tabular">
                    · <span {...mock(takeHome.jarPrice.mockup)}>{takeHome.jarPrice.text}</span>
                  </span>
                </h3>
                <p className="t-body mt-1" {...mock(takeHome.flavours.mockup)}>
                  {takeHome.flavours.text}
                </p>
              </li>
              <li className="hairline pt-5">
                <h3 className="t-h3 feature-name">
                  <span>{takeHome.hampers.text}</span>{" "}
                  <span className="feature-price">· {takeHome.hampersNote}</span>
                </h3>
              </li>
            </ul>
            <Button
              href={whatsappHref}
              variant="ink"
              icon={<IconChat />}
              label={takeHome.cta}
              sub={whatsappSub}
              className="mt-8"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
