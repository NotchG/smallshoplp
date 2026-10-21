import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import BeanBag from "@/components/illustrations/BeanBag";
import { beansToGo, shop } from "@/content";
import { mock } from "@/lib/mockup";

// [MOCKUP] section: a quiet pause between honey-oak hairlines. Remove if the owner does not
// sell the bagged beans.
export default function BawaPulang() {
  return (
    <section aria-labelledby="bawa-h" {...mock(beansToGo.mockup)}>
      <Container>
        <Reveal className="grid-12 border-y border-kayu py-10 lg:items-center lg:py-14">
          <div className="max-w-60 lg:col-span-3 lg:max-w-none">
            <BeanBag className="block h-auto w-full" />
          </div>
          <div className="lg:col-span-6 lg:col-start-5">
            <h2 id="bawa-h" className="t-head font-display text-accent">{beansToGo.heading}</h2>
            <p className="mt-4 measure">{beansToGo.text}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <p className="font-semibold">{beansToGo.price}</p>
              <a href={shop.waUrl} target="_blank" rel="noopener" className="btn btn-secondary">
                <Icon name="chat" />
                {beansToGo.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
