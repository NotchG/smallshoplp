// Es Teh Persik, side view: stemless balloon glass, orange drink, ice, a pale foam line and
// a glass straw. Drawn at the same scale as the rice bowl and croissant. Base on y = 192.
export default function IcedDrink({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      role="img"
      aria-label="Ilustrasi es teh persik dalam gelas tanpa tangkai"
      className={className}
    >
      {/* glass */}
      <path
        d="M82 80C76 102 71 124 73 146C75 172 92 188 106 192H134C148 188 165 172 167 146C169 124 164 102 158 80Z"
        fill="#DCE6DF"
        fillOpacity="0.7"
      />
      {/* drink and foam */}
      <path
        d="M80 102H160C163 116 164.5 131 164 146C162 168 150 182 136 186H104C90 182 78 168 76 146C75.5 131 77 116 80 102Z"
        fill="#EE9F3A"
      />
      <path d="M80 102H160C160.8 106 161.5 110 162 114H78C78.5 110 79.2 106 80 102Z" fill="#F7E1B8" />
      {/* ice */}
      <rect x="90" y="122" width="24" height="22" rx="5" transform="rotate(-12 102 133)" fill="#FFFFFF" fillOpacity="0.4" />
      <rect x="124" y="128" width="24" height="22" rx="5" transform="rotate(10 136 139)" fill="#FFFFFF" fillOpacity="0.4" />
      <rect x="104" y="152" width="22" height="20" rx="5" transform="rotate(-4 115 162)" fill="#FFFFFF" fillOpacity="0.4" />
      {/* glass straw */}
      <rect x="136" y="44" width="7" height="118" rx="3.5" transform="rotate(12 139.5 103)" fill="#C3D1C7" fillOpacity="0.85" />
      {/* rim and highlight */}
      <rect x="80" y="78" width="80" height="4" rx="2" fill="#C3D1C7" />
      <path d="M84 118C82 130 82 142 84 156H88.5C86.5 142 86.5 130 88.5 118Z" fill="#FFFFFF" fillOpacity="0.6" />
    </svg>
  );
}
