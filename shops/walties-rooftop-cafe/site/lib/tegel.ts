import { c } from "./palette";

// One tegel tile, 40 x 40: a four-petal medallion (lampu petals, daun leaves, bata centre)
// with bata quarter-circles in the corners and daun half-diamonds on the edges, so the
// repeat forms new rosettes where four tiles meet, like the café's cement-tile tables.
// `soft` lowers the motif so a dish illustration can sit on top (tabletops).
export function tegelSvg({ soft = false }: { soft?: boolean } = {}) {
  const petal = "M20 19C15.6 15.2 16.4 9.4 20 6C23.6 9.4 24.4 15.2 20 19Z";
  const leaf = "M20 18C18 15.6 18.3 12.3 20 10.4C21.7 12.3 22 15.6 20 18Z";
  const petals = [0, 90, 180, 270]
    .map((r) => `<path d="${petal}" transform="rotate(${r} 20 20)" fill="${c.lampu}"/>`)
    .join("");
  const leaves = [45, 135, 225, 315]
    .map((r) => `<path d="${leaf}" transform="rotate(${r} 20 20)" fill="${c.daun}"/>`)
    .join("");
  const corners = [
    [0, 0],
    [40, 0],
    [0, 40],
    [40, 40],
  ]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="${c.bata}"/><circle cx="${x}" cy="${y}" r="2.6" fill="${c.krem}"/>`)
    .join("");
  const diamonds = [
    [20, 0],
    [20, 40],
    [0, 20],
    [40, 20],
  ]
    .map(([x, y]) => `<path d="M${x} ${y - 3.6}L${x + 3.6} ${y}L${x} ${y + 3.6}L${x - 3.6} ${y}Z" fill="${c.daun}"/>`)
    .join("");
  const motif = `${corners}${diamonds}${petals}${leaves}<circle cx="20" cy="20" r="2.6" fill="${c.bata}"/>`;
  const grout = soft
    ? `<path d="M0 .25H40M.25 0V40" stroke="${c.kayu}" stroke-opacity=".28" stroke-width=".5"/>`
    : "";
  const body = soft ? `<g opacity=".34">${motif}</g>${grout}` : motif;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" fill="${c.krem}"/>${body}</svg>`;
}

export function tegelUrl(opts?: { soft?: boolean }) {
  return `url("data:image/svg+xml,${encodeURIComponent(tegelSvg(opts))}")`;
}

// The same medallion redrawn for 20px (Kata mereka marks): bigger petals, a kayu tile edge,
// none of the corner and edge motifs that turn into specks at this size.
export function tegelMarkUrl() {
  const petal = "M10 9.4C7.6 7.6 7.9 4.4 10 2.6C12.1 4.4 12.4 7.6 10 9.4Z";
  const leaf = "M10 8.9C9 7.7 9.1 6 10 5C10.9 6 11 7.7 10 8.9Z";
  const petals = [0, 90, 180, 270]
    .map((r) => `<path d="${petal}" transform="rotate(${r} 10 10)" fill="${c.lampu}"/>`)
    .join("");
  const leaves = [45, 135, 225, 315]
    .map((r) => `<path d="${leaf}" transform="rotate(${r} 10 10)" fill="${c.daun}"/>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><rect x=".5" y=".5" width="19" height="19" fill="${c.krem}" stroke="${c.kayu}"/>${petals}${leaves}<circle cx="10" cy="10" r="1.7" fill="${c.bata}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
