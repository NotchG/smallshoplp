// Iced tea and iced coffee in the shop's dome-lid cups with the round orange print.
// Labels are HTML, 8px under each cup.
const DRINK: Record<string, { liquid: string; top: string }> = {
  "Es teh": { liquid: "#C27A2C", top: "#D9954A" },
  "Es kopi": { liquid: "#C9A27E", top: "#DDBE9E" },
};

function Cup({ name }: { name: string }) {
  const d = DRINK[name] ?? DRINK["Es teh"];
  return (
    <svg viewBox="0 0 120 200" aria-hidden="true" focusable="false" className="block h-auto w-full">
      {/* straw */}
      <rect x="66" y="4" width="7" height="80" rx="2" fill="#1F1D1B" transform="rotate(6 70 80)" />
      {/* liquid */}
      <path d="M22 86h76l-8 106H30Z" fill={d.liquid} />
      <path d="M22 86h76l-1 10H23Z" fill={d.top} />
      <rect x="32" y="94" width="20" height="16" rx="4" fill="#FFFFFF" opacity="0.35" transform="rotate(-10 42 102)" />
      <rect x="62" y="98" width="18" height="15" rx="4" fill="#FFFFFF" opacity="0.3" transform="rotate(12 71 105)" />
      {/* the round orange print */}
      <circle cx="60" cy="140" r="22" fill="none" stroke="#E46219" strokeWidth="3" />
      <circle cx="60" cy="140" r="14" fill="none" stroke="#E46219" strokeWidth="1.5" />
      <path d="M52 142c-4 0-5-6-1-7 0-4 5-6 8-3 2-3 7-3 9 0 4-1 6 4 3 6v5H52Z" fill="#E46219" />
      {/* cup wall and dome lid */}
      <path d="M18 76h84l-10 118H28Z" fill="#FFFFFF" fillOpacity="0.22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="12" y="70" width="96" height="9" rx="4.5" fill="#FFFFFF" fillOpacity="0.55" />
      <path d="M18 70c0-26 18-42 42-42s42 16 42 42Z" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="2.5" />
      <path d="M34 54c4-8 10-12 18-14" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function CupsArt({ drinks, label }: { drinks: string[]; label: string }) {
  return (
    <div role="img" aria-label={label} className="flex items-end justify-center gap-6 md:gap-10">
      {drinks.map((name) => (
        <figure key={name} className="w-[132px] md:w-[168px] lg:w-[196px]">
          <Cup name={name} />
          <figcaption className="mt-2 text-center font-medium" aria-hidden="true">
            {name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
