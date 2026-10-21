// The zigzag from the garage mural: navy triangles on sunflower yellow. Under the hero only.
export default function MuralBand() {
  return (
    <svg className="mural-band" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="mural-zigzag" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M0 28 14 5 28 28Z" fill="#18213d" />
        </pattern>
      </defs>
      <rect width="100%" height="28" fill="url(#mural-zigzag)" />
    </svg>
  );
}
