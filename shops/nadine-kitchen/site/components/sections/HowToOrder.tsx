import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import OrderCard from "@/components/OrderCard";
import { mock } from "@/lib/mockup";
import { order } from "@/content";

export default function HowToOrder() {
  return (
    <section id="cara-pesan" aria-labelledby="cara-pesan-title" className="section bg-butter">
      <Reveal>
        <Container className="grid items-start gap-x-6 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:pr-6">
            <h2 id="cara-pesan-title" className="t-head head-gap">
              {order.heading}
            </h2>
            <ol className="flex flex-col gap-6">
              {order.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4" {...mock(step.mockup)}>
                  <span className="numeral" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="t-lead">{step.title}</h3>
                    <p className="t-body mt-1 text-grape-soft">{step.text}</p>
                    {step.note ? (
                      <p className="note-pill t-small mt-3" {...mock(step.note.mockup)}>
                        {step.note.text}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <OrderCard />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
