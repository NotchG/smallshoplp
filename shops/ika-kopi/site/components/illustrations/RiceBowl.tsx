// Rice Bowl Chicken Katsu, side view: leaf-pattern bowl, rice, sliced breaded chicken,
// lettuce and a tomato slice above the rim. Base on y = 192.
export default function RiceBowl({ className = "" }: { className?: string }) {
  const clip = "ricebowl-clip"; // one instance on the page
  const leaf = "M0 0C6-10 6-22 0-32C-6-22-6-10 0 0Z";
  const slices = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 240 200"
      role="img"
      aria-label="Ilustrasi rice bowl: nasi, ayam katsu, selada, dan tomat di mangkuk bermotif daun"
      className={className}
    >
      <defs>
        <clipPath id={clip}>
          <path d="M30 120H210C210 158 182 182 144 184H96C58 182 30 158 30 120Z" />
        </clipPath>
      </defs>

      {/* lettuce behind, rice mound */}
      <path
        d="M36 121C30 102 36 84 50 76C54 63 68 58 77 64C87 55 102 60 104 74C112 86 108 104 100 121Z"
        fill="#7DAE4B"
      />
      <path d="M38 121C40 98 72 86 120 86C168 86 200 98 202 121Z" fill="#FBFAF6" />

      {/* tomato slice */}
      <circle cx="70" cy="102" r="23" fill="#D5452B" />
      <path d="M70 86c4 5 4 9 0 13-4-4-4-8 0-13ZM56 106c6-1 10 1 12 5-6 1-10-1-12-5ZM84 106c-6-1-10 1-12 5 6 1 10-1 12-5Z" fill="#F29C86" />

      {/* katsu slices */}
      {slices.map((i) => (
        <g key={i} transform={`translate(${108 + i * 24} ${i % 2 ? 88 : 84}) rotate(${-14 + i * 3})`}>
          <rect x="0" y="0" width="26" height="40" rx="6" fill="#C9772B" />
          <rect x="0" y="30" width="26" height="10" rx="5" fill="#A85B1F" />
          <rect x="3" y="5" width="6" height="22" rx="3" fill="#F1D7AE" />
        </g>
      ))}

      {/* bowl, rim band, leaves, foot */}
      <path d="M92 182H148L144 192H96Z" fill="#DCE3DD" />
      <path d="M30 120H210C210 158 182 182 144 184H96C58 182 30 158 30 120Z" fill="#E8EDE8" />
      <g clipPath={`url(#${clip})`}>
        <rect x="28" y="119" width="184" height="7" fill="#7F9BB3" />
        <path d={leaf} transform="translate(60 176) rotate(-38)" fill="#7F9BB3" />
        <path d={leaf} transform="translate(86 182) rotate(-12)" fill="#23613A" />
        <path d={leaf} transform="translate(118 180) rotate(6)" fill="#7F9BB3" />
        <path d={leaf} transform="translate(150 182) rotate(18)" fill="#23613A" />
        <path d={leaf} transform="translate(180 172) rotate(42)" fill="#7F9BB3" />
      </g>
    </svg>
  );
}
