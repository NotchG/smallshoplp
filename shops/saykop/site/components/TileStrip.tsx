// The encaustic floor tile from the bar (orange, black and grey on white), as a full-bleed
// threshold strip under the hero. One 64x64 tile; rust petals meet at the corners to form
// a flower across four tiles, grey hairline arcs ring it, a char eight-petal flower sits centre.
const petals = [0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => `<ellipse cx='32' cy='21.5' rx='2.4' ry='6.4' transform='rotate(${a} 32 32)'/>`)
  .join("");
const dots = [45, 135, 225, 315]
  .map((a) => `<circle cx='32' cy='14' r='1.9' transform='rotate(${a} 32 32)'/>`)
  .join("");
const corner = (x: number, y: number, r: number) =>
  `<ellipse cx='${x}' cy='${y}' rx='8' ry='3.3' transform='rotate(${r} ${x} ${y})'/>`;

const tile = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
<rect width='64' height='64' fill='#FFFFFF'/>
<g fill='none' stroke='#A39E96' stroke-width='0.9'>
<path d='M0 21A21 21 0 0 0 21 0M43 0A21 21 0 0 0 64 21M64 43A21 21 0 0 0 43 64M21 64A21 21 0 0 0 0 43'/>
<path d='M32 3C40 10 54 24 61 32C54 40 40 54 32 61C24 54 10 40 3 32C10 24 24 10 32 3Z'/>
<rect x='0.45' y='0.45' width='63.1' height='63.1'/>
</g>
<g fill='#A9461F'>${corner(6.5, 6.5, 45)}${corner(57.5, 6.5, 135)}${corner(57.5, 57.5, 45)}${corner(6.5, 57.5, 135)}</g>
<g fill='#23211F'>${petals}${dots}<circle cx='32' cy='32' r='3.2'/></g>
</svg>`;

const uri = `url("data:image/svg+xml,${encodeURIComponent(tile.replace(/\n/g, ""))}")`;

export default function TileStrip() {
  return <div className="tile-strip" aria-hidden="true" style={{ backgroundImage: uri }} />;
}
