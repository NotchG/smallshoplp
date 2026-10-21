import { products, tea } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import LabelBox from "@/components/LabelBox";

// Tea on the butterfly-pea field: the owner's teapot photo beside the copy.
export default function Tea() {
  const t = products.tea;
  return (
    <section className="g-telang section" aria-labelledby="teh">
      <Container>
        <Reveal className="grid-page gap-y-8 md:gap-y-6">
          <div className="md:col-start-2 lg:col-start-8 lg:col-span-5 md:row-start-1 md:self-end">
            <h2 id="teh" className="t-head">
              {tea.heading}
            </h2>
            <p className="t-body mt-5 measure">{tea.body}</p>
            <p className="t-body text-muted mt-2 measure">{tea.served}</p>
          </div>

          <figure className="tea-photo md:col-start-1 lg:col-span-6 md:row-start-1 md:row-span-2">
            <img src={t.photo} alt={t.alt} width={1200} height={1200} loading="lazy" decoding="async" />
          </figure>

          <div className="md:col-start-2 lg:col-start-8 lg:col-span-5 md:row-start-2 md:self-start">
            <LabelBox name={t.name}>
              <p className="t-body font-bold" {...mock(t.price.mockup)}>
                {t.price.text}
              </p>
            </LabelBox>
            <h3 className="t-term mt-8">{tea.listLabel}</h3>
            <ul className="t-body tea-list mt-2">
              {tea.list.map((it) => (
                <li key={it.text} {...mock(it.mockup)}>
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
