import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import StringLights from "@/components/StringLights";
import Button from "@/components/Button";
import BalloonMark from "@/components/BalloonMark";
import { actions, hours, shop, visit } from "@/content";

// Night ground with the string-light garland. "Komp. Billy Moon" leads the address for drivers.
export default function Visit() {
  return (
    <section id="kunjungi" className="ground-ink" aria-labelledby="visit-title">
      <StringLights variant="wide" className="block h-[72px] w-full" />
      <div className="section pt-10 lg:pt-14">
        <Container>
          <Reveal>
            <div className="grid gap-x-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
              <div className="lg:col-span-5 lg:row-start-1">
                <h2 id="visit-title" className="t-head">
                  {visit.title}
                </h2>
                <address className="mt-6 not-italic">
                  <span className="t-lead block font-bold text-amber">{shop.address.complex}</span>
                  <span className="t-lead mt-1 block">{shop.address.street}</span>
                  <span className="mt-1 block text-blue-soft">{shop.address.area}</span>
                </address>
                <p className="mt-4 font-semibold">{visit.parking}</p>
                <table className="hours-table mt-6 w-full max-w-sm" aria-label={visit.hoursCaption}>
                  <tbody>
                    {hours.rows.map((r) => (
                      <tr
                        key={r.days}
                        className={r.late ? "text-amber" : "border-b border-blue-soft/25"}
                      >
                        <th scope="row">{r.days}</th>
                        <td>
                          {r.time}
                          {r.late && <span className="ml-3 t-small font-medium">{hours.lateTag}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-10 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:mt-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-tile">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center" aria-hidden="true">
                    <BalloonMark className="h-16 w-12" />
                    <p className="t-lead font-bold text-blue">{shop.address.complex}</p>
                    <p className="text-muted">{shop.address.street}</p>
                  </div>
                  <iframe
                    src={shop.mapEmbed}
                    title={shop.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
              <div className="mt-8 lg:col-span-5 lg:row-start-2 lg:mt-10 lg:self-start">
                <Button href={shop.mapsUrl} icon="directions" external>
                  {actions.directions}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
