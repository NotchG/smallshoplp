"use client";
import { useState } from "react";
import Cake from "@/components/Cake";
import { CaseWindow, PlaqueText, PriceTag, Shelf } from "@/components/Case";
import { IconChat, IconCheck } from "@/components/Icons";
import { cakes, hero, order, orderMessage, waLink, type CakeId } from "@/content";

function StepMark({ n }: { n: number }) {
  return (
    <span className="step-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32">
        <path
          d="M16 28.5S3.5 21.2 3.5 12.3A6.6 6.6 0 0 1 16 8.6a6.6 6.6 0 0 1 12.5 3.7c0 8.9-12.5 16.2-12.5 16.2z"
          fill="#33190F"
        />
      </svg>
      <span>{n}</span>
    </span>
  );
}

// Compose a cake order and send it on WhatsApp. With no JS, the link carries the defaults.
export default function OrderComposer() {
  const [size, setSize] = useState<number>(order.defaultSize);
  const [flavour, setFlavour] = useState<CakeId>(order.defaultFlavour);
  const [name, setName] = useState("");

  const cake = cakes.find((c) => c.id === flavour) ?? cakes[0];
  const sizeInfo = order.sizes.find((s) => s.cm === size) ?? order.sizes[1];
  const cleanName = name.trim();
  const writing = `${order.defaultPlaque} ${cleanName}`.trim();
  const href = waLink(orderMessage(size, cake.name, cleanName));

  return (
    <form className="composer" onSubmit={(e) => e.preventDefault()} data-mockup="">
      <div className="composer-head">
        <h2 id="pesan-title" className="t-head t-headfont">
          {order.heading}
        </h2>
        <p className="t-lead mt-3">{order.intro}</p>
      </div>

      <fieldset className="composer-size">
        <legend>
          <span className="step-legend">
            <StepMark n={1} />
            <span className="t-lead t-namefont">{order.steps.size}</span>
          </span>
        </legend>
        <div className="chips">
          {order.sizes.map((s) => (
            <label key={s.cm} className="chip">
              <input
                type="radio"
                name="ukuran"
                value={s.cm}
                checked={size === s.cm}
                onChange={() => setSize(s.cm)}
              />
              <span>
                <IconCheck size={18} className="chip-check" />
                <span className="num">{s.cm} cm</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="composer-flavour">
        <legend>
          <span className="step-legend">
            <StepMark n={2} />
            <span className="t-lead t-namefont">{order.steps.flavour}</span>
          </span>
        </legend>
        <div className="chips">
          {order.flavours.map((f) => {
            const c = cakes.find((x) => x.id === f)!;
            return (
              <label key={f} className="chip">
                <input
                  type="radio"
                  name="rasa"
                  value={c.name}
                  checked={flavour === f}
                  onChange={() => setFlavour(f)}
                />
                <span>
                  <IconCheck size={18} className="chip-check" />
                  {c.name}
                </span>
              </label>
            );
          })}
        </div>
        <p className="t-body mt-3">{order.otherFlavour}</p>
      </fieldset>

      <div className="composer-preview">
        <CaseWindow className="preview-window">
          <div className="shelf-stage preview-stage">
            <div className="preview-stack" style={{ transform: `scale(${sizeInfo.scale})` }}>
              {order.flavours.map((f) => {
                const c = cakes.find((x) => x.id === f)!;
                const on = f === flavour;
                return (
                  <div key={f} className="preview-cake" data-on={on ? "true" : "false"}>
                    <Cake
                      flavour={f}
                      hidden={!on}
                      label={`Pratinjau kue ${c.name} ${size} cm dengan tulisan ${writing}`}
                      plaque={<PlaqueText lines={hero.plaque.lines} name={cleanName || undefined} />}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <Shelf />
          <div className="preview-tag-row">
            <PriceTag as="p" name={cake.name} sizeLine={`${size} cm`} price={sizeInfo.price} priceMockup />
          </div>
        </CaseWindow>
      </div>

      <div className="composer-name">
        <label htmlFor="nama-kue" className="step-legend">
          <StepMark n={3} />
          <span className="t-lead t-namefont">{order.steps.name}</span>
        </label>
        <input
          id="nama-kue"
          className="name-field"
          type="text"
          inputMode="text"
          autoComplete="off"
          maxLength={order.maxName}
          placeholder={order.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby="nama-kue-hint"
        />
        <p id="nama-kue-hint" className="t-small mt-2">
          Ditulis di plakat kue, gratis. Paling banyak {order.maxName} huruf.
        </p>
      </div>

      <div className="composer-cta">
        <a className="btn btn-kakao" href={href} target="_blank" rel="noopener noreferrer">
          <IconChat />
          {order.cta}
        </a>
        <p className="t-body mt-4" aria-live="polite">
          <span className="font-bold">{order.summaryLabel}:</span>{" "}
          <span className="num">{size} cm</span> · {cake.name} · tulisan “{writing}”
        </p>
      </div>
    </form>
  );
}
