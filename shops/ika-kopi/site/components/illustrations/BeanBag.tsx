// Bean bag 200 g, side view: kraft stand-up pouch with a crimped top, a green label band
// and a round mustard "200 g" sticker. Base on y = 192.
const teeth = Array.from({ length: 10 }, () => "l4.6-4l4.6 4").join("");

export default function BeanBag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      role="img"
      aria-label="Ilustrasi kantong biji kopi 200 gram berlabel hijau"
      className={className}
    >
      {/* crimped top seal */}
      <path d={`M74 46V30${teeth}V46Z`} fill="#B48B5C" />
      {/* pouch body and side shade */}
      <path d="M74 44H166L174 182Q174 192 164 192H76Q66 192 66 182Z" fill="#C8A274" />
      <path d="M150 44H166L174 182Q174 192 164 192H156Z" fill="#B48B5C" />
      {/* valve */}
      <circle cx="112" cy="64" r="6" fill="#B48B5C" />
      {/* label band with the name set as type */}
      <path d="M71.2 92H168.8L171.6 140H68.4Z" fill="#23613A" />
      <text
        x="120"
        y="121"
        textAnchor="middle"
        fill="#F5F3EE"
        style={{ fontFamily: "var(--font-display)", fontSize: "15px", letterSpacing: "1.5px" }}
      >
        IKA KOPI
      </text>
      {/* sticker */}
      <circle cx="148" cy="166" r="19" fill="#D89B3C" />
      <text
        x="148"
        y="170"
        textAnchor="middle"
        fill="#17231B"
        style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600 }}
      >
        200 g
      </text>
    </svg>
  );
}
