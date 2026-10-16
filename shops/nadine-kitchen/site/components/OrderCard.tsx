"use client";
import { useId, useMemo, useState, type FormEvent } from "react";
import { FondantWord } from "@/components/FondantLetters";
import { ChatIcon } from "@/components/Icons";
import { mock } from "@/lib/mockup";
import { order, waLink } from "@/content";

const card = order.card;

function formatDate(value: string) {
  if (!value) return "";
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// "Kartu pesanan": four fields, a live preview of the name and age in fondant letters on a
// scalloped plaque, and a link that opens WhatsApp with the filled-in text.
// Nothing is stored or sent anywhere else.
export default function OrderCard() {
  const uid = useId();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [theme, setTheme] = useState("");
  const [date, setDate] = useState("");
  const [live, setLive] = useState(false);

  const href = useMemo(() => {
    const lines = [card.greeting];
    if (name.trim()) lines.push(`${card.lines.name}: ${name.trim()}`);
    if (age) lines.push(`${card.lines.age}${age}`);
    if (theme.trim()) lines.push(`${card.lines.theme}: ${theme.trim()}`);
    if (date) lines.push(`${card.lines.date}: ${formatDate(date)}`);
    return waLink(lines.join("\n"));
  }, [name, age, theme, date]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(href, "_blank", "noopener");
  };

  const shownName = name.trim() ? name.trim() : card.previewName;
  const shownAge = age || card.previewAge;
  const id = (k: string) => `${uid}-${k}`;

  return (
    <div className="card bg-fondant p-5 sm:p-8" {...mock(card.mockup)}>
      <h3 className="t-lead font-bold">{card.title}</h3>
      <p className="t-small mt-1 text-grape-soft">{card.intro}</p>

      <form className="mt-5 grid grid-cols-5 gap-x-3 gap-y-4" onSubmit={onSubmit} noValidate>
        <div className="col-span-5">
          <label className="label" htmlFor={id("name")}>
            {card.fields.name.label}
          </label>
          <input
            id={id("name")}
            className="input"
            type="text"
            autoComplete="off"
            maxLength={10}
            placeholder={card.fields.name.placeholder}
            value={name}
            onChange={(e) => {
              setLive(true);
              setName(e.target.value.slice(0, 10));
            }}
          />
        </div>
        <div className="col-span-2">
          <label className="label" htmlFor={id("age")}>
            {card.fields.age.label}
          </label>
          <input
            id={id("age")}
            className="input"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            maxLength={2}
            placeholder={card.fields.age.placeholder}
            value={age}
            onChange={(e) => {
              setLive(true);
              setAge(e.target.value.replace(/\D/g, "").slice(0, 2));
            }}
          />
        </div>
        <div className="col-span-3">
          <label className="label" htmlFor={id("date")}>
            {card.fields.date.label}
          </label>
          <input
            id={id("date")}
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="col-span-5">
          <label className="label" htmlFor={id("theme")}>
            {card.fields.theme.label}
          </label>
          <input
            id={id("theme")}
            className="input"
            type="text"
            autoComplete="off"
            maxLength={60}
            placeholder={card.fields.theme.placeholder}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        <div
          className={`plaque col-span-5 mt-2 px-6 py-7 text-center ${live ? "is-live" : ""}`}
          aria-hidden="true"
        >
          <div className="fondant-name plaque-word break-words">
            <FondantWord
              text={shownName}
              placeholder={!name.trim()}
              className="whitespace-normal"
            />
          </div>
          <div className="mt-1 flex items-baseline justify-center gap-2">
            <span className="t-lead text-grape-soft">ke-</span>
            <span className="fondant-name plaque-word">
              <FondantWord text={shownAge} offset={1} placeholder={!age} />
            </span>
          </div>
        </div>

        <div className="col-span-5 mt-2">
          <a
            className="btn btn-primary w-full"
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={card.buttonAria}
            {...mock(card.mockup)}
          >
            <ChatIcon />
            {card.button}
          </a>
          <p className="t-small mt-3 text-grape-soft">{card.note}</p>
        </div>
      </form>
    </div>
  );
}
