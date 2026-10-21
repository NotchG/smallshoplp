// Floor 4 placeholder until the owner sends a sunset photo: a flat, arch-clipped view over
// East Jakarta rooftops (water tanks included). 7 shapes, palette colours only.
// The sun is drawn at its final, sunk position; FloorGuide scrubs it in from 28px higher.
export default function SunsetWindow() {
  return (
    <svg viewBox="0 0 300 375" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="sunset-arch">
          <path d="M0 375V150A150 150 0 0 1 300 150V375Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#sunset-arch)">
        <rect width="300" height="375" fill="#E3BE78" />
        <rect y="196" width="300" height="179" fill="#E2A82C" />
        <circle className="sun" cx="150" cy="250" r="44" fill="#EEE7DA" />
        <path
          fill="#3A2618"
          d="M0 375V284H38V264H46V252a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12H70V296H112V272H150V288H196V256H204V242a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v14H232V292H268V276H300V375Z"
        />
        <rect y="326" width="300" height="49" fill="#7A5A3E" />
        <rect y="320" width="300" height="8" fill="#3A2618" />
      </g>
      <path d="M5 375V150A145 145 0 0 1 295 150V375" fill="none" stroke="#3A2618" strokeWidth="10" />
    </svg>
  );
}
