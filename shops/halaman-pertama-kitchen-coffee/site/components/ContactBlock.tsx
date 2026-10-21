import { hubungi, shop } from "@/content";
import { mock } from "@/lib/mockup";
import Container from "@/components/Container";
import SplitHeading from "@/components/SplitHeading";
import { IconChat, IconPhone, IconPin } from "@/components/Icons";

// Hubungi kami: the close. Narrow and centred, three actions.
export default function ContactBlock() {
  return (
    <section id="hubungi" className="section contact" aria-labelledby="hubungi-title">
      <Container>
        <div className="narrow mx-auto text-center">
          <SplitHeading id="hubungi-title" bold={hubungi.heading.bold} light={hubungi.heading.light} />
          <p className="t-lead mt-4 text-daun-muda" {...mock(hubungi.line.mockup)}>
            {hubungi.line.text}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a className="btn btn-kursi" href={shop.whatsapp.url} target="_blank" rel="noopener" {...mock(shop.whatsapp.mockup)}>
              <IconChat />
              {hubungi.whatsappLabel}
            </a>
            <a className="btn btn-line-light nums" href={`tel:${shop.phoneTel}`}>
              <IconPhone />
              {hubungi.callLabel}
            </a>
            <a className="btn btn-line-light" href={shop.directionsUrl} target="_blank" rel="noopener">
              <IconPin />
              {hubungi.directionsLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
