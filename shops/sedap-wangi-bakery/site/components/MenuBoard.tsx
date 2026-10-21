"use client";
import { useEffect, useRef, useState } from "react";
import { copy, menu, type MenuCategory } from "@/content";
import { ChevronIcon } from "./Icons";

// The kitchen menu as real text, in the owner's printed style: paper panel, brick frame,
// red tabs with the thin rule and small circle, dotted leaders from name to price.
// Every category renders open (no-JS safe); on phones all but Soto and Mie Spesial close on mount.
const columns: string[][] = [
  ["mie-spesial", "soto", "tambahan"],
  ["mie-bangka", "nasi", "ayam", "minuman"],
];

function Category({
  cat,
  order,
  register,
  wide,
}: {
  cat: MenuCategory;
  order: number;
  register: (el: HTMLDetailsElement | null) => void;
  wide: boolean;
}) {
  const titleId = `menu-${cat.id}`;
  return (
    <details open className="menu-cat" style={{ order }} ref={register} data-open-on-phone={cat.openOnPhone ? "" : undefined}>
      <summary
        tabIndex={wide ? -1 : undefined}
        onClick={(e) => {
          // From 768px the board is a printed menu: every category stays open.
          if (wide) e.preventDefault();
        }}
      >
        <div className="tab">
          <h3 id={titleId} className="tab-block">
            {cat.title}
          </h3>
          <span className="tab-rule" aria-hidden="true" />
        </div>
        <ChevronIcon className="menu-chev" />
      </summary>
      <ul className="menu-rows t-body" aria-labelledby={titleId}>
        {cat.rows.map((r, i) => (
          <li key={`${r.name}-${i}`} className={r.addon ? "is-addon" : undefined}>
            <span className="menu-name">
              {r.addon ? "+ " : ""}
              {r.name}
              {r.sub ? <small>{r.sub}</small> : null}
            </span>
            <span className="menu-leader" aria-hidden="true" />
            <span className="menu-price">{r.price}</span>
          </li>
        ))}
      </ul>
      {cat.note ? <p className="menu-note t-small">{cat.note}</p> : null}
    </details>
  );
}

export default function MenuBoard() {
  const refs = useRef<HTMLDetailsElement[]>([]);
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setWide(mq.matches);
      refs.current.forEach((el) => {
        if (!el) return;
        el.open = mq.matches || el.hasAttribute("data-open-on-phone");
      });
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  const register = (el: HTMLDetailsElement | null) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };
  const byId = Object.fromEntries(menu.map((c, i) => [c.id, { cat: c, order: i }]));
  return (
    <div className="board" role="group" aria-label={copy.dapur.boardTitle}>
      <div className="board-cols">
        {columns.map((ids, ci) => (
          <div className="board-col" key={ci}>
            {ids.map((id) => (
              <Category key={id} cat={byId[id].cat} order={byId[id].order} register={register} wide={wide} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
